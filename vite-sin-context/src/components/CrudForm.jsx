import React, { useContext, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import CrudContext from "../context/CrudContext";
const initialForm = {
  id: null,
  nombre: "",
  ocupacion: "",
};
export const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);
 
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.ocupacion) {
      alert("faltan datos");
      return;
    }

    if (form.id) {
      //ya tiene un valor, entonces se quiere editar
      updateData(form);
    } else {
      //no tiene valor, se quiere cargar un nuevo registro
      createData(form);
    }

    //ahora se debe vaciar o resetear el formulario, ya que creo o actualizo los datos
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3> {dataToEdit ? "Editar" : "Agregar"} </h3>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        ></input>
        <input
          type="text"
          name="ocupacion"
          placeholder="Ocupacion"
          onChange={handleChange}
          value={form.ocupacion}
        ></input>
        <input type="submit" value="Enviar"></input>
        <input type="reset" value="Limpiar" onClick={handleReset}></input>
      </form>
    </div>
  );
};
