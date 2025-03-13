import * as Yup from 'yup';

export function initialValues(){
return {
    nombre:"",
    descripcion:"",
    precio:""
}
}

export function validationSchema(){
    return Yup.object({
        nombre:Yup.string().required(),
        descripcion:Yup.string().required(),
        precio:Yup.number().required()
    })
}