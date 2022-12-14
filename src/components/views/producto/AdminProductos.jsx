import React,{useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import ItemProducto from './ItemProducto';
import {Link} from 'react-router-dom';

const AdminProductos = () => {
    const URL_API = process.env.REACT_APP_API_CAFETERIA;

    const [productos, setProductos] = useState([]);
 
    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async () =>{
        try{
            //GET
            const respuesta = await fetch(URL_API);
            const listaProductos = await respuesta.json();
            setProductos(listaProductos);
        }
        catch(error)
        {
            console.log(error);
            //mostrar mensaje: espere unos minutos y vuelva a intentarlo
        }
    }

    return (
        <section className="container">
            <div className="d-flex justify-content-between align-item-center mt-5">
                <h1 className="display-4">Administrador de productos</h1>
                <Link to='/administrar/crear' className="btn btn-primary">Agregar</Link>
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
                        productos.map((producto)=><ItemProducto key={producto._id} producto={producto} consultarAPI={consultarAPI} />)
                    }
                </tbody>
            </Table>
        </section>
    );
};

export default AdminProductos;
