import React from 'react';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    console.log('rendering employee');
    return (
      <div onClick={() => this.props.onActiveToggle(this.props.name)}>
        {this.props.name}
        <div>
          Active - {this.props.active ? 'Yes' : 'No'}
        </div>
      </div>
    );
  }
}
 

export default Employee;
