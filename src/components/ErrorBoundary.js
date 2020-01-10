import React, { Component, Fragment } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    return (
      <Fragment>
        {this.hasError ? <h1>Oops..That is not good!</h1> : this.props.children}
      </Fragment>
    );
  }
}

export default ErrorBoundary;
