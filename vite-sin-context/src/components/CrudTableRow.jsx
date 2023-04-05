import React, { useContext, useState } from "react";
//import Button from 'react-bootstrap/Button';

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import '../style.css'
import CrudContext from "../context/CrudContext";



export const CrudTableRow = ({ per}) => {
  const {setDataToEdit, deleteData }=useContext(CrudContext)
  let { id, nombre, ocupacion } = per;
console.log(per)
  const [imagen, setImagen] = useState(per?.imagen[0]);
  const handleClick = () => {
    console.log("evento click");
    if (per.imagen.length > 1) {
      console.log("evento click2", imagen == per.imagen[1]);

      if (imagen != per.imagen[1]) {
        setImagen(per.imagen[1]);
      } else {
        setImagen(per.imagen[0]);
      }
    }
  };
  return (
    <>
      <tr className="fila">
        <td>
          <img src={imagen} className="foto" onClick={handleClick}></img>
        </td>
        <td>{nombre}</td>
        <td> {ocupacion} </td>
        <td className="btn_acciones">
          {/* <Button variant="warning"onClick={()=>setDataToEdit(per)} >Editar</Button>
                <Button variant="danger" >Eliminar</Button>
 */}
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => setDataToEdit(per)}>
              Editar
            </Button>
            <Button variant="outlined" onClick={() => deleteData(id)}>
              Eliminar
            </Button>
          </Stack>
        </td>
      </tr>
    </>
  );
};
