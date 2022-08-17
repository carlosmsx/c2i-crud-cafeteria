import React from "react";
import {Table,Button} from "react-bootstrap";
import ItemProducto from './ItemProducto';

const AdminProductos = () => {
    return (
        <section className="container">
            <div className="d-flex justify-content-between align-item-center mt-5">
                <h1 className="display-4">Administrador de productos</h1>
                <Button variant="primary">Agregar</Button>
            </div>
            <hr />
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {

                    }
                    <ItemProducto/>
                </tbody>
            </Table>
        </section>
    );
};

export default AdminProductos;