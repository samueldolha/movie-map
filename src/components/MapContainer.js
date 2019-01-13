import React from 'react';
import RangeSlider from './RangeSlider';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.state = {
            year: props.initialYear
        };
    }

    handleYearChange(event) {
        this.setState({ year: event.target.value });
    }

    render() {
        return (
            <RangeSlider
                minimumValue={this.props.minimumYear}
                maximumValue={this.props.maximumYear}
                currentValue={this.state.year}
                onChange={this.handleYearChange}
            />
        );
    }
}
