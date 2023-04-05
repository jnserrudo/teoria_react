import { createContext, useState } from "react";

const initialTheme="light"

//se crea una variable con el nombre que se quiera darle al contexto 
const ThemeContext=createContext()
//el contexto internamente tiene dos objetos, un proveedor y un consumidor

const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        console.log(e.target.value, e.target.checked);
        setTheme(e.target.value);
      };

    //en este objeto, por cada propiedad que tenga este objeto, es cada uno de esos valores que queremos conservar globalmente
    ///hmm en la documentacion lo vi como value, asi no creo que sea cualquier nombre
    const data={
        theme,
        handleTheme
    }
    //en la data vamos a ir  agregando todos los valores que necesitamos manejar para funcionar

    //le creamos una propiedad, puede ser cualquiera, pero jon mircha la llama "value"
    return(
        <ThemeContext.Provider value={data}> {children} </ThemeContext.Provider>
    )

}

export{ThemeProvider}

export default ThemeContext;