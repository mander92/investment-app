import { calculateInvestmentResults, formatter } from '../util/investment.js';

const Results = ({ input }) => {
    console.log(input);
    const data = calculateInvestmentResults(input);
    const initialInvestment =
        data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Año</th>
                    <th>valor invertido</th>
                    <th>Interés (año)</th>
                    <th>Interés total</th>
                    <th>capital invertido</th>
                </tr>
            </thead>
            <tbody>
                {data.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;

                    const totalAmountInvested =
                        yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{totalAmountInvested}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Results;
