import {useEffect, useState, useRef} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { cantidadCaracteres, validarCategoria, validarPrecio, validarUrl } from "./helpers";
import Swal from 'sweetalert2'

const EditarProducto = () => {
    //recuperar datos del producto
    const {id} = useParams();
    //variable de entorno
    const URL_API = process.env.REACT_APP_API_CAFETERIA;
    
    const [producto, setProducto]=useState({});
    //referencias
    const nombreRef = useRef("");
    const precioRef = useRef(0);
    const imagenRef = useRef("");

    const navegacion = useNavigate();

    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async()=>{
        try 
        {
            const respuesta = await fetch(URL_API+`/${id}`);
            const dato = await respuesta.json();
            setProducto(dato);
        }
        catch(error)
        {
            console.log(error);
        }
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        //aplicar las validaciones aquí
        if (cantidadCaracteres(nombreRef.current.value, 2, 50) && validarPrecio(precioRef.current.value) && validarUrl(imagenRef.current.value) /*categoria */) {
        }
        else
        {
            //mostrar mensaje de error
        }
        //creo el objeto
        const productoEditar = {
            nombreProducto: nombreRef.current.value,
            precio: precioRef.current.value,
            imagen: imagenRef.current.value,
            categoria: producto.categoria
        }
        console.log(productoEditar);
    //pedir a la api la actualizacion
        try
        {
            const respuesta = await fetch(URL_API+`/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productoEditar)
            });
            if (respuesta.status === 200)
            {
                Swal.fire(
                    'Producto modificado',
                    'El producto fue modificado correctamente',
                    'success'
                );
                //redirecciono a la tabla de productos
                navegacion('/administrar');
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return (
        <section className="container">
            <h1 className="display-4 mt-5">Editar Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Te" defaultValue={producto.nombreProducto} ref={nombreRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="100" defaultValue={producto.precio} ref={precioRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://..." defaultValue={producto.imagen} ref={imagenRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select value={producto.categoria} onChange={e=>setProducto({...producto,categoria: e.target.value})}>
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
        </section>
    );
};

export default EditarProducto;