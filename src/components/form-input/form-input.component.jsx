import "./form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <labeL
          className={`${
            otherProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </labeL>
      )}
    </div>
  );
};
export default FormInput;
