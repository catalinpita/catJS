import React, {  Component } from 'react';

export class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Dragosh',
      surname: 'BBB',
      ager: 31,
      skills: ['html', 'js']
    }
  }
  render() {
    return (
      <div className="container">

      </div>
    );
  }
}