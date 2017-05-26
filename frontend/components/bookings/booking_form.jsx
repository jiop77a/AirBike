import React, { Component } from 'react';
import { merge }  from 'lodash';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    return(
      <ul className="booking-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
   e.preventDefault();
   const bike_id = parseInt(this.props.bikeId)
   const user_id = parseInt(this.props.userId)
   const booking = merge({}, this.state, {bike_id}, {user_id});
   this.props.createBooking({booking}).then(
     () => this.setState({
       start_date: "",
       end_date: ""
     })
   ).then(() => this.props.clearErrors())
   .then(() => alert("You just booked a bike!"));
 }

 render() {
   return (
     <div className="form-and-errors">
       <h1>Book this Bike!</h1>
       <form className="booking-form" onSubmit={this.handleSubmit}>
         <div className="start-date-input">
           <h1>Start Date</h1>
           <input
             type="date"
             value={this.state.start_date}
             onChange={this.update("start_date")}
             />
         </div>
         <div className="end-date-input">
           <h1>End Date</h1>
           <input
             type="date"
             value={this.state.end_date}
             onChange={this.update("end_date")}
             />
         </div>
         <button className="booking-button">Book Now</button>
       </form>
       {this.renderErrors()}
     </div>
   );
 }
}
export default BookingForm;
