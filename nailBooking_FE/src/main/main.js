import "./main.css";
import "./style.css";
import 'react-widgets/dist/css/react-widgets.css';
import React, { useState } from "react";
import { render } from "react-dom";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import { DateTimePicker } from "react-widgets";
import Home from "../pages/home.js";
import PlaceDetail from "../pages/placeDetail.js";

function DateTimePick() {
  Moment.locale("tw");
  momentLocalizer();

  return <DateTimePicker />;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      page: "home",
    };
  }
  setPage(number) {
    this.setState({
      page: number,
    });
  }
  componentDidMount() {
    // let src = "https://nailbooking2021.herokuapp.com/calendarEvent";
    // fetch(src)
    //   .then((response) => {
    //     return response;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     // this.setState({
    //     //   data: data.result.results,
    //     // });
    //   });
  }

  render() {
    let page;
    let statePage = this.state.page;
    if (this.state.data == null) {
      page = (
        <main>
          <div className="booking-form">
            <div className="form-header">
              <h1>Make your reservation</h1>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <DateTimePick />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your Email"
                    />
                    <span className="form-label">Email</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Enter you Phone"
                    />
                    <span className="form-label">Phone</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your Email"
                    />
                    <span className="form-label">Email</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Enter you Phone"
                    />
                    <span className="form-label">Phone</span>
                  </div>
                </div>
              </div>
              <div className="form-btn">
                <button className="submit-btn">Book Now</button>
              </div>
            </form>
          </div>
        </main>
      );
    } else {
      if (statePage == "home") {
        page = (
          <Home
            data={this.state.data}
            filter={this.props.filter}
            setPage={this.setPage.bind(this)}
          />
        );
      } else {
        let detailData = this.state.data.find((item) => {
          return item.SERIAL_NO == statePage;
        });
        page = <PlaceDetail data={detailData} />;
      }
    }
    return (
      <>
        {page}
      </>
    );
  }
}

export default Main;
