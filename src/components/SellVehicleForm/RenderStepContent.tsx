import SellVehicleForm from "./SellVehicleForm";

const RenderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <SellVehicleForm />;
    default:
      return <div>Not Found</div>;
  }
};

export default RenderStepContent;
