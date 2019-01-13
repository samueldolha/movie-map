import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: props.initialValue
        };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <div>{this.state.value}</div>
                <input
                    type="range"
                    min={this.props.minimumValue}
                    max={this.props.maximumValue}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
