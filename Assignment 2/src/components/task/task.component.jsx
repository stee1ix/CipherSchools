import React from 'react';
import './task.style.css';
import Delete from '../../assets/delete.svg';
import Check from '../../assets/check.svg';

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            check: false,
            deleted: false
        };
    }

    handleDone = () => {
        this.setState({
            check: !this.state.check
        });
    };

    handleDelete = () => {
        this.setState({
            deleted: true
        });
    };

    render() {
        return (
            <div>
              { this.state.deleted ? (
                ""
                ) : (
                <div className="task-main">
                  <h2 className={ this.state.check ? "done-check" : "" }>{ this.props.index + 1 }. { this.props.taskNote }</h2>
                  { /*34 chars max input*/ }
                  <div className="buttons">
                    <img
                         className="check"
                         onClick={ this.handleDone }
                         src={ Check }
                         alt="check" />
                    <img
                         className="delete"
                         onClick={ this.handleDelete }
                         src={ Delete }
                         alt="delete" />
                  </div>
                </div>
                ) }
            </div>
        );
    }
}

export default Task;