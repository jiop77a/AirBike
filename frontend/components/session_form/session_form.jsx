import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <nav className="redirect-bar">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </nav>);
    } else {
      return (
        <nav className="redirect-bar">
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </nav>);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const semanticForm = (this.props.formType === 'login' ? 'Log In' : 'Sign Up');

    return (
      <div className="login-form-container">
        <form className="login-form-box">
          <h1>Welcome to AirBike!</h1>
          <br/>
          Please {semanticForm.toLowerCase()}
          {this.renderErrors()}
          <section className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br/>
            <nav className="button-nav">
              <button onClick={this.handleSubmit}>{semanticForm}</button>
              <button className="demo-button" onClick={this.handleSubmit}>Demo Login</button>
            </nav>
          </section>
        </form>
        {this.navLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
