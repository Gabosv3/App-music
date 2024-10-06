import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../../firebase/config'

export const RegisterFormComponent = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [formError, setFormError] = useState(''); // Estado para almacenar mensajes de error
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mensajes de éxito
  
  const onSubmitForm = (data) => {
    setFormError(''); // Resetea el error al intentar enviar nuevamente
    setSuccessMessage(''); // Limpia mensaje de éxito al intentar nuevamente

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccessMessage("Usuario registrado con éxito"); // Mostrar mensaje de éxito en la página
      })
      .catch((error) => {
        console.error(error);
        
        // Mostrar mensaje de error según el código
        if (error.code === 'auth/email-already-in-use') {
          setFormError("El correo ya está en uso.");
        } else if (error.code === 'auth/invalid-email') {
          setFormError("El correo es inválido.");
        } else {
          setFormError("Ocurrió un error. Inténtalo de nuevo.");
        }
      });
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} >
      <div className='header-text mb-4 '>
        <h1>REGISTRARSE</h1>
      </div>

      {/* Mostrar mensaje de error */}
      {formError && <div className="alert alert-danger">{formError}</div>}
      
      {/* Mostrar mensaje de éxito */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* campo email */}
      <div className='mb-3'>
        <label htmlFor="email"> Email</label>
        <input
          className={`form-control form-control-lg bg-light fs-6 ${errors.email ? 'is-invalid' : ''}`}
          type="text"
          id="emailregister"
          placeholder="Ingrese su email"
          {...register('email', {
            required: "El email es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de email inválido"
            }
          })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      {/* campo password */}
      <div className='mb-3'>
        <label htmlFor="password">Contraseña</label>
        <input
          className={`form-control form-control-lg bg-light fs-6 ${errors.password ? 'is-invalid' : ''}`}
          type="password"
          id="passwordregister"
          placeholder="Ingrese su contraseña"
          {...register('password', {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            }
          })}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      {/* campo confirmar password */}
      <div className='mb-3'>
        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          className={`form-control form-control-lg bg-light fs-6 ${errors.confirmPassword ? 'is-invalid' : ''}`}
          type="password"
          id="confirmPassword"
          placeholder="Reingrese su contraseña"
          {...register('confirmPassword', {
            required: "Debes confirmar tu contraseña",
            validate: value => value === password || "Las contraseñas no coinciden"
          })}
        />
        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
      </div>

      {/* boton registrar */}
      <div className='input-group mb-3 justify-content-center'>
        <button className='btn border-white text-white fs-6' type="submit">REGISTRARSE</button>
      </div>
    </form>
  );
};
