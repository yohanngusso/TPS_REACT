import { Component } from 'react';
import DisplayCount from './DisplayCount';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div className="counter">
                <DisplayCount count={this.state.count} />
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        );
    }
}

export default Counter;