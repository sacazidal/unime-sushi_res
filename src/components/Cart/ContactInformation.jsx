import FormInput from "../FormInput";

const ContactInformation = () => {
  return (
    <div className="flex justify-between gap-5 mb-6">
      <FormInput
        type={"text"}
        name={""}
        id={""}
        placeholder={"Ваше имя"}
      />
      <FormInput
        type={"number"}
        name={"phoneNumber"}
        id={""}
        placeholder={"Ваш телефон"}
        maxCountSymbol={11}
      />
    </div>
  );
};

export default ContactInformation;
