import React, { useState } from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { FaCalculator } from 'react-icons/fa';
import calculate from '../logic/calculate';
import Home from '../pages/Home';
import Quote from '../pages/Quote';
import Navbar from './Navbar';

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
    <>
      <div className="nav-bar">
        <h1 className="about__list">
          Math Magicians
        </h1>
        <Navbar />
      </div>
      <Routes>
        <Route
          exact
          path="/calculator"
          element={(
            <div className="calcWrap">
              <h2>
                <FaCalculator />
                {' '}
                Lets Do some Math!
              </h2>
              <table id="calcu">
                <tr>
                  <td colSpan="4" id="result">
                    <p className="inputNumber">
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
            </div>
        )}
        />
        <Route path="/" element={<Home />} />

        <Route path="/quote" element={<Quote />} />

      </Routes>

    </>
  );
};

export default Calculator;
