import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      variety: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBikes(this.state).then(() =>
      this.setstate({
        city: "",
        variety: "Cruiser"
      })
    );
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const bikeTypes = ["Cruiser", "Mountain", "Road", "Eccentric"];
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <div className="search-bar-city">
          <label>City:
            <input type="text"
              value={this.state.city}
              onChange={this.update('city')}
              className="city-input"
              />
          </label>
        </div>
        <div className="search-bar-variety">
          <select
             value={this.state.variety}
             onChange={this.update('variety')}
             defaultValue="Select Bike Type">
             {bikeTypes.map((type, i) => {
               return <option value={type} key={i}>{type}</option>;
             })}
           </select>
        </div>
        <button className="search-button">Search</button>
      </form>
    );
  }
}

  export default SearchBar;
