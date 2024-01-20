import React from 'react';
import { products } from '../constants';

const Products = () => {
    return (
        <div className="productsall row row-cols-1 row-cols-md-3 g-4" >
            {products.map((product) => (
                <div className="col item" key={product.nombre}>
                    <div className="card" style={{ width: "16rem" }}>
                        <img src={product.url} className="card-img-top" alt={product.nombre} style={{ maxHeight: "16rem" }} />
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">${product.precio} + envío</p>
                            <a href="#" className="btn btn-primary" onClick="addToCart(1, 'Producto 1', 10)">AÑADIR AL CARRITO</a>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Products