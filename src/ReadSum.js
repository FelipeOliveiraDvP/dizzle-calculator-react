import React, { Component } from 'react';

class ReadSum extends Component {
    state = { dataKey: null };

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.Addition;
        // Select the sum variable on contract
        var dataKey = contract.methods['sum'].cacheCall();
        this.setState({ dataKey });
    }

    render() {
        // Get the contract state
        const { Addition } = this.props.drizzleState.contracts;

        // Get the variable we want
        const sum = Addition.sum[this.state.dataKey];

        return <div>Sum: {sum && sum.value}</div>;
    }
}

export default ReadSum;