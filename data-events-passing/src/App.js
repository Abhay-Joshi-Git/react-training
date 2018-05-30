import React, { Component } from 'react';

import Employee from './components/employee';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empActiveState : false,
      employees: [
        {
          name: "John",
          active: true
        },
        {
          name: "Kane",
          active: true          
        },
        {
          name: "Peter",
          active: true        
        }
      ]
    };
  }

  render() {
    console.log('rendering app ....');
    return (
      <div className="App">
        <h3>Employees : </h3>
        {this.getEmployees()}
        <div>
          <button onClick={() => this.toggleActiveState()} >Toggle Active State</button>
        </div>
      </div>
    );
  }

  getActiveEmpCount() {
    return this.state.employees.filter(emp => emp.active)
  }

  getEmployees() {
    return (
      <div>
        {
          this.state.employees.map(emp => 
            <Employee
              key={emp.name}
              name={emp.name}
              active={emp.active}
              onActiveToggle={(empName) => this.handleActiveToggle(empName)}
            />
          )
        }
      </div>
    )
  }

  handleActiveToggle(empName) {
    let updatedIndex = -1;
    let updatedEmp = this.state.employees.find((emp, index) => {
      let check = emp.name === empName;
      if (check) {
        updatedIndex = index;
      }
      return check;
    });
    updatedEmp.active = !updatedEmp.active;

    //index updated 
    let result = [
      // 0th to index ...
      ...this.state.employees.slice(0, updatedIndex),
      updatedEmp,
      // index to end of array ...
      this.state.employees.slice(updatedIndex + 1),
    ];
    console.log(updatedEmp, updatedIndex);
    this.setState({
      employees: this.state.employees
    });
  }

  toggleActiveState() {
    console.log('toggling active state');
    this.setState({
      empActiveState: !this.state.empActiveState
    });
  }


}

export default App;
