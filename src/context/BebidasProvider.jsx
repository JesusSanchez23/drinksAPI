import { createContext, useState, useEffect } from "react";
import axios from "axios";


const BebidasContext = createContext();


const BebidasProvider = ({children})=>{

    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [cargando, setCargando] = useState(false);


    const consultarAPI = async(datos)=>{
 const {nombre, categoria} = datos;


        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
            const {data} = await axios(url);
            setBebidas(data.drinks);
        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = ()=>{
        setModal(!modal);
    }

    const consultaDetallesAPI = async(data)=>{
        setCargando(true);
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${data.idDrink}`;
            const respuesta = await axios(url);
            setDataModal({
                ...respuesta.data.drinks[0]
            })
            
        } catch (error) {
            console.log(error);
        }finally{
            setCargando(false);
        }
            
        
    }

    return (
        <BebidasContext.Provider value={{
           consultarAPI,
           bebidas,
           modal,
           handleModalClick,
           consultaDetallesAPI,
           dataModal,
           setDataModal,
           cargando
           
        }}>
            {children}
        </BebidasContext.Provider>
    )
}


export {
    BebidasProvider
}


export default BebidasContext;