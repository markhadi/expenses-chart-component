import BarChart from "./BarChart";
import TotalSpending from "./TotalSpending";

const SpendingChart = () => {
  return (
    <section className="px-5 py-7 bg-neutral-paleorange text-neutral-darkbrown rounded-lg md:px-10 md:py-0 md:pt-9 md:pb-11 md:rounded-[20px]">
      <h2 className="mb-2 md:mb-7">Spending - Last 7 days</h2>
      <BarChart />
      <hr className="border border-solid border-neutral-cream mt-7 mb-6 md:mt-8 md:mb-9" />
      <TotalSpending total="478.33" percentage="+2.4" />
    </section>
  );
};

export default SpendingChart;
