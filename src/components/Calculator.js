import React from 'react';
import '../App.css';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <table id="calcu">
        <tr>
          <td colSpan="4"><input type="text" id="result" value="0" /></td>
        </tr>
        <tr>
          <td>
            <input type="button" value="AC" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="+/-" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="%" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="+" className="calc-orange-button" />
            {' '}
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="7" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="8" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="9" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="*" className="calc-orange-button" />
            {' '}
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="4" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="5" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="6" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="-" className="calc-orange-button" />
            {' '}
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="1" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="2" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="3" className="calc-button" />
            {' '}
          </td>
          <td>
            <input type="button" value="+" className="calc-orange-button" />
            {' '}
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <input type="button" value="0" className="zero-btn" />
            {' '}
          </td>
          <td>
            <input type="button" value="=" className="calc-orange-button" />
            {' '}
          </td>
        </tr>
      </table>
    );
  }
}
export default Calculator;
