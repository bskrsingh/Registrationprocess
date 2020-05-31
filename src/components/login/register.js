import React, { Component } from "react";
import loginImg from "../../logo.svg";

export class Register extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onChangeuserLog = this.onChangeuserLog.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      userLog : '',
      username: '',
      email: '',
      password: ''
  };
  }

  // Form Events
  onChangeuserLog(e) {
    this.setState({ userLog: e.target.value });
}
  onChangeName(e) {
    this.setState({ username: e.target.value });
}

onChangeEmail(e) {
    this.setState({ email: e.target.value });
}

onChangePassword(e) {
    this.setState({ password: e.target.value });
}

onSubmit(e) {
    e.preventDefault();

    this.setState({
      userLog: '',
      username: '',
        email: '',
        password: ''
    });
}

 // React Life Cycle
 componentDidMount() {
  this.userData = JSON.parse(localStorage.getItem('user'));

  if (localStorage.getItem('user')) {
      this.setState({
        userLog: this.userData.userLog,
        username: this.userData.username,
        email: this.userData.email,
        password: this.userData.password
      });
  } else {
      this.setState({
        userLog: '',
        username: '',
        email: '',
        passworrd: ''
      });
  }
}

componentWillUpdate(nextProps, nextState) {
  debugger
  localStorage.setItem('user', JSON.stringify(nextState));
}

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form onSubmit={this.onSubmit}>
          <div className="form">
            <div className="form-group">
              <label htmlFor="selectuser">SelectUser</label>
              <select value={this.state.userLog} onChange={this.onChangeuserLog}>
                <option>---select user---</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChangeName} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onChangeEmail} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
            </div>
          </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
        </form>
      </div>
      </div>
    );
  }
}