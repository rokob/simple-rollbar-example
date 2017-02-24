import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
		this.bar = this.bar.bind(this);
  }

  bar() {
    baz();
  }

  render() {
    return (
      <div className="app" onClick={this.bar}>
        {this.state.test}
      </div>
    );
  }
}
