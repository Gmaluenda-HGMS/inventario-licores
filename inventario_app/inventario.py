#!/usr/bin/env python3
"""Gestor de inventario de licores y vinos — El Mordiscón"""

import json
import os
from datetime import date

DB_FILE = os.path.join(os.path.dirname(__file__), "inventario.json")

CATEGORIAS = [
    "Whisky", "Ron", "Tequila", "Vodka", "Gin", "Mezcal",
    "Brandy / Cognac", "Vino tinto", "Vino blanco", "Vino rosado",
    "Cerveza", "Licor / Aperitivo", "Champagne / Espumoso", "Otro"
]


def cargar():
    if not os.path.exists(DB_FILE):
        return []
    with open(DB_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def guardar(inventario):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(inventario, f, ensure_ascii=False, indent=2)


def siguiente_id(inventario):
    return max((b["id"] for b in inventario), default=0) + 1


def limpiar():
    os.system("clear")


def encabezado():
    print("=" * 55)
    print("       🍷  EL MORDISCÓN — Inventario de Licores  🥃")
    print("=" * 55)


def listar(inventario, filtro_cat=None, solo_agotados=False):
    items = inventario
    if filtro_cat:
        items = [b for b in items if b["categoria"] == filtro_cat]
    if solo_agotados:
        items = [b for b in items if b["cantidad"] == 0]

    if not items:
        print("\n  (Sin resultados)\n")
        return

    print(f"\n  {'ID':>4}  {'Nombre':<28}  {'Categoría':<20}  {'Cant':>5}  {'Precio':>8}")
    print("  " + "-" * 72)
    for b in items:
        precio = f"${b['precio']:.2f}" if b.get("precio") else "—"
        alerta = " ⚠️" if b["cantidad"] <= b.get("minimo", 1) and b["cantidad"] > 0 else ""
        agotado = " 🚫" if b["cantidad"] == 0 else ""
        print(f"  {b['id']:>4}  {b['nombre']:<28}  {b['categoria']:<20}  {b['cantidad']:>5}  {precio:>8}{alerta}{agotado}")
    print()


def elegir_categoria():
    print("\n  Categorías:")
    for i, cat in enumerate(CATEGORIAS, 1):
        print(f"    {i:>2}. {cat}")
    while True:
        try:
            sel = int(input("  Elige una categoría (número): "))
            if 1 <= sel <= len(CATEGORIAS):
                return CATEGORIAS[sel - 1]
        except ValueError:
            pass
        print("  Opción inválida, intenta de nuevo.")


def agregar_botella(inventario):
    print("\n── Agregar botella ──────────────────────────────────")
    nombre = input("  Nombre del producto: ").strip()
    if not nombre:
        print("  Nombre vacío, operación cancelada.")
        return

    # Verificar duplicado
    existente = next((b for b in inventario if b["nombre"].lower() == nombre.lower()), None)
    if existente:
        print(f"\n  Ya existe '{existente['nombre']}' (ID {existente['id']}).")
        sumar = input("  ¿Sumar unidades al stock existente? (s/n): ").strip().lower()
        if sumar == "s":
            try:
                cant = int(input("  ¿Cuántas unidades agregar?: "))
                existente["cantidad"] += cant
                guardar(inventario)
                print(f"  ✅ Stock actualizado: {existente['cantidad']} unidades.")
            except ValueError:
                print("  Cantidad inválida.")
        return

    categoria = elegir_categoria()

    try:
        cantidad = int(input("  Cantidad en stock: "))
    except ValueError:
        cantidad = 0

    precio_str = input("  Precio por botella (dejar vacío si no aplica): $").strip()
    precio = float(precio_str) if precio_str else None

    minimo_str = input("  Stock mínimo para alerta (default 2): ").strip()
    minimo = int(minimo_str) if minimo_str.isdigit() else 2

    notas = input("  Notas (opcional): ").strip()

    botella = {
        "id": siguiente_id(inventario),
        "nombre": nombre,
        "categoria": categoria,
        "cantidad": cantidad,
        "precio": precio,
        "minimo": minimo,
        "notas": notas,
        "fecha_ingreso": str(date.today()),
    }
    inventario.append(botella)
    guardar(inventario)
    print(f"\n  ✅ '{nombre}' agregado con ID {botella['id']}.")


def actualizar_stock(inventario):
    print("\n── Actualizar stock ─────────────────────────────────")
    listar(inventario)
    try:
        id_sel = int(input("  ID del producto a actualizar: "))
    except ValueError:
        print("  ID inválido.")
        return

    botella = next((b for b in inventario if b["id"] == id_sel), None)
    if not botella:
        print("  Producto no encontrado.")
        return

    print(f"\n  {botella['nombre']}  —  Stock actual: {botella['cantidad']}")
    print("    1. Sumar unidades (entrada)")
    print("    2. Restar unidades (salida / consumo)")
    print("    3. Establecer cantidad exacta")
    op = input("  Opción: ").strip()

    try:
        cant = int(input("  Cantidad: "))
    except ValueError:
        print("  Cantidad inválida.")
        return

    if op == "1":
        botella["cantidad"] += cant
    elif op == "2":
        botella["cantidad"] = max(0, botella["cantidad"] - cant)
    elif op == "3":
        botella["cantidad"] = max(0, cant)
    else:
        print("  Opción inválida.")
        return

    guardar(inventario)
    print(f"  ✅ Stock actualizado: {botella['cantidad']} unidades.")


def eliminar_botella(inventario):
    print("\n── Eliminar producto ────────────────────────────────")
    listar(inventario)
    try:
        id_sel = int(input("  ID del producto a eliminar: "))
    except ValueError:
        print("  ID inválido.")
        return

    botella = next((b for b in inventario if b["id"] == id_sel), None)
    if not botella:
        print("  Producto no encontrado.")
        return

    conf = input(f"  ¿Eliminar '{botella['nombre']}'? (s/n): ").strip().lower()
    if conf == "s":
        inventario.remove(botella)
        guardar(inventario)
        print("  ✅ Producto eliminado.")


def ver_detalles(inventario):
    print("\n── Ver detalles ─────────────────────────────────────")
    try:
        id_sel = int(input("  ID del producto: "))
    except ValueError:
        print("  ID inválido.")
        return

    b = next((b for b in inventario if b["id"] == id_sel), None)
    if not b:
        print("  Producto no encontrado.")
        return

    print(f"""
  Nombre:        {b['nombre']}
  Categoría:     {b['categoria']}
  Stock:         {b['cantidad']} unidades
  Stock mínimo:  {b.get('minimo', '—')}
  Precio:        {'$' + str(b['precio']) if b.get('precio') else '—'}
  Fecha ingreso: {b.get('fecha_ingreso', '—')}
  Notas:         {b.get('notas', '—') or '—'}
""")


def resumen(inventario):
    if not inventario:
        print("\n  Sin productos registrados.\n")
        return

    total_items = len(inventario)
    total_unidades = sum(b["cantidad"] for b in inventario)
    agotados = [b for b in inventario if b["cantidad"] == 0]
    bajo_stock = [b for b in inventario if 0 < b["cantidad"] <= b.get("minimo", 1)]

    valor = sum(b["precio"] * b["cantidad"] for b in inventario if b.get("precio"))

    print(f"""
  ── Resumen del inventario ──────────────────────────
  Productos registrados:  {total_items}
  Total de unidades:      {total_unidades}
  Valor estimado:         ${valor:,.2f}
  Agotados:               {len(agotados)}
  Bajo stock (⚠️):        {len(bajo_stock)}
""")

    if agotados:
        print("  🚫 Agotados:")
        for b in agotados:
            print(f"     • {b['nombre']} ({b['categoria']})")
        print()

    if bajo_stock:
        print("  ⚠️  Bajo stock:")
        for b in bajo_stock:
            print(f"     • {b['nombre']} — {b['cantidad']} unidad(es)")
        print()


def buscar(inventario):
    print("\n── Buscar ───────────────────────────────────────────")
    termino = input("  Buscar por nombre: ").strip().lower()
    resultados = [b for b in inventario if termino in b["nombre"].lower()]
    listar(resultados)


def menu_filtrar(inventario):
    print("\n── Filtrar por categoría ────────────────────────────")
    cat = elegir_categoria()
    listar(inventario, filtro_cat=cat)
    input("  [Enter para continuar]")


def main():
    inventario = cargar()

    while True:
        limpiar()
        encabezado()
        resumen(inventario)

        print("  1. Ver inventario completo")
        print("  2. Agregar producto")
        print("  3. Actualizar stock")
        print("  4. Ver detalles de un producto")
        print("  5. Buscar producto")
        print("  6. Filtrar por categoría")
        print("  7. Eliminar producto")
        print("  0. Salir")
        print()

        op = input("  Elige una opción: ").strip()

        if op == "1":
            limpiar()
            encabezado()
            listar(inventario)
            input("  [Enter para continuar]")
        elif op == "2":
            agregar_botella(inventario)
            input("  [Enter para continuar]")
        elif op == "3":
            actualizar_stock(inventario)
            input("  [Enter para continuar]")
        elif op == "4":
            ver_detalles(inventario)
            input("  [Enter para continuar]")
        elif op == "5":
            buscar(inventario)
            input("  [Enter para continuar]")
        elif op == "6":
            menu_filtrar(inventario)
        elif op == "7":
            eliminar_botella(inventario)
            input("  [Enter para continuar]")
        elif op == "0":
            print("\n  ¡Hasta luego! 🍷\n")
            break
        else:
            input("  Opción inválida. [Enter para continuar]")


if __name__ == "__main__":
    main()
