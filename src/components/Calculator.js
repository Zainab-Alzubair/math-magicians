import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const resultInput = {
    total: 0,
    next: null,
    operation: null,
  };
  const [state, setState] = useState(resultInput);

  const handleClick = (e) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    setState(calculate(state, e.target.value));
  };

  const { total, next, operation } = state;
  return (
    <table id="calcu">
      <tr>
        <td colSpan="4" id="result">
          <p>
            {total}
            {operation}
            {next}
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="AC" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="+/-" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="%" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="+" className="calc-orange-button" onClick={handleClick} />

        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="7" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="8" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="9" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="x" className="calc-orange-button" onClick={handleClick} />

        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="4" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="5" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="6" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="-" className="calc-orange-button" onClick={handleClick} />

        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="1" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="2" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="3" className="calc-button" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="÷" className="calc-orange-button" onClick={handleClick} />

        </td>
      </tr>
      <tr>
        <td colSpan="3">
          <input type="button" value="0" className="zero-btn" onClick={handleClick} />

        </td>
        <td>
          <input type="button" value="=" className="calc-orange-button" onClick={handleClick} />

        </td>
      </tr>
    </table>
  );
};

export default Calculator;
