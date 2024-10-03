import Header from '../src/components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useId, useState } from 'react';

const App = () => {
    const [userInput, setUserInput] = useState({
        initialIvestment: 1000,
        annualInvestment: 1200,
        expectReturn: 6,
        duration: 10,
    });

    const handelChange = (inputIdetifier, newValue) => {
        setUserInput((preUserInput) => {
            return {
                ...preUserInput,
                [inputIdetifier]: +newValue,
            };
        });
    };

    return (
        <>
            <Header />
            <UserInput onChange={handelChange} userInput={userInput} />
            <Results input={userInput} />
        </>
    );
};

export default App;
