import {createStore, combineReducers} from "redux";


//AC import
const ADD_COUNTER = 'ADD_COUNTER';
const RESET = 'RESET';
const MAX_VALUE = 'MAX_VALUE';
const MIN_VALUE = 'MIN_VALUE';
const SET = 'SET';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    counter: 0,
    minCounter: 1,
    maxCounter: 5,
    isCounter: true,
    isError: false
}

//Action Create
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        //Увеличение счетчика
        case ADD_COUNTER: {
            return state.counter < state.maxCounter ?
                {...state, counter: state.counter + 1} : state
        }
        //Сброс счетчика
        case RESET: {
            return {
                ...state, counter: state.minCounter, isCounter: false
            };
        }
        //Максимальное value
        case MAX_VALUE: {
            debugger
            return {...state, maxCounter: Number(action.maxValue), isCounter: false};

        }
        //Минимальное value
        case MIN_VALUE: {
            return {...state, minCounter: Number(action.minValue), isCounter: false};
        }
        //Вывод ошибки
        case SET_ERROR:
            return {
                ...state, isError: action.isError
            };
        default:
            return state;
    }
}
export default counterReducer;

export const onClickAddAC = () => ({
    type: ADD_COUNTER
});
export const setIsError = (isError) => ({
    type: SET_ERROR, isError
});


export const onClickResetAC = () => ({
    type: RESET
});

export const changeMinValueAC = (minValue) => ({
    type: MIN_VALUE,
    minValue: minValue
});

export const changeMaxValueAC = (maxValue) => ({
    type: MAX_VALUE,
    maxValue: maxValue
});
export const store = createStore(combineReducers({
    counter: counterReducer
}));



