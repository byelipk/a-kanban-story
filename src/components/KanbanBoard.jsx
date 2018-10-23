import React from "react";
import Popover from "./Popover";
import BoardNameForm from "./BoardNameForm";

class KanbanBoard extends React.Component {
  state = {
    name: "Untitled board",
    popoverVisible: false
  };
  handleButtonClick = () => {
    this.setState({
      popoverVisible: !this.state.popoverVisible
    });
  };
  handleUpdateName = newName => {
    this.setState({
      name: newName,
      popoverVisible: false
    });
  };
  render() {
    const { name, popoverVisible } = this.state;

    return (
      <div className="board">
        <div className="board-header">
          <button
            type="button"
            className="board-header-btn"
            onClick={this.handleButtonClick}
          >
            <span className="board-name">{name}</span>
          </button>
          {popoverVisible ? (
            <Popover>
              <BoardNameForm
                name={name}
                updateName={this.handleUpdateName}
                closeForm={this.handleButtonClick}
              />
            </Popover>
          ) : null}
        </div>
      </div>
    );
  }
}

export default KanbanBoard;
