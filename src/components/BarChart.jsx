import { useState } from "react";
import data from "../data/data.json";

const BarChart = () => {
  const maxAmount = Math.max(...data.map((d) => d.amount));
  const availableHeight = 150;

  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="flex gap-3 h-[220px] md:gap-[18px]">
      {data.map((datum, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-3 items-center justify-end h-full"
        >
          <div
            className={`relative w-[33px] md:w-[50px] transition-all rounded-[4px] cursor-pointer ${
              datum.amount === maxAmount
                ? "bg-primary-cyan hover:bg-primary-cyan70"
                : "bg-primary-softred hover:bg-primary-softred70"
            } `}
            style={{
              height: `${(datum.amount / maxAmount) * availableHeight}px`,
            }}
            onMouseEnter={() => setHoveredBar(datum.amount)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <span
              className={`absolute top-[-42px] left-1/2 transform -translate-x-1/2 bg-neutral-darkbrown text-neutral-paleorange text-[18px] p-2 rounded-lg transition-all duration-300 ease-in-out ${
                datum.amount === hoveredBar
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              {datum.amount}
            </span>
          </div>
          <div className="text-[12px] text-neutral-mediumbrown md:text-[15px]">
            {datum.day}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
