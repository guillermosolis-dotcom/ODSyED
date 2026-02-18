// ============================================================
// app.js - Logica de busqueda y renderizado de fichas
// Depende de: data.js (variable global `db`)
// ============================================================

// ==== HELPERS ====

function normalizarTexto(txt) {
    return txt
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .trim();
}

function subsistemaClass(s) {
    var map = {
        'DGETI': 'dgeti',
        'CONALEP': 'conalep',
        'CECyTE': 'cecyte',
        'DGETAyCM': 'dgetaycm',
        'BTED': 'bted'
    };
    return map[s] || 'dgeti';
}

function renderTagsSubsistemas(subsistemas) {
    return subsistemas.map(function(s) {
        return '<span class="tag-subsistema tag-' + subsistemaClass(s) + '">' + s + '</span>';
    }).join('');
}

function renderTagsSubsistemasCardHeader(subsistemas) {
    return subsistemas.map(function(s) {
        return '<span class="tag-sub-ficha ' + subsistemaClass(s) + '">' + s + '</span>';
    }).join('');
}

function highlightTexto(texto, query) {
    if (!query) return texto;
    var q = normalizarTexto(query);
    var palabras = q.split(/\s+/).filter(function(p) { return p.length > 1; });
    if (palabras.length === 0) return texto;
    var pattern = palabras.map(function(p) {
        return p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('|');
    var textoNorm = normalizarTexto(texto);
    var re = new RegExp(pattern, 'gi');
    var match;
    var offsets = [];
    while ((match = re.exec(textoNorm)) !== null) {
        offsets.push({ start: match.index, end: match.index + match[0].length });
    }
    if (offsets.length === 0) return texto;
    var result = '';
    var prev = 0;
    for (var i = 0; i < offsets.length; i++) {
        var o = offsets[i];
        result += texto.slice(prev, o.start) + '<mark>' + texto.slice(o.start, o.end) + '</mark>';
        prev = o.end;
    }
    result += texto.slice(prev);
    return result;
}

// ==== BUSQUEDA ====

var selectedIndex = -1;
var currentResults = [];

function onSearch() {
    var q = document.getElementById('searchInput').value.trim();
    var q_norm = normalizarTexto(q);

    if (q_norm.length < 1) {
        currentResults = [];
        hideResults();
        document.getElementById('searchStats').textContent = '';
        return;
    }

    var palabras = q_norm.split(/\s+/).filter(function(p) { return p.length > 0; });

    currentResults = db.filter(function(item) {
        var textoNombre = normalizarTexto(item.nombre);
        var textSubs = item.subsistemas.map(function(s) { return normalizarTexto(s); }).join(' ');
        var textoTotal = textoNombre + ' ' + textSubs;
        return palabras.every(function(p) { return textoTotal.includes(p); });
    });

    currentResults.sort(function(a, b) {
        var an = normalizarTexto(a.nombre);
        var bn = normalizarTexto(b.nombre);
        var qn = normalizarTexto(q);
        var ai = an.startsWith(qn) ? 0 : 1;
        var bi = bn.startsWith(qn) ? 0 : 1;
        if (ai !== bi) return ai - bi;
        return an.localeCompare(bn);
    });

    selectedIndex = -1;
    renderResults(q);
    document.getElementById('searchStats').textContent =
        currentResults.length > 0
            ? currentResults.length + ' carrera(s) encontrada(s)'
            : '';
}

function renderResults(q) {
    var list = document.getElementById('resultsList');
    list.innerHTML = '';

    if (currentResults.length === 0) {
        list.innerHTML = '<div class="no-results">No se encontraron carreras con ese criterio de busqueda.</div>';
        list.classList.add('visible');
        return;
    }

    currentResults.forEach(function(item, idx) {
        var div = document.createElement('div');
        div.className = 'result-item';
        div.setAttribute('data-index', idx);

        var nombreHL = highlightTexto(item.nombre, q);
        var tagsHTML = renderTagsSubsistemas(item.subsistemas);

        div.innerHTML =
            '<div class="result-carrera">' + nombreHL + '</div>' +
            '<div class="result-subsistemas">' + tagsHTML + '</div>';

        div.addEventListener('mousedown', function(e) {
            e.preventDefault();
            seleccionarCarrera(idx);
        });

        list.appendChild(div);
    });

    list.classList.add('visible');
}

function showResults() {
    if (currentResults.length > 0 || document.getElementById('searchInput').value.trim().length > 0) {
        document.getElementById('resultsList').classList.add('visible');
    }
}

function hideResults() {
    var list = document.getElementById('resultsList');
    list.classList.remove('visible');
    list.innerHTML = '';
}

function seleccionarCarrera(idx) {
    var item = currentResults[idx];
    if (!item) return;
    document.getElementById('searchInput').value = item.nombre;
    document.getElementById('searchStats').textContent = 'Subsistemas: ' + item.subsistemas.join(', ');
    hideResults();
    renderFicha(item);
}

// Cerrar resultados al hacer click fuera
document.addEventListener('click', function(e) {
    var wrap = document.querySelector('.search-input-wrap');
    if (!wrap.contains(e.target)) {
        hideResults();
    }
});

// ==== FICHA ====

function renderFicha(d) {
    var area = document.getElementById('renderArea');
    var btn = document.getElementById('btnPrint');
    btn.style.display = 'block';

    area.innerHTML =
        '<div class="ficha-body">' +
            '<div class="carrera-header-card card">' +
                '<span class="card-label">Carrera Tecnica Seleccionada</span>' +
                '<h2>' + d.nombre + '</h2>' +
                '<div class="subsistemas-ficha">' +
                    renderTagsSubsistemasCardHeader(d.subsistemas) +
                '</div>' +
            '</div>' +

            '<div class="card card-scian">' +
                '<span class="card-label">Referente SCIAN (INEGI)</span>' +
                '<div class="card-content">' +
                    '<span style="font-family:\'IBM Plex Mono\',monospace; font-size:22px; font-weight:700; color:var(--scian); letter-spacing:3px; display:block; margin-bottom:6px;">' + d.s + '</span>' +
                    d.sec +
                '</div>' +
            '</div>' +

            '<div class="col-span-2 card card-highlight">' +
                '<span class="card-label">Modulo Profesional y Propuestas de Puestos de Aprendizaje (Dual)</span>' +
                '<div class="card-content" style="font-weight:700; color:var(--primary); margin-bottom:12px;">' + d.m + '</div>' +
                '<hr style="margin:0 0 12px; border:0; border-top:1px solid #d1fae5;">' +
                '<div class="card-content">' +
                    '<ul style="margin:0; padding-left:20px; line-height:1.8;">' +
                        d.a.map(function(act) { return '<li>' + act + '</li>'; }).join('') +
                    '</ul>' +
                '</div>' +
            '</div>' +

            '<div class="card card-ods">' +
                '<span class="card-label">ODS Principal</span>' +
                '<div style="font-size:36px; font-weight:800; color:var(--ods-blue); line-height:1; margin-bottom:4px;">' + d.o1 + '</div>' +
                '<div class="card-content" style="font-weight:700; font-size:13px; margin-bottom:10px; color:#0369a1;">' + d.o1_t + '</div>' +
                '<img src="https://guillermosolis-dotcom.github.io/ODSyED/' + d.o1 + '.png"' +
                     ' class="ods-img-large"' +
                     ' onerror="this.src=\'https://placehold.co/110x110/00aed9/ffffff?text=ODS+' + d.o1 + '\'"' +
                     ' alt="ODS ' + d.o1 + '">' +
            '</div>' +

            '<div class="card">' +
                '<span class="card-label">Habilidad Sostenible</span>' +
                '<div class="card-content" style="font-weight:700; font-size:16px; color:var(--primary); margin-bottom:10px;">' + d.h + '</div>' +
                '<div class="indicador-box">INDICADOR: ' + d.i + '</div>' +
            '</div>' +

            '<div class="card card-dark">' +
                '<span class="card-label">Sinergia Sistemica</span>' +
                '<div class="card-content" style="margin-bottom:18px; line-height:1.6;">"' + d.d + '"</div>' +
                '<div style="display:flex; flex-direction:column; gap:10px;">' +
                    '<div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">' +
                        '<span class="mini-ods">ODS ' + d.o1 + '</span>' +
                        '<span style="color:rgba(255,255,255,0.6);">+</span>' +
                        '<span class="mini-ods">ODS ' + d.o2 + '</span>' +
                    '</div>' +
                    '<div style="font-size:12px; line-height:1.4; opacity:0.85;">' +
                        '<span style="color:var(--ods-blue); font-weight:700;">Vinculo Secundario:</span><br>' + d.o2_t +
                    '</div>' +
                '</div>' +
            '</div>' +

            '<div class="instrucciones-box">' +
                '<h4>ORIENTACIONES PARA LA O EL INSTRUCTOR</h4>' +
                '<p class="card-content" style="font-size:15px; color:#92400e; font-weight:500; margin:0;">' + d.orientacion + '</p>' +
            '</div>' +
        '</div>';
}
