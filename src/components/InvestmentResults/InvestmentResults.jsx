import { calculateInvestmentResults, formatter } from "../../util/investment";

function InvestmentResults({ userInputs }) {
    const investmentResults = calculateInvestmentResults(userInputs);

    console.log(investmentResults);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentResults.map(result => {
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.valueEndOfYear - (result.annualInvestment * result.year) - userInputs.initialInvestment)}</td>
                            <td>{formatter.format(result.annualInvestment * result.year + userInputs.initialInvestment)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default InvestmentResults;