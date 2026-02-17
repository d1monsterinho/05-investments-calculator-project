import investmentCalculatorLogo from "../../assets/investment-calculator-logo.png";

function Header() {
    return (
        <div id="header">
            <img id="header img" src={investmentCalculatorLogo} />
            <h1 id="header h1">React Investment Calculator</h1>
        </div>
    )
}

export default Header;