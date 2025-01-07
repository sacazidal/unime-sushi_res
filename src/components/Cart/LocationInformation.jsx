import FormInput from "../FormInput";

const LocationInformation = () => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="">
        <FormInput
          type={"text"}
          name={""}
          id={""}
          placeholder={"Улица, дом, корпус"}
        />
      </div>
      <div className="flex justify-between gap-5">
        <FormInput
          type={"text"}
          name={""}
          id={""}
          placeholder={"Квартира"}
        />
        <FormInput
          type={"text"}
          name={""}
          id={""}
          placeholder={"Этаж"}
        />
        <FormInput
          type={"text"}
          name={""}
          id={""}
          placeholder={"Подьезд"}
        />
        <FormInput
          type={"text"}
          name={""}
          id={""}
          placeholder={"Домофон"}
        />
      </div>
    </div>
  );
};

export default LocationInformation;
