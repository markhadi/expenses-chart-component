const TotalSpending = ({ total, percentage }) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="tracking-[0.01em] mb-3 text-neutral-mediumbrown">
          Total this month
        </p>
        <h1>${total}</h1>
      </div>
      <div className="pt-6 flex flex-col items-end gap-1 md:pt-8">
        <strong>{percentage}%</strong>
        <p className="tracking-[0.01em] text-neutral-mediumbrown">
          from last month
        </p>
      </div>
    </div>
  );
};

export default TotalSpending;
