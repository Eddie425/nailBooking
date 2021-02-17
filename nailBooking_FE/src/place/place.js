// import React from 'react';
// import "./place.css";

// class Place extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     setPage(e){
//         let number = e.currentTarget.getAttribute("data-number");
//         this.props.setPage(number);
//     }
    
//     render() {
//         let placeData = this.props.place.data;
//         let place = <div onClick={this.setPage.bind(this)}
//             key={placeData.SERIAL_NO} className="place">
//         <img className="picture" src={this.props.place.imgSrcs} />
//         <div className="title">{placeData.stitle}</div>
//         <div className="category">{placeData.CAT2}</div>
//     </div>;
//         return <>{place}</>;
//     }
// }
 
// export default Place;