import './InputField.css';

const InputField = ({ label, register, name, required, pattern, errors, type }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        {...register(name, { required, pattern })}
        className={`input ${errors[name] ? 'input-error' : ''}`}
      />
      {errors[name] && (
        <span className="error-message">
          {errors[name].type === 'required' && `${label} es requerido`}
          {errors[name].type === 'pattern' && errors[name].message}
        </span>
      )}
    </div>
  );
};

export default InputField;