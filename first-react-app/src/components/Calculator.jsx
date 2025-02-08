import { useState } from "react"
import './Calculator.css'

function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');
    let display = firstNumber + ' ' + operation + ' ' + secondNumber;

    const handleSubmit = (e) => {
        e.preventDefault();
        // calculate and set result
        switch (operation) {
            case '+': setResult(firstNumber + secondNumber); break;
            case '-': setResult(firstNumber - secondNumber); break;
            case '*': setResult(firstNumber * secondNumber); break;
            case '/': setResult(firstNumber / secondNumber); break;
        }
        // reset form fields back to initial state
        setFirstNumber(0);
        setSecondNumber(0);
        setOperation('+');
    }

    const handleSetNumber = (e) => {
        let inputNumber = parseInt(e.target.value);
        if (e.target.name === 'first') setFirstNumber(inputNumber);
        if (e.target.name === 'second') setSecondNumber(inputNumber);
        setResult('');
    }

    return (
        <div className="Calculator">
            <form onSubmit={handleSubmit}>
                <label>
                    Number 1:<br/>
                    <input type="number" name="first" value={firstNumber} onChange={handleSetNumber} />
                </label>
                <br/>
                <select className="select" value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <br/>
                <label>
                    Number 2:<br/>
                    <input type="number" name="second" value={secondNumber} onChange={handleSetNumber} />
                </label> 
                <br/>  
                <button className="button">Calculate</button>             
            </form>
            <div style={{background:'#ddd', fontWeight:'bold', padding: '1em'}}>{result ? result : display}</div>
        </div>
    )
}

export default Calculator