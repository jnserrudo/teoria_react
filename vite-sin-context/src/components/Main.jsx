import React from 'react'

export const Main = ({theme,texts, auth}) => {
  return (
    <main className={theme}>
        <p>{texts.mainContent}</p>
        {auth?<p> {texts.mainHello} </p>:<p> {texts.mainWelcome} </p>}
        
        
    </main>
  )
}
