import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, consultarAPI }) => {
    const { nombreProducto, id, precio, imagen, categoria } = { ...producto };
    const URL_API = process.env.REACT_APP_API_CAFETERIA;

    const handleDelete = () => {
        Swal.fire({
            title: "Está seguro?",
            text: "no podrá deshacer esta operación!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    //realizar peticion DELETE
                    const respuesta = await fetch(URL_API+'/'+id,{
                        method: "DELETE"
                    });

                    if (respuesta.status ===200)
                    {
                        Swal.fire("Producto eliminado!", "El producto fue correctamente eliminado.", "success");

                    }
                    //recargar tabla de productos
                    consultarAPI();
                } catch (error) {
                    console.log(error);
                    //mostrar alert
                }
            }
        });
    };
    return (
        <tr>
            <td>{id}</td>
            <td>{nombreProducto}</td>
            <td>{precio}</td>
            <td>{imagen}</td>
            <td>{categoria}</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger" onClick={handleDelete}>
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
