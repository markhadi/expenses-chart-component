import React from "react";
import HeaderBalance from "./components/HeaderBalance";
import SpendingChart from "./components/SpendingChart";

const App = () => {
  return (
    <main>
      <HeaderBalance balance="921.48" />
      <SpendingChart />
    </main>
  );
};

export default App;
