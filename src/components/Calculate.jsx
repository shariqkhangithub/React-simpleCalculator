import React, { useState } from 'react'
import './Calculate.css'

const Calculate = () => {
    const [inputValue1, setinputValue1] = useState('')
    const [inputValue2, setinputValue2] = useState('')
    const [operator, setOperator] = useState('+')
    const [result, setResult] = useState(null)

    function handleInput1(event) {
        setinputValue1(event.target.value)
    }
    function handleInput2(event) {
        setinputValue2(event.target.value)
    }
    function handleOperator(event) {
        setOperator(event.target.value)
    }

    function calculatebtn() {
        const num1 = parseFloat(inputValue1)
        const num2 = parseFloat(inputValue2)
        let calculationReault = 0

        if (operator === '+'){
            calculationReault = num1 + num2;
        }
        else if (operator === '-'){
            calculationReault = num1 - num2;
        }
        else if (operator === '*'){
            calculationReault = num1 * num2;
        } else if (operator === '/'){
            calculationReault = num1 / num2;
        }

        setResult(calculationReault)
    }

    return (
        <>
            <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ height: '450px', width: '500px', border: '1px solid ', backgroundColor: '#faf7f0', textAlign: 'center', boxShadow: '0 0 10px 1px ' }}>

                    <h1>: CALCULATOR :</h1>

                    <div style={{ margin: '40px', marginTop: '60px' }}>

                        <h4>Number 1 = <input
                            type="number"
                            className='put1'
                            value={inputValue1}
                            onChange={handleInput1}
                            placeholder='enter your number...' />
                        </h4>

                        <h4 style={{ marginTop: '-15px' }}>Number 2 = <input
                            value={inputValue2}
                            onChange={handleInput2}
                            type="number"
                            placeholder='enter your number...' />
                        </h4>

                        <h3>CHOOSE A OPERATION</h3>

                        <select name="calculation" id="calculation" value={operator} onChange={handleOperator}>
                            <option value="" disabled selected hidden>Select an option</option>
                            <option value="+"> + </option>
                            <option value="-">-</option>
                            <option value="/">/</option>
                            <option value="*">*</option>
                        </select><br />

                        <button onClick={calculatebtn} style={{ margin: '20px', width: '100px', borderRadius: '9px', cursor: 'pointer' }}>calculate</button>
                    </div>

                    <h2 >Ans : <span style={{color:'blue'}}>{result}</span> </h2>

                </div>
            </div>
        </>
    )
}

export default Calculate
