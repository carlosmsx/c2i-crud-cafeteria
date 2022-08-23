export const cantidadCaracteres = (input, min, max)=>{
    return (input.length >= min && input.length <= max) ?  true: false;
}

export const validarPrecio = (input)=>{
    const patron = /^[\d]{1,4}$/;
    return patron.test(input);
}

export const validarUrl = (input)=>{
    const patron = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    return patron.test(input);
}

export const validarCategoria = (input) =>{
    const categorias = ['bebida-fria','bebida-caliente','dulce','salado'];
    return categorias.includes(input);
}