import React from 'react';
// import s from './Counter.module.css';
import s from './DisplayCounter.module.css';



class DisplayCounter extends React.Component {
    render(props) {
//ErrorCounterColor
        let isError = this.props.counter === this.props.maxCounter || this.props.minCounter === this.props.maxCounter
            || this.props.minCounter > this.props.maxCounter || this.props.isError;

        let classNameCounter = isError ? `${s.counter} ${s.error}` : `${s.counter}`;

        return (
            <div className={s.buttons}>
{/*TextError or StartValue*/}
                {
                    !this.props.isCounter ? <h1 className={classNameCounter}>{this.props.isError ? 'Ошибка': this.props.counter}</h1>
                        : <h1 className={classNameCounter}>Enter new values and press button SET</h1>
                }
            </div>
        )
    }
}
export default DisplayCounter;