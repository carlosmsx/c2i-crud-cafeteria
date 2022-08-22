import React from "react";
import {Form,Button} from 'react-bootstrap';

const CrearProducto = () => {
    return (
        <section className="container">
            <h1 className="display-4 mt-5">Crear Producto</h1>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Te" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="100" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ej> https://..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select>
                        <option value="">Seleccione una opción</option>
                        <option value="">Opción uno</option>
                        <option value="">Opción dos</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    );
};

export default CrearProducto;
