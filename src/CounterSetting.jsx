import React from 'react';
// import s from './Counter.module.css';
import s from './CounterSetting.module.css';

const CounterSetting = (props) => {

    //Background- color Input
    let errorMax = props.maxCounter <= props.minCounter ? `${s.inputError}` : `${s.input}`;
    let errorMin = (props.minCounter >= props.maxCounter) ? `${s.input} ${s.inputError}` : `${s.input}`;

    //MinValue
    let onChangeMin = (minValue) => {
        props.changeMinValue(minValue.currentTarget.value);


    }
    //maxValue
    let onChangeMax = (maxValue) => {

        props.changeMaxValue(maxValue.currentTarget.value);

    }
    return (
        <div className={s.div}>
            <div className={s.value}>

                <div >max value:<input
                    min="0"
                    max="50"
                    onChange={onChangeMax}
                    value={props.maxCounter}
                    type='number'
                    className={errorMax}
                />
                </div>

                <div >min value:<input
                    min="0"
                    max="50"
                    onChange={onChangeMin}
                    value={props.minCounter}
                    type='number'
                    className={errorMin}
                />
                </div>
            </div>
        </div >);
}
export default CounterSetting;