import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Component/CurrencyConverter'
import CurrencyDispley from './Component/CurrencyDispley'

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter 
          render={(currencyData, amount)=> (
            <CurrencyDispley currencyData={currencyData} amount={amount}/>
          )}
        />
      </>
    );
  }
}

export default App;
