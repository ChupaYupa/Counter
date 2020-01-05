import React from 'react';
import './App.css';
import CounterLok from './CounterLok';
import CounterSetting from './CounterSetting';
import s from './Counter.module.css';
import state from './state';


function App() {
  return (
    <div className={s.divStore}>
      <div className={s.div}><CounterLok state={state} /></div>
      <div className={s.div2}><CounterSetting /></div>
    </div>
  );
}

export default App;
