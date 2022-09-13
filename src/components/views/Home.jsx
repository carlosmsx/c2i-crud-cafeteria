import React, { useState, useEffect } from "react";
import CardProducto from "./producto/CardProducto";
import { Row, Col } from "react-bootstrap";

const Home = () => {
    const URL_API = process.env.REACT_APP_API_CAFETERIA;

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            //GET
            const respuesta = await fetch(URL_API);
            const listaProductos = await respuesta.json();
            setProductos(listaProductos);
            console.log(listaProductos);
        } catch (error) {
            console.log(error);
            //mostrar mensaje: espere unos minutos y vuelva a intentarlo
        }
    };

    return (
        <div className="container">
            <h1 className="display-4 m-4">Pagina principal</h1>
            <hr />
            <Row xs={1} md={4} className="g-4">
                {productos.map((producto) => (
                    <Col key={producto._id}>
                        <CardProducto producto={producto}></CardProducto>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
