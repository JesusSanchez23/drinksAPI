import { createContext, useState, useEffect } from "react";
import axios from "axios";


const CategoriasContext = createContext();


const CategoriasProvider = ({children})=>{

    const [categorias, setCategorias] = useState([]);
    const [datos,setDatos] = useState({
        nombre: '',
        categoria: ''
    });

    const registrarDatos = (e)=>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }


    useEffect(()=>{

        const consultarAPI = async ()=>{
           try {
               const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
               const {data} = await axios(url);
               setCategorias(data.drinks);
           } catch (error) {
               console.log(error);
           }
        }
        consultarAPI();
    },[])
    return (
        <CategoriasContext.Provider value={{
            categorias,
            registrarDatos,
            datos
        }}>
            {children}
        </CategoriasContext.Provider>
    )
}


export {
    CategoriasProvider
}


export default CategoriasContext;