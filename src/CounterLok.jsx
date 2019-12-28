import React from 'react';
import s from './Counter.module.css';
import { string } from 'postcss-selector-parser';
import OnStyle from './Buttons';
import Buttons from './Buttons';


class CounterLok extends React.Component {
    constructor() {
        super();
    }
    state = {
        counter: 0,
        maxCounter: 5,
        // maxFilterValue: 'Active'
    }



    onClickAdd = (props) => {

        this.setState((upReset) => {
            if (upReset.counter < 5) {
                return {
                    counter: upReset.counter + 1,
                }
            }
        })
    };
    // maxFilter = (newValue) => {
    //     this.setState({
    //         maxFilterValue: newValue
    //     });
    // }

    onClickReset = () => {
        this.setState((upReset) => {
            return {
                counter: 0,
            }
        })
    };
    // changeFilter = (newFilterValue) => {
    //     this.setState({
    //         maxFilterValue: newFilterValue
    //     });
    // }

    render(props) {
        // let isError = this.state.counter === this.state.maxCounter
        // let classNameCounter = isError ? `${s.counter} ${s.error}` : `${s.counter}`
        return (
            <div>
                <Buttons addedMethod={this.onClickAdd} resetedMethod={this.onClickReset} counter={this.state.counter} maxCounter={this.state.maxCounter} />
            </div>
        )
    }
}
export default CounterLok;