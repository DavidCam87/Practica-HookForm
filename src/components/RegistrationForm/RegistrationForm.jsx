import './RegistrationForm.css';
import InputField from '../InputField/InputField';
import { useForm } from 'react-hook-form';


const RegistrationForm = () => {
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const username = watch("username");
  const email = watch("email");
  const password = watch("password");

  const allFieldFilled = username && email && password;

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <InputField
        label="Nombre de usuario"
        type="text"
        name="username"
        register={register}
        required
        errors={formState.errors}
      />
      <InputField
        label="Correo electrónico"
        type="email"
        name="email"
        register={register}
        required
        pattern={{
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Formato de correo no válido',
        }}
        errors={formState.errors}
      />
      <InputField
        label="Contraseña"
        type="password"
        name="password"
        register={register}
        required
        pattern={{
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          message: 'La contraseña debe tener al menos 8 caracteres, una letra y un número',
        }}
        errors={formState.errors}
      />
      {allFieldFilled ? (
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              id='terms'
              {...register('terms', { required: true })} // Registra el checkbox
            />
            Acepto los términos y condiciones
          </label>
        </div>
      ) : null}
      <button type="submit" className="submit-button" disabled={!formState.isDirty}>Registrarse</button>
    </form>
  );
};

export default RegistrationForm;