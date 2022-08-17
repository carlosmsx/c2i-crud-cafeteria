import React from "react";
import {Button} from 'react-bootstrap';

const ItemProducto = () => {
    return (
        <tr>
            <td>1</td>
            <td>Cafe</td>
            <td>$700</td>
            <td>
                https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4109850.jpg&fm=jpg
            </td>
            <td>Bebida caliente</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
