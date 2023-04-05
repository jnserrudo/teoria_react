import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = () => {
 // console.log(data);
const {db:data}=useContext(CrudContext)

console.log(data)
  return (
    <>
   
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Ocupacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.filter(p=>p.nombre).map((p) => (
              <CrudTableRow
                key={p.id}
                per={p}
                
              />
            ))
          ) : (
            <tr>
            <td colSpan="3">Sin datos</td>
          </tr> 
          )}
        </tbody>
      </table>
    </>
      
    
  );
};
