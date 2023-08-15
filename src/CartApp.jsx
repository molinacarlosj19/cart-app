import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";

export const CartApp = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <div className="row">
          {products.map((product) => (
            <div className="col-4 my-2" key={product.id}>
              <div className="card">
                <div className="cardbody">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-4 w-50">
          <h3>Carro de Compras</h3>
          <table className="table table-hover-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nombre</td>
                <td>precio</td>
                <td>cantidad</td>
                <td>total</td>
                <td>eliminar</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-end fw-bold">
                  Total
                </td>
                <td colSpan="2" className="text-start fw-bold">
                  12345
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
