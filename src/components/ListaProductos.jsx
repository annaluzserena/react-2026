import ProductoItem from "./ProductoItem";

function ListaProductos({ productos }) {
  return (
    <section className="lista-productos">
      <h2>Productos</h2>
      {productos.length === 0 ? (
        <p className="lista-productos_vacia">No hay productos.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <ProductoItem
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              disponible={producto.disponible}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListaProductos;
