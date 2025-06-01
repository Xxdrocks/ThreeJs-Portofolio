import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedHitung = () => {
  return (
    <div id="hitung" className="padding-x-lg xl:mt-0 mt-20">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={counterItems.label}
              className="text-white-50 text-5xl font-bold mb-2"
            >
              
              <CountUp suffix={item.suffix} end={item.value} duration={10} />
            </div>
            <div className="white-50 text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedHitung;
