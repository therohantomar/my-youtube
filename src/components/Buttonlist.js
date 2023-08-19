import Button from "./Button";
import { Buttonlistdata } from "../utils/constants";

const Buttonlist = () => {
  return (
    <div  className="flex width overflow scrollbar-hide mb-4 -moz-scrollbar-none font-semibold  w-full overflow-x-scroll flex-shrink-0   justify-between">
      {Buttonlistdata.map((items, index) => {
        return <Button key={index} name={items} />;
      })}
    </div>
  );
};

export default Buttonlist;
