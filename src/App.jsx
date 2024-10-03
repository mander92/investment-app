import Header from '../src/components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

const App = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inpuIsValid = userInput.duration >= 1;

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
            {!inpuIsValid && (
                <p className='center'>
                    Por favor intoroduce una duración válida
                </p>
            )}
            {inpuIsValid && <Results input={userInput} />}
        </>
    );
};

export default App;
