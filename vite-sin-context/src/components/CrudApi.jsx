import React, { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from "./helpers/helpHttp";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const { loading, db, error } = useContext(CrudContext);

  return (
    <>
      <h2>CRUD APP con Contexto</h2>

      {/* para eliminar no necesitamos el formulario, por que los botones de eliminar los tienen cada uno de los registros de las tablas
            para diferenciar entre insert y update , necesitamos pasarle la propiedad de editar y la funcion que la actualiza */}

      {loading && <Loader />}

      {error && <Message mje={`Error ${error.status}, ${error.statusText}`} />}

      <div className="cont_tabla">
        <CrudForm />

        {/* la tabla necesita tambien la funcion que va a eliminar los datos, cuando presionemos el boton de editar, los datos de la tabla se tienen que ir al formulario   */}

        {db && <CrudTable />}
      </div>
    </>
  );
};
