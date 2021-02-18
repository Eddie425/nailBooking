import "react-day-picker/lib/style.css";
import React, { useState } from "react";
import DayPicker from "react-day-picker";

class DayPick extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      thisMonth: new Date().getMonth() + 1,
    };
  }

  componentDidMount() {
    let src = "https://nailbooking2021.herokuapp.com/calendarEvent";
    fetch(src)
      .then((response) => {
        return response;
      })
      .then((data) => {
        console.log(data);
        // this.setState({
        //   data: data.result.results,
        // });
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
    const disabledDays = [
      new Date(2021, 2, 27),
      new Date(2021, 2, 28),
      {
        after: new Date(2021, 2, 10),
        before: new Date(2021, 2, 17),
      },
      { daysOfWeek: [0, 1] },
    ];
    console.log(this.state.thisMonth);

    return (
      <DayPicker
        initialMonth={new Date(2021, this.state.thisMonth)}
        disabledDays={disabledDays}
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
