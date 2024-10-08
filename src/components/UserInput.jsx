const UserInput = ({ onChange, userInput }) => {
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <lablel>Inversión Inicial</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) =>
                            onChange('initialInvestment', e.target.value)
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
                            onChange('annualInvestment', e.target.value)
                        }
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <lablel>Retorno Esperado</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) =>
                            onChange('expectedReturn', e.target.value)
                        }
                    />
                </p>
                <p>
                    <lablel>Duración</lablel>
                    <input
                        type='number'
                        required
                        value={userInput.duration}
                        onChange={(e) => onChange('duration', e.target.value)}
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
