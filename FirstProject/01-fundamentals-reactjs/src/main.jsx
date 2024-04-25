import React from 'react' //Coração do react no projeto para todas as telas 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//DOM - Document Object Model(html -> javascript)

//Onde serão construídas as telas
//App é uma função chamada do App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
