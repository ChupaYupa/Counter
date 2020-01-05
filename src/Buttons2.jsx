import React from 'react';
// import s from './Counter.module.css';
import s from './Buttons2.module.css';

const Buttons2 = (props) => {
    return (
        <div className={s.div}>
            <div className={s.value}>
                <p>max value:<input /></p>
                <p>min value:<input /></p>
            </div>
            <div className={s.but}>
                <button className={s.set}>Set</button>
            </div>
        </div>);
}
export default Buttons2;