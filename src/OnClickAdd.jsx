import React from 'react';


class OnClickAdd extends React.Component {
    render = () => {
  
            this.setState((upReset) => {
                if (upReset.counter < 5) {
                    return {
                        counter: upReset.counter + 1,
                    }
                }
            })
        
    }
    render() {
        return (
            <div>
                <button className ={this.props.onClickAdd} onClick={this.props.onClickAdd}>Add</button>
            </div>
        )
    }
}
export default OnClickAdd;