import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputEmail = React.createRef();
    this.state = {
      name: "",
      email: "",
      isActive: true,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputName.current.value;
    const email = this.inputEmail.current.value;
    console.log(`${name} ${email}`);
  };

  inputChangedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <form>
          <h4>Form</h4>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              placeholder="Your Name"
              value={this.state.name}
              name="name"
              ref={this.inputName}
              onChange={this.inputChangedHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              placeholder="Your Email"
              name="email"
              value={this.state.email}
              ref={this.inputEmail}
              onChange={this.inputChangedHandler}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}
