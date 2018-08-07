import React from 'react';

const asyncComponent = loadComponent => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { Component: null };
    }

    componentWillMount() {
      loadComponent().then((componentModule) => {
        this.setState({ Component: componentModule.default });
      });
    }

    render() {
      const { Component } = this.state;
      return Component && <Component {...this.props} />;
    }
  }
);

export default asyncComponent;
