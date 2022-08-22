import React from "react";
import {Button} from 'react-bootstrap';

const ItemProducto = ({producto}) => {
    const {nombreProducto, id, precio, imagen, categoria}={...producto};
    return (
        <tr>
            <td>{id}</td>
            <td>{nombreProducto}</td>
            <td>{precio}</td>
            <td>{imagen}</td>
            <td>{categoria}</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
