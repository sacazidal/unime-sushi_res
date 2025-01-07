import LocationInformation from "./LocationInformation";
import Maps from "./Maps";
import ShippingMethod from "./ShippingMethod";

const DeliveryAddress = () => {
  return (
    <div className="mb-6">
      <div className="w-2/5">
        <ShippingMethod />
      </div>
      <div className="w-full">
        <LocationInformation />
      </div>
      <div className="w-full">
        <Maps />
      </div>
    </div>
  );
};

export default DeliveryAddress;
