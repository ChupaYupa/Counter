import React from 'react';

const Button = (props) => {

    const callback = () => {
        props.callback();
    };
    let classForButtons = props.title === 'INC' ? 'counter_inc' :
        props.title === 'DEC' ? 'counter_dec' :
            props.title === 'SET' ? 'settings_set' : '';
    return (
        <div>
            <button className={classForButtons} disabled={props.disabled} onClick={callback}>{props.title}</button>
        </div>)
}
export default Button;