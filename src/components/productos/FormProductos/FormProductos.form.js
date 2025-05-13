import * as Yup from 'yup';

export function initialValues(dato){
return {
    nombre:dato?.nombre || "",
    descripcion:dato?.descripcion || "",
    precio:dato?.precio || ""
}
}

export function validationSchema(){
    return Yup.object({
        nombre:Yup.string().required(),
        descripcion:Yup.string().required(),
        precio:Yup.number().required()
    })
}