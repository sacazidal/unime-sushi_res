/* eslint-disable react/prop-types */
const FormInput = ({ type, name, id, placeholder }) => {
  const handleInputChange = (e) => {
    if (name === "phoneNumber") {
      const value = e.target.value;
      e.target.value = value.slice(0, 11);
    }
    if (name === "name") {
      const value = e.target.value;
      e.target.value = value.slice(0, 11);
    }
  };
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-full p-3 border-2 rounded-2xl border-gray-300 placeholder:font-montserrat placeholder:font-medium placeholder:text-xs font-montserrat font-medium text-xs flex placeholder:justify-center"
      maxLength={name === "phoneNumber" ? 11 : undefined}
      onChange={handleInputChange}
    />
  );
};

export default FormInput;
