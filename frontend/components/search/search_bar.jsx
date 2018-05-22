import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "San Francisco",
      variety: "Select Bike Type"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updateFilter('city', this.state.city);
    this.props.updateFilter('variety', this.state.variety);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const bikeTypes = ["Select Bike Type", "All", "Cruiser", "Mountain", "Road", "Eccentric"];
    const cities = ["San Francisco", "Oakland", "Berkeley"];

    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <label className="city-label">City:</label>
        <div className="search-bar-city">

          <select
              value={this.state.city}
              onChange={this.update('city')}>

              {cities.map((city, i) => {
                return <option value={city} key={i}>{city}</option>;
            })}
          </select>
        </div>
        <div className="search-bar-variety">
          <select
             value={this.state.variety}
             onChange={this.update('variety')}>
             {bikeTypes.map((type, i) => {
               return <option value={type} key={i}
                 disabled={type==="Select Bike Type" ? "disabled" : ""}>

                 {type}
               </option>;
             })}
           </select>
        </div>
        <button className="promo-button">Search</button>
      </form>
    );
  }
}

  export default SearchBar;
