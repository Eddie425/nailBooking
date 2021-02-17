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
        return response.json();
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
      page = <main>Loading...</main>;
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
