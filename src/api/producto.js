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

    async buscarProductos(){
        const urlDir=`${this.baseApi}/${ENV.API_ROUTES.BUSCARPRODUCTOS}`;
        const getProducto= await Axios.get(urlDir);
        return getProducto.data;
    }

    async deleteProducto(id){
        try {
            const urlDir=`${this.baseApi}/${ENV.API_ROUTES.DELETEPRODUCTOS}/${id}`;
            const response= await Axios.delete(urlDir);
            if(response.status===200) return response;
        } catch (error) {
            throw error;
        }
    }

    async updateProducto(id,dataAlumno){
        try {
            const data=dataAlumno;
            const formData=new FormData();

            Object.keys(data).forEach((key)=>{
                formData.append(key,data[key]);
            });

            const urlDir=`${this.baseApi}/${ENV.API_ROUTES.UPDATEPRODUCTO}/${id}`;
            const response=await Axios.patch(urlDir,formData);

            if(response.status===200) return response;

        } catch (error) {
            throw error;
        }
    }
}