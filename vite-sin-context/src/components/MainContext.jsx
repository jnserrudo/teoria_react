import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import LanguageContext from '../context/LanguageContext'
import ThemeContext from '../context/ThemeContext'

export const MainContext = () => {
const {theme}=useContext(ThemeContext)

const{texts}=useContext(LanguageContext)

const {auth}=useContext(AuthContext)
  return (
    <main className={theme}>
        <p>{texts.mainContent}</p>
        {auth?<p> {texts.mainHello} </p>:<p> {texts.mainWelcome} </p>}
        
        
    </main>
  )
}
