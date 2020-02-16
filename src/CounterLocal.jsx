import React from 'react';
import s from './Counter.module.css';
import DisplayCounter from './DisplayCounter';
import CounterSetting from './CounterSetting';
import { connect } from 'react-redux';
import Button from './Button';
import { onClickAddAC, onClickResetAC, changeMinValueAC, changeMaxValueAC, onSetBtnAC } from '../../Counter/src/Redux/counter-reduce';
import {setIsError} from "./Redux/counter-reduce";


class CounterLocal extends React.Component {



    render() {
        debugger
        let btnAddDisabled = this.props.counter === this.props.maxCounter || this.props.maxCounter <= this.props.minCounter;
        let btnResDisabled = this.props.counter === this.props.minCounter || (this.props.minCounter >= this.props.maxCounter);

        let errorCounter = this.props.minCounter === this.props.maxCounter || this.props.minCounter > this.props.maxCounter;

//Если setIsError = условию errorCounter
            this.props.setIsError(errorCounter);

        return (


            <div className={s.elements}>
                <div>
                    <DisplayCounter
                        counter={this.props.counter}
                        isCounter={this.props.isCounter}
                        minCounter={this.props.minCounter}
                        maxCounter={this.props.maxCounter}
                        isError={this.props.isError}
                    />
                    <div className={s.but}>
                        <Button title='INC'
                            callback={this.props.onClickAdd}
                            disabled={btnAddDisabled}
                        />
                        <Button title='DEC'
                            callback={this.props.onClickReset}
                            disabled={btnResDisabled}
                        />
                    </div>
                </div>
                <div >
                    <CounterSetting changeMaxValue={this.props.changeMaxValue}
                        counter={this.props.counter}
                        isCounter={this.props.isCounter}
                        minCounter={this.props.minCounter}
                        maxCounter={this.props.maxCounter}
                        changeMinValue={this.props.changeMinValue}
                         />

                    <div className={s.but}>
                        <Button title='SET'
                            callback={this.props.onClickReset}
                            disabled={btnResDisabled}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        counter: state.counter.counter,
        minCounter: state.counter.minCounter,
        maxCounter: state.counter.maxCounter,
        isCounter: state.counter.isCounter,
        isError: state.counter.isError
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        onClickAdd: () => {
            dispatch(onClickAddAC())
        },
        onClickReset: () => {
            dispatch(onClickResetAC());
        },
        changeMinValue: (minValue) => {
            dispatch(changeMinValueAC(minValue));
        },
        changeMaxValue: (maxValue) => {
            dispatch(changeMaxValueAC(maxValue));

        },
        // onSetBtn: (setOn) => {
        //     dispatch(onSetBtnAC(setOn));
        //
        // },
        setIsError: (isError) => {
            dispatch(setIsError(isError));

        }
    }
}
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(CounterLocal);


export default ConnectedCounter;
