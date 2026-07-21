// =========================================================
// DATOS INICIALES — stock real de El Mordiscón (portado del sitio en producción)
// =========================================================
const DATOS_INICIAL = [
  { id: 1, nombre: "Whisky JW Rojo", categoria: "Licores", unidPorCaja: 1, stockUnid: 5, minimo: 2, quiebre: 2, pedidoSugerido: 4 },
  { id: 2, nombre: "Gin Beefitter", categoria: "Licores", unidPorCaja: 1, stockUnid: 3, minimo: 2, quiebre: 2, pedidoSugerido: 2 },
  { id: 3, nombre: "Vodka Stoly 1 litro", categoria: "Licores", unidPorCaja: 1, stockUnid: 11, minimo: 4, quiebre: 4, pedidoSugerido: 6 },
  { id: 4, nombre: "Ron Habana", categoria: "Licores", unidPorCaja: 1, stockUnid: 4, minimo: 2, quiebre: 2, pedidoSugerido: 2 },
  { id: 5, nombre: "Campari", categoria: "Licores", unidPorCaja: 1, stockUnid: 2, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 6, nombre: "Tequila Jose Cuervo Especial Blanco", categoria: "Licores", unidPorCaja: 1, stockUnid: 2, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 7, nombre: "Cognac", categoria: "Licores", unidPorCaja: 1, stockUnid: 4, minimo: 2, quiebre: 2, pedidoSugerido: 3 },
  { id: 8, nombre: "DIAMANTE Oporto", categoria: "Licores", unidPorCaja: 1, stockUnid: 3, minimo: 2, quiebre: 2, pedidoSugerido: 4 },
  { id: 9, nombre: "ZALAMERO Jerez", categoria: "Licores", unidPorCaja: 1, stockUnid: 4, minimo: 2, quiebre: 2, pedidoSugerido: 2 },
  { id: 10, nombre: "Cacao", categoria: "Licores", unidPorCaja: 1, stockUnid: 5, minimo: 2, quiebre: 2, pedidoSugerido: 4 },
  { id: 11, nombre: "Menta", categoria: "Licores", unidPorCaja: 1, stockUnid: 2, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 12, nombre: "Araucano", categoria: "Licores", unidPorCaja: 1, stockUnid: 2, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 13, nombre: "Manzanilla", categoria: "Licores", unidPorCaja: 1, stockUnid: 2, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 14, nombre: "Granadina", categoria: "Licores", unidPorCaja: 1, stockUnid: 1, minimo: 1, quiebre: 1, pedidoSugerido: 1 },
  { id: 15, nombre: "Amareto", categoria: "Licores", unidPorCaja: 1, stockUnid: 4, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 16, nombre: "Triple sec", categoria: "Licores", unidPorCaja: 1, stockUnid: 5, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 17, nombre: "Cherry", categoria: "Licores", unidPorCaja: 1, stockUnid: 4, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 18, nombre: "Fernet Branca", categoria: "Licores", unidPorCaja: 1, stockUnid: 5, minimo: 1, quiebre: 1, pedidoSugerido: 5 },
  { id: 19, nombre: "Cinzano Bianco", categoria: "Licores", unidPorCaja: 1, stockUnid: 3, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 20, nombre: "Cinzano Rosso", categoria: "Licores", unidPorCaja: 1, stockUnid: 3, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 21, nombre: "Martini Bianco", categoria: "Licores", unidPorCaja: 1, stockUnid: 2, minimo: 1, quiebre: 1, pedidoSugerido: 2 },
  { id: 22, nombre: "Pisco Mistral 40°", categoria: "Pisco", unidPorCaja: 1, stockUnid: 4, minimo: 2, quiebre: 2, pedidoSugerido: 4 },
  { id: 23, nombre: "Pisco Alto del Carmen 35° 1L", categoria: "Pisco", unidPorCaja: 6, stockUnid: 24, minimo: 6, quiebre: 6, pedidoSugerido: 18 },
  { id: 24, nombre: "Pisco Alto del Carmen 40° 3/4 Blanco", categoria: "Pisco", unidPorCaja: 6, stockUnid: 15, minimo: 6, quiebre: 6, pedidoSugerido: 12 },
  { id: 25, nombre: "Pisco Alto del Carmen 35° 3/4", categoria: "Pisco", unidPorCaja: 6, stockUnid: 30, minimo: 6, quiebre: 6, pedidoSugerido: 18 },
  { id: 26, nombre: "Pisco Capel 35° 1L", categoria: "Pisco", unidPorCaja: 6, stockUnid: 30, minimo: 12, quiebre: 12, pedidoSugerido: 24 },
  { id: 27, nombre: "Pisco Mistral 35° 3/4", categoria: "Pisco", unidPorCaja: 6, stockUnid: 12, minimo: 1, quiebre: 1, pedidoSugerido: 6 },
  { id: 28, nombre: "Pisco Mistral 35° 1L", categoria: "Pisco", unidPorCaja: 6, stockUnid: 0, minimo: 1, quiebre: 1, pedidoSugerido: 18 },
  { id: 29, nombre: "Whisky JW Negro", categoria: "Licores", unidPorCaja: 1, stockUnid: 1, minimo: 1, quiebre: 1, pedidoSugerido: 1 },
  { id: 30, nombre: "Ramazzotti", categoria: "Licores", unidPorCaja: 1, stockUnid: 5, minimo: 2, quiebre: 2, pedidoSugerido: 5 },
  { id: 31, nombre: "Aperol", categoria: "Licores", unidPorCaja: 1, stockUnid: 5, minimo: 2, quiebre: 2, pedidoSugerido: 3 },
  { id: 32, nombre: "Carmen 1/2 RXN Sauvignon Blanc", categoria: "Vino Blanco", unidPorCaja: 12, stockUnid: 12, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 33, nombre: "Emiliana 1/2 Sauvignon Blanc", categoria: "Vino Blanco", unidPorCaja: 12, stockUnid: 14, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 34, nombre: "Undurraga 1/2 Blanc", categoria: "Vino Blanco", unidPorCaja: 12, stockUnid: 11, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 35, nombre: "Santa Emiliana Chardonnay", categoria: "Vino Blanco", unidPorCaja: 12, stockUnid: 18, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 36, nombre: "Emiliana 3/4 Sauvignon Blanc", categoria: "Vino Blanco", unidPorCaja: 12, stockUnid: 9, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 37, nombre: "Botellín Carmen RXN 187,5cc", categoria: "Botellín", unidPorCaja: 24, stockUnid: 44, minimo: 1, quiebre: 1, pedidoSugerido: 24 },
  { id: 38, nombre: "Don Luis 3/4", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 23, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 39, nombre: "Pinot 3/4", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 8, minimo: 0, quiebre: 0, pedidoSugerido: 12 },
  { id: 40, nombre: "3 Estrellas 3/4 Santa Carolina", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 5, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 41, nombre: "Casillero Diablo 3/4 Carmenere", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 10, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 42, nombre: "Sta Emiliana Merlot 3/4", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 13, minimo: 0, quiebre: 0, pedidoSugerido: 12 },
  { id: 43, nombre: "Casillero Diablo 3/4 Merlot", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 9, minimo: 0, quiebre: 0, pedidoSugerido: 12 },
  { id: 44, nombre: "Carmen 1/2 MGX", categoria: "Vino Tinto", unidPorCaja: 12, stockUnid: 17, minimo: 1, quiebre: 1, pedidoSugerido: 12 },
  { id: 45, nombre: "Botellín Carmen MGX 187,5cc", categoria: "Botellín", unidPorCaja: 24, stockUnid: 8, minimo: 8, quiebre: 8, pedidoSugerido: 48 },
  { id: 46, nombre: "Baron Brut", categoria: "Espumante", unidPorCaja: 12, stockUnid: 12, minimo: 1, quiebre: 1, pedidoSugerido: 24 },
];

const CATEGORIAS = ["Licores", "Pisco", "Vino Blanco", "Vino Tinto", "Botellín", "Espumante", "Otro"];

const SOLICITANTES = [
  "Alvaro Camino", "Mauricio Lagos", "Gonzalo Maluenda", "Juan Veliz", "Mario Caiguan",
  "Mariana Molina", "Harrison Sanchez", "Eladio Ruiz", "Ismael Blas", "Franly Blanco"
].sort((a, b) => a.localeCompare(b, 'es'));

// Colores de celda por solicitante en la planilla exportada (ARGB, alfa FF)
const SOLICITANTE_COLORS = {
  "Alvaro Camino": "FFE06666",
  "Gonzalo Maluenda": "FF4285F4",
  "Mauricio Lagos": "FFFFD966",
  "Juan Veliz": "FFF9CB9C",
  "Mario Caiguan": "FFFFD966",
  "Mariana Molina": "FFFFFF00",
  "Harrison Sanchez": "FFF4CCCC",
  "Eladio Ruiz": "FFFFF2CC",
  "Ismael Blas": "FF00FDFF",
  "Franly Blanco": "FFFF9300"
};

// ---------- Persistencia ----------
const STORAGE_KEY = 'mordiscon-unificado.v1';

function cargarEstado() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    const datos = JSON.parse(raw);
    datos.productos.forEach(p => {
      if (p.fechaQuiebre === undefined) p.fechaQuiebre = p.stockUnid <= p.quiebre ? new Date().toISOString() : null;
    });
    return datos;
  }
  const productos = DATOS_INICIAL.map(p => ({
    ...p,
    fechaQuiebre: p.stockUnid <= p.quiebre ? new Date().toISOString() : null
  }));
  return {
    productos,
    ajustes: [],
    pedidos: [],
    pedidoActual: []
  };
}

let estado = cargarEstado();

function guardar() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function siguienteIdProducto() {
  return estado.productos.length ? Math.max(...estado.productos.map(p => p.id)) + 1 : 1;
}

// yyyy-mm-dd en hora LOCAL (evita el corrimiento de día que da toISOString en UTC)
function toISODateLocal(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function hoy() {
  return toISODateLocal(new Date());
}

function formatFecha(iso) {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function formatFechaLarga(iso) {
  if (!iso) return '—';
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------- Utilidades de stock ----------
function totalUnidades(cajas, unidades, unidPorCaja) {
  return (Number(cajas) || 0) * unidPorCaja + (Number(unidades) || 0);
}

function desglosar(stockUnid, unidPorCaja) {
  if (unidPorCaja <= 1) return { cajas: 0, unidades: stockUnid };
  const cajas = Math.floor(stockUnid / unidPorCaja);
  const unidades = stockUnid % unidPorCaja;
  return { cajas, unidades };
}

function fmtStockCorto(p) {
  const { cajas, unidades } = desglosar(p.stockUnid, p.unidPorCaja);
  if (p.unidPorCaja <= 1) return `${p.stockUnid} u.`;
  const partes = [];
  if (cajas > 0) partes.push(`${cajas} caja${cajas > 1 ? 's' : ''}`);
  if (unidades > 0 || partes.length === 0) partes.push(`${unidades} u.`);
  return `${p.stockUnid} u. (${partes.join(' + ')})`;
}

function estadoStock(p) {
  if (p.stockUnid === 0) return 'agotado';
  if (p.stockUnid <= p.quiebre) return 'critical';
  if (p.stockUnid <= p.minimo) return 'low';
  return 'ok';
}

function etiquetaEstado(clave) {
  return { ok: '✓ OK', low: '⚠️ Bajo mínimo', critical: '⚠️ Quiebre', agotado: '🚫 Agotado' }[clave];
}

function getProducto(id) {
  return estado.productos.find(p => p.id === id);
}

// Registra cuándo un producto entra o sale de quiebre de stock
function actualizarFechaQuiebre(producto) {
  if (producto.stockUnid <= producto.quiebre) {
    if (!producto.fechaQuiebre) producto.fechaQuiebre = new Date().toISOString();
  } else {
    producto.fechaQuiebre = null;
  }
}

// Corte semanal: jueves 00:00 de la semana del próximo viernes.
// Los quiebres detectados en o después de ese corte quedan para el pedido siguiente.
function obtenerProximoViernes() {
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  const dia = base.getDay(); // 0=domingo ... 5=viernes
  const delta = (5 - dia + 7) % 7;
  base.setDate(base.getDate() + delta);
  return base;
}

function obtenerCorteSemanal() {
  const viernes = obtenerProximoViernes();
  const corte = new Date(viernes);
  corte.setDate(viernes.getDate() - 1); // jueves 00:00
  return corte;
}

function obtenerProximoSabado() {
  const hoyDate = new Date();
  const delta = (6 - hoyDate.getDay() + 7) % 7 || 7;
  const sabado = new Date(hoyDate);
  sabado.setDate(hoyDate.getDate() + delta);
  return toISODateLocal(sabado);
}

// ---------- Toast ----------
function toast(msg, err = false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (err ? ' err' : '');
  void t.offsetWidth;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ---------- Tabs ----------
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ---------- Selects de categoría / producto ----------
function poblarCategorias() {
  const selects = [document.getElementById('prodCategoria')];
  selects.forEach(sel => {
    sel.innerHTML = CATEGORIAS.map(c => `<option value="${c}">${c}</option>`).join('');
  });
  const filtro = document.getElementById('filtroCategoria');
  filtro.innerHTML = '<option value="">Todas las categorías</option>' +
    CATEGORIAS.map(c => `<option value="${c}">${c}</option>`).join('');
}

function poblarSolicitantes() {
  document.getElementById('pedidoSolicitante').innerHTML =
    SOLICITANTES.map(s => `<option value="${esc(s)}">${esc(s)}</option>`).join('');
}

function poblarSelectsProducto() {
  const selects = [
    document.getElementById('ajusteProducto'),
    document.getElementById('pedidoProducto')
  ];
  selects.forEach(sel => {
    const actual = sel.value;
    sel.innerHTML = '';
    estado.productos.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.nombre;
      sel.appendChild(opt);
    });
    if (actual) sel.value = actual;
  });
}

// ---------- Render Inventario ----------
function renderStats() {
  const productos = estado.productos;
  const bajoMinimo = productos.filter(p => estadoStock(p) === 'low');
  const quiebre = productos.filter(p => estadoStock(p) === 'critical');
  const agotados = productos.filter(p => estadoStock(p) === 'agotado');
  const conPedido = productos.filter(p => p.stockUnid <= p.quiebre);

  document.getElementById('s-total').textContent = productos.length;
  document.getElementById('s-units').textContent = productos.reduce((s, p) => s + p.stockUnid, 0);
  document.getElementById('s-low').textContent = bajoMinimo.length;
  document.getElementById('s-quiebre').textContent = quiebre.length;
  document.getElementById('s-empty').textContent = agotados.length;
  document.getElementById('s-pedido').textContent = conPedido.length;
}

function renderInventario() {
  renderStats();

  const q = (document.getElementById('search').value || '').toLowerCase();
  const cat = document.getElementById('filtroCategoria').value;
  const items = estado.productos.filter(p =>
    (!q || p.nombre.toLowerCase().includes(q)) &&
    (!cat || p.categoria === cat)
  );

  const tbody = document.getElementById('tablaInventario');
  const vacio = document.getElementById('inv-empty');
  tbody.innerHTML = '';

  if (!items.length) {
    vacio.style.display = 'block';
  } else {
    vacio.style.display = 'none';
    items.forEach(p => {
      const clave = estadoStock(p);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${esc(p.nombre)}</strong></td>
        <td><span class="cat-tag">${esc(p.categoria)}</span></td>
        <td>${fmtStockCorto(p)}</td>
        <td>${p.minimo}</td>
        <td>${p.quiebre}</td>
        <td><span class="badge b-${clave}">${etiquetaEstado(clave)}</span></td>
        <td class="acciones-cell" style="white-space:nowrap">
          <button class="icon-action" data-tip="Ajuste" data-ajustar="${p.id}">⚖️</button>
          <button class="icon-action" data-tip="Editar" data-editar="${p.id}">✏️</button>
          <button class="icon-action danger" data-tip="Eliminar" data-eliminar="${p.id}">🗑️</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  tbody.querySelectorAll('[data-editar]').forEach(btn => {
    btn.addEventListener('click', () => abrirModalProducto(Number(btn.dataset.editar)));
  });
  tbody.querySelectorAll('[data-ajustar]').forEach(btn => {
    btn.addEventListener('click', () => abrirModalAjuste(Number(btn.dataset.ajustar)));
  });
  tbody.querySelectorAll('[data-eliminar]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = getProducto(Number(btn.dataset.eliminar));
      if (confirm(`¿Eliminar "${p.nombre}" del inventario?`)) {
        estado.productos = estado.productos.filter(x => x.id !== p.id);
        guardar();
        renderTodo();
        toast('Producto eliminado');
      }
    });
  });
}

document.getElementById('search').addEventListener('input', renderInventario);
document.getElementById('filtroCategoria').addEventListener('change', renderInventario);

// ---------- Modal producto ----------
const modalProducto = document.getElementById('modalProducto');
document.getElementById('btnNuevoProducto').addEventListener('click', () => abrirModalProducto());
document.getElementById('btnCancelarProducto').addEventListener('click', () => cerrarModalProducto());
document.getElementById('prodNombre').addEventListener('input', e => {
  const pos = e.target.selectionStart;
  e.target.value = e.target.value.toUpperCase();
  e.target.setSelectionRange(pos, pos);
});

function abrirModalProducto(id) {
  const form = document.getElementById('formProducto');
  form.reset();
  if (id) {
    const p = getProducto(id);
    document.getElementById('modalProductoTitulo').textContent = 'Editar producto';
    document.getElementById('prodId').value = p.id;
    document.getElementById('prodNombre').value = p.nombre;
    document.getElementById('prodCategoria').value = p.categoria;
    document.getElementById('prodUnidPorCaja').value = p.unidPorCaja;
    const { cajas, unidades } = desglosar(p.stockUnid, p.unidPorCaja);
    document.getElementById('prodStockCajas').value = cajas;
    document.getElementById('prodStockUnid').value = unidades;
    document.getElementById('prodMinimo').value = p.minimo;
    document.getElementById('prodQuiebre').value = p.quiebre;
    document.getElementById('prodPedidoSugerido').value = p.pedidoSugerido;
  } else {
    document.getElementById('modalProductoTitulo').textContent = 'Nuevo producto';
    document.getElementById('prodId').value = '';
    document.getElementById('prodUnidPorCaja').value = 1;
    document.getElementById('prodPedidoSugerido').value = 1;
  }
  modalProducto.classList.add('open');
}

function cerrarModalProducto() {
  modalProducto.classList.remove('open');
}

document.getElementById('formProducto').addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('prodNombre').value.trim().toUpperCase();
  if (!nombre) { toast('El nombre es obligatorio', true); return; }

  const id = document.getElementById('prodId').value;
  const unidPorCaja = Number(document.getElementById('prodUnidPorCaja').value) || 1;
  const stockCajas = Number(document.getElementById('prodStockCajas').value) || 0;
  const stockUnidSueltas = Number(document.getElementById('prodStockUnid').value) || 0;

  const datos = {
    nombre,
    categoria: document.getElementById('prodCategoria').value,
    unidPorCaja,
    stockUnid: totalUnidades(stockCajas, stockUnidSueltas, unidPorCaja),
    minimo: Number(document.getElementById('prodMinimo').value) || 0,
    quiebre: Number(document.getElementById('prodQuiebre').value) || 0,
    pedidoSugerido: Number(document.getElementById('prodPedidoSugerido').value) || 1
  };

  let producto;
  if (id) {
    producto = Object.assign(getProducto(Number(id)), datos);
  } else {
    producto = { id: siguienteIdProducto(), fechaQuiebre: null, ...datos };
    estado.productos.push(producto);
  }
  actualizarFechaQuiebre(producto);

  guardar();
  cerrarModalProducto();
  renderTodo();
  toast(id ? 'Producto actualizado ✓' : 'Producto agregado ✓');
});

// ---------- Ajuste de stock (entrada manual / salida de bodega / conteo) ----------
const modalAjuste = document.getElementById('modalAjuste');

document.getElementById('btnCancelarAjuste').addEventListener('click', () => {
  modalAjuste.classList.remove('open');
});

function abrirModalAjuste(productId) {
  document.getElementById('formAjuste').reset();
  document.getElementById('ajusteFecha').value = hoy();
  if (productId) document.getElementById('ajusteProducto').value = productId;
  modalAjuste.classList.add('open');
}

document.getElementById('formAjuste').addEventListener('submit', e => {
  e.preventDefault();
  const productId = Number(document.getElementById('ajusteProducto').value);
  const producto = getProducto(productId);
  if (!producto) return;

  const tipo = document.getElementById('ajusteTipo').value;
  const cajas = Number(document.getElementById('ajusteCajas').value) || 0;
  const unidades = Number(document.getElementById('ajusteUnidades').value) || 0;
  const fecha = document.getElementById('ajusteFecha').value;
  const nota = document.getElementById('ajusteNota').value.trim();
  const cantidad = totalUnidades(cajas, unidades, producto.unidPorCaja);

  if (tipo === 'salida') {
    if (cantidad > producto.stockUnid) {
      toast(`No hay stock suficiente. Stock actual: ${producto.stockUnid} unidades.`, true);
      return;
    }
    producto.stockUnid -= cantidad;
  } else if (tipo === 'entrada') {
    producto.stockUnid += cantidad;
  } else if (tipo === 'conteo') {
    producto.stockUnid = Math.max(0, cantidad);
  }
  actualizarFechaQuiebre(producto);

  estado.ajustes.unshift({ id: uid(), tipo, fecha, productId, cajas, unidades, nota });

  guardar();
  modalAjuste.classList.remove('open');
  renderTodo();
  toast(`Stock actualizado: ${producto.stockUnid} unidades ✓`);
});

function renderAjustes() {
  const tbody = document.getElementById('tablaAjustes');
  tbody.innerHTML = '';
  const etiquetas = { entrada: 'Ingreso manual', salida: 'Salida de bodega', conteo: 'Ajuste de conteo' };
  estado.ajustes.slice(0, 60).forEach(m => {
    const p = getProducto(m.productId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${formatFecha(m.fecha)}</td>
      <td>${p ? esc(p.nombre) : '—'}</td>
      <td>${etiquetas[m.tipo] || m.tipo}</td>
      <td>${m.cajas}</td>
      <td>${m.unidades}</td>
      <td>${esc(m.nota) || ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ---------- Exportar CSV inventario ----------
document.getElementById('btnExportarCSV').addEventListener('click', () => {
  const rows = [['Nombre', 'Categoría', 'Stock (u)', 'Mínimo (u)', 'Quiebre (u)', 'Pedido sugerido (u)', 'Unid/Caja', 'Cajas en stock', 'Unidades sueltas']];
  estado.productos.forEach(p => {
    const { cajas, unidades } = desglosar(p.stockUnid, p.unidPorCaja);
    rows.push([p.nombre, p.categoria, p.stockUnid, p.minimo, p.quiebre, p.pedidoSugerido, p.unidPorCaja, cajas, unidades]);
  });
  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = `inventario-el-mordiscon-${hoy()}.csv`;
  a.click();
  toast('CSV exportado ✓');
});

// ---------- Importar CSV inventario ----------
// Acepta tanto el CSV exportado por este sistema como el del sitio de producción
// (columnas: Nombre, Categoría, Stock (u), [Mínimo (u)], Quiebre (u), Pedido (u), Unid/Caja, ...)
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function importarCSV(text) {
  const rows = parseCSV(text);
  if (rows.length < 2) { toast('El CSV está vacío o no tiene datos.', true); return; }

  const header = rows[0].map(h => h.trim().toLowerCase());
  const iNombre = header.findIndex(h => h === 'nombre');
  const iCategoria = header.findIndex(h => h.startsWith('categor'));
  const iStock = header.findIndex(h => h.startsWith('stock'));
  const iMinimo = header.findIndex(h => h.startsWith('mínimo') || h.startsWith('minimo'));
  const iQuiebre = header.findIndex(h => h.startsWith('quiebre'));
  const iPedido = header.findIndex(h => h.startsWith('pedido'));
  const iUcaja = header.findIndex(h => h.replace(/\s/g, '').includes('unid/caja') || h.includes('unidades por caja'));

  if (iNombre === -1 || iStock === -1) {
    toast('El CSV no tiene el formato esperado (falta columna Nombre o Stock).', true);
    return;
  }

  let actualizados = 0, creados = 0;
  for (let r = 1; r < rows.length; r++) {
    const cols = rows[r];
    if (!cols || !cols[iNombre] || !cols[iNombre].trim()) continue;

    const nombre = cols[iNombre].trim();
    const categoria = iCategoria !== -1 ? (cols[iCategoria] || '').trim() : '';
    const stockUnid = Number(cols[iStock]) || 0;
    const quiebre = iQuiebre !== -1 ? (Number(cols[iQuiebre]) || 0) : 0;
    const minimo = iMinimo !== -1 ? (Number(cols[iMinimo]) || 0) : quiebre;
    const pedidoSugerido = iPedido !== -1 ? (Number(cols[iPedido]) || 1) : 1;
    const unidPorCaja = iUcaja !== -1 ? (Number(cols[iUcaja]) || 1) : 1;

    let producto = estado.productos.find(p => p.nombre.trim().toLowerCase() === nombre.toLowerCase());
    if (producto) {
      producto.stockUnid = stockUnid;
      producto.quiebre = quiebre;
      producto.minimo = minimo;
      producto.pedidoSugerido = pedidoSugerido;
      producto.unidPorCaja = unidPorCaja;
      if (categoria) producto.categoria = categoria;
      actualizarFechaQuiebre(producto);
      actualizados++;
    } else {
      producto = {
        id: siguienteIdProducto(),
        nombre,
        categoria: categoria || 'Otro',
        unidPorCaja,
        stockUnid,
        minimo,
        quiebre,
        pedidoSugerido,
        fechaQuiebre: null
      };
      actualizarFechaQuiebre(producto);
      estado.productos.push(producto);
      creados++;
    }
  }

  guardar();
  renderTodo();
  toast(`Importación completa: ${actualizados} actualizados, ${creados} nuevos ✓`);
}

document.getElementById('btnImportarCSV').addEventListener('click', () => {
  document.getElementById('inputImportarCSV').click();
});

document.getElementById('inputImportarCSV').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    if (confirm('Esto actualizará el stock de los productos que coincidan por nombre con los datos del CSV (y agregará los que no existan). ¿Continuar?')) {
      importarCSV(reader.result);
    }
  };
  reader.readAsText(file, 'UTF-8');
  e.target.value = '';
});

// ---------- Sugerencias automáticas (basadas en quiebre de stock, con corte semanal) ----------
function calcularSugerencias() {
  const corte = obtenerCorteSemanal();
  return estado.productos
    .filter(p => p.stockUnid <= p.quiebre && p.fechaQuiebre && new Date(p.fechaQuiebre) < corte)
    .map(p => {
      const { cajas, unidades } = desglosar(p.pedidoSugerido, p.unidPorCaja);
      const cajasRedondeadas = cajas + (unidades > 0 ? 1 : 0);
      return { producto: p, cajas: p.unidPorCaja > 1 ? cajasRedondeadas : 0, unidades: p.unidPorCaja > 1 ? 0 : p.pedidoSugerido };
    });
}

function calcularDiferidos() {
  const corte = obtenerCorteSemanal();
  return estado.productos.filter(
    p => p.stockUnid <= p.quiebre && p.fechaQuiebre && new Date(p.fechaQuiebre) >= corte
  );
}

function renderSugerencias() {
  const box = document.getElementById('sugerenciasBox');
  const tbody = document.getElementById('tablaSugerencias');
  const sugerencias = calcularSugerencias();
  tbody.innerHTML = '';

  box.classList.toggle('empty', sugerencias.length === 0);

  const corte = obtenerCorteSemanal();
  const viernes = obtenerProximoViernes();
  document.getElementById('corteInfo').textContent =
    `Pedido del viernes ${formatFecha(toISODateLocal(viernes))}. Corte: quiebres detectados antes del jueves ${formatFecha(toISODateLocal(corte))} 00:00hs.`;

  sugerencias.forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${esc(s.producto.nombre)}</td>
      <td>${s.producto.stockUnid}</td>
      <td>${s.producto.quiebre}</td>
      <td>${s.cajas > 0 ? s.cajas + ' caja(s)' : s.unidades + ' u.'}</td>
      <td><button class="btn btn-sm" data-agregar-sugerido="${s.producto.id}">+ Agregar</button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('[data-agregar-sugerido]').forEach(btn => {
    btn.addEventListener('click', () => {
      agregarSugeridoAlPedido(Number(btn.dataset.agregarSugerido));
      guardar();
      renderTodo();
    });
  });

  renderDiferidos();
}

function renderDiferidos() {
  const box = document.getElementById('diferidosBox');
  const tbody = document.getElementById('tablaDiferidos');
  const diferidos = calcularDiferidos();
  tbody.innerHTML = '';

  box.classList.toggle('empty', diferidos.length === 0);

  diferidos.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${esc(p.nombre)}</td>
      <td>${p.stockUnid}</td>
      <td>${formatFecha(toISODateLocal(new Date(p.fechaQuiebre)))}</td>
    `;
    tbody.appendChild(tr);
  });
}

function agregarSugeridoAlPedido(productId) {
  const sugerencia = calcularSugerencias().find(s => s.producto.id === productId);
  if (!sugerencia) return;
  const solicitante = 'El Mordiscón';
  const existente = estado.pedidoActual.find(l => l.productId === productId && l.solicitante === solicitante);
  if (existente) {
    existente.cajas += sugerencia.cajas;
    existente.unidades += sugerencia.unidades;
  } else {
    estado.pedidoActual.push({ productId, cajas: sugerencia.cajas, unidades: sugerencia.unidades, solicitante });
  }
}

document.getElementById('btnAgregarSugeridos').addEventListener('click', () => {
  const sugerencias = calcularSugerencias();
  if (sugerencias.length === 0) {
    toast('No hay productos en quiebre de stock por el momento.', true);
    return;
  }
  sugerencias.forEach(s => agregarSugeridoAlPedido(s.producto.id));
  guardar();
  renderTodo();
});

// ---------- Solicitud de pedido (manual) ----------
document.getElementById('formLineaPedido').addEventListener('submit', e => {
  e.preventDefault();
  const productId = Number(document.getElementById('pedidoProducto').value);
  if (!productId) return;
  const solicitante = document.getElementById('pedidoSolicitante').value;
  if (!solicitante) return;
  const cajas = Number(document.getElementById('pedidoCajas').value) || 0;
  const unidades = Number(document.getElementById('pedidoUnidades').value) || 0;
  if (cajas === 0 && unidades === 0) return;

  const existente = estado.pedidoActual.find(l => l.productId === productId && l.solicitante === solicitante);
  if (existente) {
    existente.cajas += cajas;
    existente.unidades += unidades;
  } else {
    estado.pedidoActual.push({ productId, cajas, unidades, solicitante });
  }

  guardar();
  e.target.reset();
  renderTodo();
});

function renderPedidoActual() {
  const tbody = document.getElementById('tablaLineasPedido');
  tbody.innerHTML = '';
  estado.pedidoActual.forEach((linea, idx) => {
    const p = getProducto(linea.productId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p ? esc(p.nombre) : '—'}</td>
      <td>${linea.unidades}</td>
      <td>${linea.cajas}</td>
      <td>${esc(linea.solicitante) || '—'}</td>
      <td class="no-print"><button class="icon-btn" data-quitar="${idx}">🗑️</button></td>
    `;
    tbody.appendChild(tr);
  });
  document.getElementById('pedidoFechaImpresion').textContent = 'Fecha: ' + formatFecha(hoy());

  tbody.querySelectorAll('[data-quitar]').forEach(btn => {
    btn.addEventListener('click', () => {
      estado.pedidoActual.splice(Number(btn.dataset.quitar), 1);
      guardar();
      renderTodo();
    });
  });
}

document.getElementById('btnLimpiarPedido').addEventListener('click', () => {
  if (estado.pedidoActual.length === 0) return;
  if (confirm('¿Vaciar la solicitud de pedido actual?')) {
    estado.pedidoActual = [];
    guardar();
    renderTodo();
  }
});

function fechaCortaPunteada() {
  const [y, m, d] = hoy().split('-');
  return `${d}.${m}.${y.slice(2)}`;
}

const AMARILLO = 'FFFFFF00';
const BORDE_FINO = { style: 'thin', color: { argb: 'FF999999' } };

document.getElementById('btnExportarExcel').addEventListener('click', async () => {
  if (estado.pedidoActual.length === 0) {
    toast('Agrega al menos un producto a la solicitud de pedido.', true);
    return;
  }

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Pedido');
  ws.columns = [{ width: 33 }, { width: 10 }, { width: 10 }, { width: 18 }];

  // Fila 1: título "Pedido dd.mm.yy"
  ws.mergeCells('A1:D1');
  const titulo = ws.getCell('A1');
  titulo.value = `PEDIDO ${fechaCortaPunteada()}`;
  titulo.font = { name: 'Arial', size: 11, bold: true };
  titulo.alignment = { horizontal: 'center', vertical: 'middle' };
  titulo.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: AMARILLO } };
  ws.getRow(1).eachCell(c => { c.border = { top: BORDE_FINO, bottom: BORDE_FINO, left: BORDE_FINO, right: BORDE_FINO }; });

  // Fila 2: encabezados
  const encabezados = ['PRODUCTO', 'UNIDAD', 'CAJAS', 'SOLICITANTE'];
  const filaHead = ws.getRow(2);
  encabezados.forEach((texto, i) => {
    const cell = filaHead.getCell(i + 1);
    cell.value = texto;
    cell.font = { name: 'Arial', size: 11, bold: true };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: AMARILLO } };
    cell.border = { top: BORDE_FINO, bottom: BORDE_FINO, left: BORDE_FINO, right: BORDE_FINO };
  });

  // Filas de datos
  estado.pedidoActual.forEach(l => {
    const p = getProducto(l.productId);
    const row = ws.addRow([
      p ? p.nombre.toUpperCase() : '—',
      l.unidades > 0 ? `${l.unidades} U` : '',
      l.cajas > 0 ? `${l.cajas} CAJAS` : '',
      (l.solicitante || '—').toUpperCase()
    ]);

    row.getCell(1).font = { name: 'Arial', size: 11 };
    row.getCell(1).alignment = { horizontal: 'left', vertical: 'middle' };

    row.getCell(2).font = { name: 'Arial', size: 12, bold: true };
    row.getCell(2).alignment = { horizontal: 'center', vertical: 'middle' };

    row.getCell(3).font = { name: 'Arial', size: 12, bold: true };
    row.getCell(3).alignment = { horizontal: 'center', vertical: 'middle' };

    row.getCell(4).font = { name: 'Arial', size: 10 };
    row.getCell(4).alignment = { horizontal: 'center', vertical: 'middle' };

    const color = SOLICITANTE_COLORS[l.solicitante];
    for (let col = 1; col <= 4; col++) {
      const cell = row.getCell(col);
      cell.border = { top: BORDE_FINO, bottom: BORDE_FINO, left: BORDE_FINO, right: BORDE_FINO };
      if (color) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: color } };
      }
    }
  });

  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/octet-stream' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `Pedido ${fechaCortaPunteada()}.xlsx`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Excel del pedido descargado ✓');
});

document.getElementById('btnImprimirPedido').addEventListener('click', () => {
  if (estado.pedidoActual.length === 0) {
    toast('Agrega al menos un producto a la solicitud de pedido.', true);
    return;
  }
  window.print();
});

document.getElementById('btnEnviarPedido').addEventListener('click', () => {
  if (estado.pedidoActual.length === 0) {
    toast('Agrega al menos un producto a la solicitud de pedido.', true);
    return;
  }
  estado.pedidos.unshift({
    id: uid(),
    fecha: hoy(),
    items: estado.pedidoActual.map(l => ({ ...l })),
    estado: 'pendiente',
    fechaIngreso: null
  });
  estado.pedidoActual = [];
  guardar();
  renderTodo();
  toast('Solicitud enviada a Control de Pedidos ✓');
});

// ---------- Control de pedidos / Recepciones ----------
const modalRecibir = document.getElementById('modalRecibir');
let pedidoARecibir = null;

function renderControlPedidos() {
  const tbody = document.getElementById('tablaControlPedidos');
  tbody.innerHTML = '';
  estado.pedidos.forEach(pedido => {
    const productosTxt = pedido.items.map(l => {
      const p = getProducto(l.productId);
      return `${p ? esc(p.nombre) : '—'} (${l.cajas} caja/${l.unidades} unid.)`;
    }).join(', ');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${formatFecha(pedido.fecha)}</td>
      <td>${productosTxt}</td>
      <td>${pedido.estado === 'recibido' ? '✅ Recibido' : '⏳ Pendiente'}</td>
      <td>${formatFecha(pedido.fechaIngreso)}</td>
      <td>${pedido.estado === 'pendiente' ? `<button class="btn btn-sm btn-green" data-recibir="${pedido.id}">Registrar recepción</button>` : ''}</td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('[data-recibir]').forEach(btn => {
    btn.addEventListener('click', () => abrirModalRecibir(btn.dataset.recibir));
  });

  document.getElementById('btnBorrarHistoricoPedidos').disabled = estado.pedidos.length === 0;
}

document.getElementById('btnBorrarHistoricoPedidos').addEventListener('click', () => {
  if (estado.pedidos.length === 0) return;
  const confirmacion = confirm(
    `Esto borrará el histórico completo de Control de Pedidos y Recepciones (${estado.pedidos.length} solicitud(es)). ` +
    `Úsalo solo si hay una inconsistencia y necesitas volver a cargar el pedido. Esta acción no se puede deshacer. ¿Continuar?`
  );
  if (!confirmacion) return;
  estado.pedidos = [];
  guardar();
  renderTodo();
  toast('Histórico de Control de Pedidos borrado ✓');
});

function abrirModalRecibir(pedidoId) {
  pedidoARecibir = estado.pedidos.find(p => p.id === pedidoId);
  if (!pedidoARecibir) return;

  const lista = document.getElementById('recibirLista');
  lista.innerHTML = pedidoARecibir.items.map(l => {
    const p = getProducto(l.productId);
    return `<div style="padding:.3rem 0;border-bottom:1px solid #c8e6c9">• <strong>${esc(p ? p.nombre : '—')}</strong>: ${l.cajas} caja(s) + ${l.unidades} u.</div>`;
  }).join('');

  document.getElementById('recibirFecha').value = obtenerProximoSabado();
  modalRecibir.classList.add('open');
}

document.getElementById('btnCancelarRecibir').addEventListener('click', () => {
  modalRecibir.classList.remove('open');
});

document.getElementById('btnConfirmarRecibir').addEventListener('click', () => {
  const fecha = document.getElementById('recibirFecha').value;
  if (!fecha) { toast('Ingresa la fecha de recepción', true); return; }
  if (!pedidoARecibir) return;

  pedidoARecibir.estado = 'recibido';
  pedidoARecibir.fechaIngreso = fecha;
  pedidoARecibir.items.forEach(l => {
    const p = getProducto(l.productId);
    if (p) {
      p.stockUnid += totalUnidades(l.cajas, l.unidades, p.unidPorCaja);
      actualizarFechaQuiebre(p);
    }
  });

  guardar();
  modalRecibir.classList.remove('open');
  pedidoARecibir = null;
  renderTodo();
  toast('✅ Recepción registrada — stock actualizado');
});

function renderHistorialRecepciones() {
  const recibidos = estado.pedidos.filter(p => p.estado === 'recibido');
  const el = document.getElementById('historialRecepciones');
  if (!recibidos.length) {
    el.innerHTML = '<div style="text-align:center;padding:2rem;color:#9a7a5a;">Sin recepciones registradas aún.</div>';
    return;
  }
  el.innerHTML = recibidos.map(pedido => {
    const tags = pedido.items.map(l => {
      const p = getProducto(l.productId);
      return `<span class="hist-tag">${esc(p ? p.nombre : '—')} <strong>(${l.cajas}cj+${l.unidades}u)</strong></span>`;
    }).join('');
    return `<div class="hist-item"><div class="hist-date">📅 ${formatFechaLarga(pedido.fechaIngreso)}</div><div class="hist-productos">${tags}</div></div>`;
  }).join('');
}

// ---------- Render general ----------
function renderTodo() {
  poblarSelectsProducto();
  renderInventario();
  renderAjustes();
  renderSugerencias();
  renderPedidoActual();
  renderControlPedidos();
  renderHistorialRecepciones();
}

poblarCategorias();
poblarSolicitantes();
renderTodo();
