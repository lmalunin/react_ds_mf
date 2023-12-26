import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("BOUNDARY", { error, errorInfo });
  }

  render() {
    if (this.state['hasError']) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    /*https://stackoverflow.com/questions/71831601/ts2786-component-cannot-be-used-as-a-jsx-component*/
    return <>{this.props.children}</>;
  }
}
