import {ENV} from '../utils';
import Axios from "axios";

export class Producto{
    baseApi=ENV.BASE_API;

    async createProducto(datos){
        try {

            const formData=new FormData();

            Object.keys(datos).forEach((key)=>{
                formData.append(key,datos[key])
            });

            const urlDir=`${this.baseApi}/${ENV.API_ROUTES.CREARPRODUCTO}`;

            Axios({
                method:"POST",
                url:urlDir,
                data:formData,
                config:{headers:{'Content-Type':'multipart/form-data'}}
            })
            .then(function(response){
                console.log(response)
                console.log("Datos guardados correctamente");
                
            })
            .catch(function(response){
                console.log(response);
                console.log("No se registro la informacion");
                
            })
        } catch (error) {
            throw error
        }
    }
}