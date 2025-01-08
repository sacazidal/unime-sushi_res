/* eslint-disable react/prop-types */
const FormInput = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className="w-full p-2 md:p-3 border-2 rounded-2xl border-gray-300 placeholder:font-montserrat placeholder:font-medium placeholder:text-xxs md:placeholder:text-xs font-montserrat font-medium text-xs flex placeholder:justify-center"
      maxLength={name === "phoneNumber" ? 11 : undefined}
      onChange={onChange}
    />
  );
};

export default FormInput;
