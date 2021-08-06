import "./form-input.css";

const FormInput = ({ label, type, name, min, value, onChange }) => {
  return (
    <div>
      {name === "description" ? (
        <div className="form-input">
          <label className="input-label">Description</label>
          <textarea
            name="description"
            type="text"
            value={value}
            onChange={onChange}
            required
          />
        </div>
      ) : (
        <div className="form-input">
          <label className="input-label">{label}</label>
          <input
            type={type}
            className="input-field"
            name={name}
            value={value}
            onChange={onChange}
            min={`${name === "page" || name === "price" ? `${min}` : "null"}`}
            required
          />
        </div>
      )}
    </div>
  );
};

export default FormInput;
