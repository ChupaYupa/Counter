import React from 'react';
import './App.css';
import CounterLocal from './CounterLocal';
import s from './Counter.module.css';
import { store } from './Redux/counter-reduce';
import { Provider } from 'react-redux';

function App(props) {
  return (
    <Provider store={store}>
      <div className={s.divStore}>
        <div className={s.div}><CounterLocal />
        </div>
      </div>
    </Provider>

  );
}

export default App;
