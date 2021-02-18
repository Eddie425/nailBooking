import "./main.css";
import "./style.css";
import React, { useState } from "react";
import Home from "../pages/home.js";
import PlaceDetail from "../pages/placeDetail.js";
import DayPick from "../dateTimePicker/dayPick.js";


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
                    <DayPick />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="name"
                      placeholder="姓名"
                    />
                    {/* <span className="form-label">姓名</span> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="電話"
                    />
                    {/* <span className="form-label">電話</span> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="birthday"
                      placeholder="生日 : yyyymmdd"
                    />
                    {/* <span className="form-label">生日</span> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="服務項目"
                    />
                    {/* <span className="form-label">服務項目</span> */}
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
