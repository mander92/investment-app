import { useState } from 'react';

const UserInput = () => {
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
                [inputIdetifier]: newValue,
            };
        });
    };

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <lablel>Retorno Esperado</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.initialIvestment}
                        onChange={(e) =>
                            handelChange('initialIvestment', e.target.value)
                        }
                    />
                </p>
                <p>
                    <lablel>Inversión Anual</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) =>
                            handelChange('annualInvestment', e.target.value)
                        }
                    />
                </p>
                <p>
                    <lablel>Retorno Esperado</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.expectReturn}
                        onChange={(e) =>
                            handelChange('expectReturn', e.target.value)
                        }
                    />
                </p>
                <p>
                    <lablel>Duración</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.duration}
                        onChange={(e) =>
                            handelChange('duration', e.target.value)
                        }
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
