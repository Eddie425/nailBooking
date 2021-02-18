import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class DayPick extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {
    return (
      <DayPicker
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
        canChangeMonth={false}
        // todayButton="Today"
        // modifiers={{
        //   foo: new Date(),
        // }}
      />
    );
  }
}
export default DayPick;
