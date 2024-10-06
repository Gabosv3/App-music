import imagen from "../../assets/img/logo.png"
import { LoginFormComponent } from "./components/LoginFormComponent"
import { RegisterFormComponent } from "./components/RegisterFormComponent"

export const Session = () => {

  function switchContent() {
    const content = document.getElementById("content");
    const loginbtn = document.getElementById("login");
    const registerbtn = document.getElementById("register");

    registerbtn.addEventListener("click", () => {
      content.classList.add("active");
    });

    loginbtn.addEventListener("click", () => {
      content.classList.remove("active");
    });
  }

  return (
    <div className=" content justify-content-center align-items-center d-flex shadow-lg" id="content">
      <div className="col-lg-6  d-flex justify-content-center">
        <RegisterFormComponent />
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <LoginFormComponent />
      </div>
      <div className="switch-content">
        <div className="switch">
          <div className="switch-panel switch-left">
            <h1> HOLA DE NUEVO A.</h1>
           
            <button className="hidden btn border-white text-white w-50 fs-6" id="login" onClick={switchContent} >INICIAR SESION</button>
          </div>

          <div className="switch-panel switch-right">
            <h1> BIENVENIDO</h1>
            <img src={imagen} alt="Gabriel music" style={{ width: "15vw" }} />
            <button className="hidden btn border-white text-white w-50 fs-6" id="register" onClick={switchContent}>Registrarse</button>
          </div>
        </div>

      </div>

    </div>
  );
}