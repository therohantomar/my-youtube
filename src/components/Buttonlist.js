import Button from "./Button";
import { Buttonlistdata } from "../utils/constants";

const Buttonlist = () => {
  return (
    <div className="flex  scrollbar-hide mb-4 font-semibold  justify-between">
      {Buttonlistdata.map((items, index) => {
        return <Button key={index} name={items} />;
      })}
    </div>
  );
};

export default Buttonlist;
