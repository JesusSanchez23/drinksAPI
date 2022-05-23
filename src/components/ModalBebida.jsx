import { Modal,Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";


const ModalBebida = () => {

const {handleModalClick,modal,dataModal,setDataModal,cargando} = useBebidas();

const mostrarIngredientes = ()=>{
    let ingredientes = [];

    for(let i = 1; i < 16; i++){
        if(dataModal[`strIngredient${i}`]){
            ingredientes.push(
                <li key={i}>{dataModal[`strIngredient${i}`]} -- {dataModal[`strMeasure${i}`]}</li>
            )
        }

    }

    return ingredientes;
}

  return (

    !cargando && (<Modal show={modal} onHide={()=>{
        handleModalClick();
        // setDataModal({});
    }}>
        <Image src={dataModal.strDrinkThumb} fluid alt={`imagen receta ${dataModal.strDrink}`} />
        <Modal.Header>
            <Modal.Title>{dataModal.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                <p>{dataModal.strInstructions}</p>
                <h2>Ingredientes y cantidades</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>
    </Modal>)



  )
}

export default ModalBebida