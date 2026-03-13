import { useState } from "react";

import Header from "./components/Header/Header";
import UserInputGroup from "./components/UserInput/UserInputGroup";
import InvestmentResults from "./components/InvestmentResults/InvestmentResults";

function App() {
  const [userInputs, setUserInputs] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

  return (
    <>
      <Header />
      <UserInputGroup setUserInputs={setUserInputs} userInputs={userInputs} />
      <InvestmentResults userInputs={userInputs} />
    </>
  );
}

export default App
