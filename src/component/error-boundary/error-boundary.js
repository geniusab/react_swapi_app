import {Component} from "react";
import ErrorIndicator from "../error-indicator";
import React from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    return this.props.children;
  }

}