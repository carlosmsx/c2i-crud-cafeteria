import React, {useState} from "react";
import {Form,Button,Alert} from 'react-bootstrap';
import { cantidadCaracteres, validarCategoria, validarPrecio, validarUrl } from "./helpers";
import Swal from "sweetalert2";

const CrearProducto = () => {

    const [nombreProducto, setNombreProducto] = useState('');
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState('');
    const [categoria,setCategoria] = useState('');
    const [mensajeError, setMensajeError] = useState(false);
    //variable de entorno
    const URL_API = process.env.REACT_APP_API_CAFETERIA;

    const handleSubmit=async(e)=>{
        e.preventDefault();
        //validar
        
        if (cantidadCaracteres(nombreProducto, 2, 20) && validarPrecio(precio) && validarUrl(imagen) && validarCategoria(categoria)) {
            setMensajeError(false);
        }
        else {
            setMensajeError(true);
            return;
        }
        //crear objeto
        const nuevoProducto = {
            nombreProducto,
            precio,
            imagen,
            categoria
        }
        //enviar peticion a la API (creat)
        try {
            const respuesta = await fetch(URL_API, {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(nuevoProducto)
            });
            if (respuesta.status === 201)
            {
                Swal.fire(
                    'Producto creado',
                    'El producto fue agregado correctamente',
                    'success'
                );
                //redirecciono a administracion
                //navegacion('/administrar');
            }
        } 
        catch(error) {
            console.log(error);
        }
    }

    return (
        <section className="container">
            <h1 className="display-4 mt-5">Crear Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Te" onChange={e=>setNombreProducto(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="100" onChange={e=>setPrecio(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://..." onChange={e=>setImagen(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select onChange={e=>setCategoria(e.target.value)}>
                        <option value="">Seleccione una opción</option>
                        <option value="bebida-caliente">Bebida caliente</option>
                        <option value="bebida-fria">Bebida fria</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
            {
                (mensajeError==true)?<Alert variant='danger'>Debe corregir los datos</Alert>:null
            }
        </section>
    );
};

export default CrearProducto;
