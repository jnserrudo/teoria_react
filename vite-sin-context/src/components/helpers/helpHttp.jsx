export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();

    options.signal = controller.signal; //con esto tenemos la opcion de poner un manejador de errores

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    //si el body no existe, lo estoy igualando a falso, para despues verificar si es necesario eliminarlo, ya que es muy raro mandar un body en una peticion get , pero no se puede mandar un body vacio o falso
    if (!options.body) {
      delete options.body;
    }

    console.log(options);
    //si despues de un segundo no recibo respuesta del servidor
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Salio error",
            }
            )
      )
      .catch((err) => err);
  };

  const get = (url,options={}) => customFetch(url,options);

  const post = (url,options={}) => {
    options.method="POST"
    return customFetch(url,options)
  };

  const put = (url,options={}) => {
    options.method="PUT"
    return customFetch(url,options)
  };

  const del = (url,options={}) => {
    options.method="DELETE"
    return customFetch(url,options)
  };

  
  //como el valor y la propiedad tendran el mismo nombre, entonces lo puedo expresar de esta manera
  return {
    get,
    post,
    put,
    del,
  };
};
