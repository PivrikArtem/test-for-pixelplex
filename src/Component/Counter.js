import React, { Component } from 'react';



export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number:0 };
        this.step=props.step;
        
        // debugger;
    }

    componentDidMount() {
        this.interval = setInterval(() => {

            this.setState({ number: this.state.number + 1 });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        
        return (
            <div>
                <h4>Counter:</h4>
                <h4>{this.state.number}</h4>

            </div>
        )
    }
}

