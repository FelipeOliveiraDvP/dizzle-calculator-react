import React, { Component } from 'react'

class SetSum extends Component {
    state = {
        stackId: null
    }

    // if the enter key is pressed, set the value with the string
    handleKeyDown1 = e => {
        if (e.keyCode === 13) {
            this.setValue(e.target.value1);
        }
    }

    // if the enter key is pressed, set the value with the string
    handleKeyDown2 = e => {
        if (e.keyCode === 13) {
            this.setValue(e.target.value2);
        }
    }

    // Send the values to add method on contract
    setValue = (value1, value2) => {
        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.Addition;
        
        const stackId = contract.methods['add'].cacheSend(this.textInput1.value, this.textInput2.value, {
            from: drizzleState.accounts[0]
        });
        this.setState({ stackId });
    }

    // Get the transaction status
    getTxStatus = () => {
        const { transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[this.state.stackId];
        
        if (!txHash) return null;
        
        return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;        
    }

    render() {
        return (
            <div>
                <input type="number" ref={(input1) => this.textInput1 = input1} onKeyDown={this.handleKeyDown1} />
                <input type="number" ref={(input2) => this.textInput2 = input2} onKeyDown={this.handleKeyDown2} />
                <div>{this.getTxStatus()}</div>
            </div>
        );
    }
}

export default SetSum;