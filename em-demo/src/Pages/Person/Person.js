import React, { Component } from 'react';

export class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Dragosh',
      surname: 'BBB',
      ager: 31,
      skills: ['html', 'js']
    };
  }
  removeSkill = (skillIndex) => {
    let arr = [...this.state.skills.splice(0, skillIndex), ...this.state.skills.splice(skillIndex + 1)];
    this.setState({
      skills: arr
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Person ({this.state.name + ' ' + this.state.surname})</h1>
        {
          this.state.skills.length ?
            <ul>
              {
                this.state.skills.map((skill, i) => {
                  return (
                    <li key={`skill-${i}`}>{skill}
                      <button onClick={() => { this.removeSkill(i) }}>-</button>
                    </li>
                  );
                })
              }
            </ul> :
            <p>N-are</p>
        }
      </div>
    );
  }
}