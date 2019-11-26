import React from 'react';


class onClickReset extends React.Component {
    render = () => {
        onClickReset = () => {
            this.setState((upReset) => {
                return {
                    counter: upReset.counter === 0,
                }
            })
        };
    }
    render() {
        return (
            <div>
                <button className ={this.props.onClickReset} onClick={this.props.onClickReset}>Add</button>
            </div>
        )
    }
}
export default onClickReset;