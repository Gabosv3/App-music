import { useState } from "react"
import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase/config"
import { useNavigate  } from "react-router-dom"

export const LoginFormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formError, setFormError] = useState(''); // Estado para errores generales de Firebase
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const onSubmitForm = (data) => {
    setFormError(''); // Limpiar errores previos

    signInWithEmailAndPassword(auth, data.mail, data.pass)
      .then((userCredential) => {
        // Usuario autenticado
        const user = userCredential.user;
        console.log(user);
        navigate('/Songs');
      })
      .catch((error) => {
        console.error(error);
        
        // Mostrar error específico según el código de Firebase
        if (error.code === 'auth/user-not-found') {
          setFormError('Usuario no encontrado.');
        } else if (error.code === 'auth/wrong-password') {
          setFormError('Contraseña incorrecta.');
        } else if (error.code === 'auth/invalid-email') {
          setFormError('El formato del correo es inválido.');
        } else if (error.code === 'auth/invalid-credential') {
            setFormError('El correo y la contraseña son inválidas');
        } else {
          setFormError('Ocurrió un error. Inténtalo de nuevo.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="header-text mb-4">
        <h1>INICIO DE SESIÓN</h1>
      </div>

      {/* Mostrar mensaje de error general (Firebase) */}
      {formError && <div className="alert alert-danger">{formError}</div>}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          id="email"
          className={`form-control form-control-lg bg-light fs-6 ${errors.mail ? 'is-invalid' : ''}`}
          placeholder="Example: mail@mail.com"
          {...register('mail', {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de correo inválido"
            }
          })}
        />
        {/* Mostrar errores de validación para el campo email */}
        {errors.mail && <div className="invalid-feedback">{errors.mail.message}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          id="password"
          className={`form-control form-control-lg bg-light fs-6 ${errors.pass ? 'is-invalid' : ''}`}
          placeholder="Password"
          {...register('pass', {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            }
          })}
        />
        {/* Mostrar errores de validación para el campo password */}
        {errors.pass && <div className="invalid-feedback">{errors.pass.message}</div>}
      </div>

      <div className="input-group mb-3 justify-content-center">
        <button type="submit" className="btn border-white text-white fs-6">INICIAR SESIÓN</button>
      </div>
    </form>
  );
};
