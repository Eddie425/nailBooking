import "react-day-picker/lib/style.css";
import React, { useState } from "react";
import DayPicker from "react-day-picker";

class DayPick extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      thisMonth: new Date().getMonth(),
      disabledDays: [],
    };
  }

  componentDidMount() {
    // let src = "https://nailbooking2021.herokuapp.com/calendarEvent";
    let src = "http://127.0.0.1:5000/calendarEvent";
    fetch(src)
      .then((response) => response.json())
      .then((jsonResponse) => {
        var disabledDaysArray = [{ daysOfWeek: [0, 1] }];
        jsonResponse.forEach((x) => {
          disabledDaysArray.push(new Date(x))
        });
        this.setState({
          disabledDays: disabledDaysArray,
        });
        console.log(this.state.disabledDays);
      });
  }

  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    this.setState({
      selectedDay: modifiers.selected ? undefined : day,
    });
  }

  render() {
    console.log("this.state.thisMonth ==> " + this.state.thisMonth);
    return (
      <DayPicker
        initialMonth={new Date(2021, this.state.thisMonth)}
        disabledDays={this.state.disabledDays}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
        canChangeMonth={false}
        // todayButton="Today"
        // modifiers={{
        //   foo: this.handleTodayClick(new Date()),
        // }}
      />
    );
  }
}
export default DayPick;
