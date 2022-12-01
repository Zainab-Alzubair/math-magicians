import React from 'react';
import '../App.css';
import calculate from '../logic/calculate'

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(e) {
    this.setState(calculate(this.state, e.target.value));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <table id="calcu">
      <tr>
        <td colSpan="4"id="result">
        <p>{total}{operation}{next}</p>
        </td>
      </tr>
        <tr>
          <td>
            <input type="button" value="AC" className="calc-button" onClick={this.eventHandler}/>
            
          </td>
          <td>
            <input type="button" value="+/-" className="calc-button" onClick={this.eventHandler}/>
           
          </td>
          <td>
            <input type="button" value="%" className="calc-button"onClick={this.eventHandler} />
           
          </td>
          <td>
            <input type="button" value="+" className="calc-orange-button"onClick={this.eventHandler} />
       
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="7" className="calc-button" onClick={this.eventHandler}/>
         
          </td>
          <td>
            <input type="button" value="8" className="calc-button" onClick={this.eventHandler}/>
      
          </td>
          <td>
            <input type="button" value="9" className="calc-button" onClick={this.eventHandler}/>
      
          </td>
          <td>
            <input type="button" value="*" className="calc-orange-button"onClick={this.eventHandler} />
        
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="4" className="calc-button" onClick={this.eventHandler}/>
      
          </td>
          <td>
            <input type="button" value="5" className="calc-button" onClick={this.eventHandler}/>
     
          </td>
          <td>
            <input type="button" value="6" className="calc-button"onClick={this.eventHandler} />
    
          </td>
          <td>
            <input type="button" value="-" className="calc-orange-button"onClick={this.eventHandler} />
        
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="1" className="calc-button" onClick={this.eventHandler}/>
         
          </td>
          <td>
            <input type="button" value="2" className="calc-button" onClick={this.eventHandler}/>
         
          </td>
          <td>
            <input type="button" value="3" className="calc-button" onClick={this.eventHandler}/>
         
          </td>
          <td>
            <input type="button" value="+" className="calc-orange-button" onClick={this.eventHandler}/>
        
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <input type="button" value="0" className="zero-btn" onClick={this.eventHandler}/>
       
          </td>
          <td>
            <input type="button" value="=" className="calc-orange-button"onClick={this.eventHandler} />
          
          </td>
        </tr>
      </table>
    );
  }
}
export default Calculator;
