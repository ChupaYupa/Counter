import React from 'react';
// import s from './Counter.module.css';
import s from './Buttons.module.css';

import CounterLok from './CounterLok';


class Buttons extends React.Component {

    render(props) {
        let isError = this.props.counter === this.props.maxCounter
        let isDisabledAdd = this.props.counter === this.props.maxCounter
        let isDisabledReset = this.props.counter === this.props.minCounter
        let classNameResetDisabled = isDisabledReset ? `${s.onClickReset} ${s.disabled}` : `${s.onClickReset}`
        let classNameAddDisabled = isDisabledAdd ? `${s.onClickAdd} ${s.disabled}` : `${s.onClickAdd}`
        let classNameCounter = isError ? `${s.counter} ${s.error}` : `${s.counter}`
        return (
            <div>
                <h1 className={classNameCounter}>{this.props.counter}</h1>
                <div className={s.but}>
                    <button className={classNameAddDisabled} onClick={this.props.addedMethod}>Add</button>
                    <button className={classNameResetDisabled} onClick={this.props.resetedMethod}>Reset</button>
                </div>
            </div>
        )
    }
}
export default Buttons;