import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="content justify-content-around align-items-center d-flex shadow-lg">
      <Link to="/session">INICIAR SESION</Link>
      <div className="Indicaciones">
        <p>Proyecto creado con react, bootstrap y firebase</p>
        <p>Para acceder a las canciones, inicia sesion</p>
        <p>Para escuchar la canciones tienes que tener spotify en tu dispositivo</p>
        <p>Herramientas usadas: firebase, axios, react-router-dom,form-hook</p>
      </div>
    </div>
  )
}