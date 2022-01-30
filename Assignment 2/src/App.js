import React from 'react';
import './App.css';
import Task from './components/task/task.component';
import Arrow from './assets/arrow.svg';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            task: [],
            inputState: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            inputState: event.target.value
        });
    };

    handleSubmit = () => {
        const tempArray = this.state.task;
        tempArray.push(this.state.inputState);
        this.setState({
            task: tempArray
        });
    };

    render() {
        return (
            <div className="app">
              { /*<h1>Todo List</h1>*/ }
              <div className="glass">
                <div className="header">
                  <h1 className="title">Task Manager</h1>
                  <div className="task-enter">
                    <div className="credential-main">
                      <div className="form">
                        <input
                               required
                               autoComplete="off"
                               spellCheck="false"
                               type="text"
                               onChange={ this.handleChange } />
                        <label
                               htmlFor="input-box"
                               className="label-name">
                          <span className="content-name">Enter a task</span>
                        </label>
                      </div>
                    </div>
                    <img
                         onClick={ this.handleSubmit }
                         className="arrow"
                         src={ Arrow }
                         alt="" />
                  </div>
                </div>
                <div className="tasks">
                  { this.state.task.map((item, index) => (
                        <Task
                              key={ index }
                              index={ index }
                              taskNote={ item } />
                    )) }
                </div>
              </div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
            </div>
        );
    }
}

export default App;