function ProductoItem({ nombre, precio, disponible }) {
  return (
    <li className="producto-item">
      <span className="producto-item_nombre">Nombre: {nombre}</span>
      <span className="producto-item_precio">Precio: ${precio.toLocaleString('es-AR')}</span>
      <span
        className={`producto-item_disponible${!disponible ? " agotado" : ""}`}
      >
        {disponible ? "" : "❗Agotado"}
      </span>
    </li>
  );
}

export default ProductoItem;
