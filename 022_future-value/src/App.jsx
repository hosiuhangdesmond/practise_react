import { useState } from 'react';

import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import Display from './components/Display';
import './App.css';

// helper function to calculate the future value
const calcFutureValue = (monthlyAmount, years, interestRate) => {
    let futureValue = 0;
    const months = years * 12;
    const monthlyRate = interestRate / 12 / 100;

    for (let i = 0; i < months; i++) {
        futureValue = (futureValue + monthlyAmount) * (1 + monthlyRate);
    }

    return futureValue;
}

const App = () => {
    // state variables to hold error message and future value
    const [errorMsg, setErrorMsg] = useState('');
    const [futureValue, setFutureValue] = useState(null);
    
    // event handler for form submission
    const handleSubmit = (numAmount, numYears, numRate) => {
        if (
            isNaN(numAmount) || isNaN(numYears) || isNaN(numRate) ||
            numAmount < 0 || numYears < 0 || numRate < 0
        ) {
            setErrorMsg("Please enter valid non-negative numbers.");
        } else {
            const fv = calcFutureValue(numAmount, numYears, numRate);
            setFutureValue(fv);
            setErrorMsg('');
        }
    };

    return (
        <>
            <Header />
            <main className="container">
                <CalculatorForm onSubmit={handleSubmit} />
                <Display value={futureValue} errorMsg={errorMsg} />
            </main>
        </>
    );
};

export default App;