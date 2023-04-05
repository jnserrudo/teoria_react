import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../components/helpers/helpHttp";

const nroRandom = () => Math.floor(Math.random() * (100 - 51) + 51);

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/ninjas";

  useEffect(() => {
    //antes de hacer la peticion hago visible el loader
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          if (res.length > 0) {
            const personajes = res.map((p) => {
              return {
                id: p.id,
                nombre: p.name,
                ocupacion: p.info?.Ocupação ?? "Sin Ocupacion",
                imagen: p.images,
              };
            });
            setDb(personajes);
          } else {
            setDb(res);
          }

          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = nroRandom();
    data.imagen = ["/assets/avatar.png"];
    //data.imagen=['https://placeimg.com/50/50/nature']
console.log(data)
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    //CUANDO QUIERO HACER EL POST CON LA API DE NARUTO TENDRE VARIOS ERRORES, PORQUE EL FORMATO EN EL CUAL ESTA EL ARCHIVO db.json ES DISTINTO AL FORMATEADO, QUE TIENEN SOLAMENTE EL NOMBRE, LA FOTO Y LAS OCUPACIONES, EL DEL ARCHIVO DB.JSON TIENE MUCHOS OTROS ATRIBUTOS, POR LO QUE AL QUERER HACER EL METODO POST, SIMPLEMENTE ME CREA un objeto con un id
    api.post(url, options).then((res) => {
      console.log(res, "api post");

      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    //setDb([data, ...db]); esto es cuando no se usaba json server
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res, "api post");
      //json server sobreescribe la data del archivo json
      if (!res.err) {
        let newdata = db.map((p) => (p.id === data.id ? data : p));
        setDb(newdata);
      } else {
        setError(res);
      }
    });

    /* let newdata = db.map((p) => (p.id === data.id ? data : p));
    setDb(newdata); era sin json server */
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Seguro de eliminar el registro con id: ${id}`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newdata = db.filter((p) => p.id != id);
          setDb(newdata);
        } else {
          setError(res);
        }
      });
    }
  };
  let data = {
    db,
    setDb,
    dataToEdit,
    setDataToEdit,
    error,
    setError,
    loading,
    setLoading,
    createData,
    updateData,
    deleteData,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };

export default CrudContext;
