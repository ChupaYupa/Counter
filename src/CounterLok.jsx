import React from 'react';
import s from './Counter.module.css';
import { string } from 'postcss-selector-parser';



class CounterLok extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    onClickAdd = (props) => {
        this.setState((upReset) => {
            if (upReset.counter < 5) {
            return {
                counter: upReset.counter + 1,
            }}
        })
    };

    onClickReset = () => {
        this.setState((upReset) => {
            return {
                counter: upReset.counter === 0,
            }            
        })
    };

    render() {
        return (
            <div className={s.div}>
                <h1 className={s.counter}>{this.state.counter}</h1>
                <button className= {s.onClickAdd} onClick={this.onClickAdd}>Add</button>
                <button  className= {s.onClickReset}onClick={this.onClickReset}>Reset</button>
            </div>
        )
    }
}
export default CounterLok;