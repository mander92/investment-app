import { calculateInvestmentResults } from '../util/investment.js';

const Results = ({ input }) => {
    const data = calculateInvestmentResults(input);
    console.log(data);
    return <p>Result...</p>;
};

export default Results;
