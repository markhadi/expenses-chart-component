const HeaderBalance = ({ balance }) => {
  return (
    <section className="px-5 py-6 flex justify-between items-center bg-primary-softred rounded-lg text-neutral-paleorange mb-4 md:px-8 md:py-[30px] md:rounded-[20px] md:mb-[26px]">
      <div className="flex flex-col gap-3 md:gap-4">
        <p>My balance</p>
        <h2>${balance}</h2>
      </div>
      <img src="./images/logo.svg" alt="Logo" className="h-10 md:h-12" />
    </section>
  );
};

export default HeaderBalance;
