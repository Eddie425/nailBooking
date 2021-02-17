import "./main.css";
import React from "react";
import Home from "../pages/home.js";
import PlaceDetail from "../pages/placeDetail.js";

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

  render() {
    let page;
    let statePage = this.state.page;
    if (this.state.data == null) {
      page = <main>
        <div class="booking-form">
						<div class="form-header">
							<h1>Make your reservation</h1>
						</div>
						<form>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date" required/>
										<span class="form-label">Check In</span>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="email" placeholder="Enter your Email"/>
										<span class="form-label">Email</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="tel" placeholder="Enter you Phone"/>
										<span class="form-label">Phone</span>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn">Book Now</button>
							</div>
						</form>
					</div></main>;
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
