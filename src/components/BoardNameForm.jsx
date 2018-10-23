import React from "react";

class BoardNameForm extends React.Component {
  state = {
    name: this.props.name
  };
  handleInputChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    alert("Submit");
  };
  render() {
    const { name } = this.state;

    return (
      <div className="popover-container">
        <div className="popover-header">
          <span>Rename Board</span>
          <button type="button" className="popover-header-close-btn">
            <span>x</span>
          </button>
        </div>
        <form className="popover-form" onSubmit={this.handleFormSubmit}>
          <label className="d-flex flex-column popover-form__label">
            Name
            <input
              type="text"
              name="name"
              className="popover-form__input"
              onChange={this.handleInputChange}
              value={name}
              autoComplete="off"
            />
          </label>
          <input type="submit" value="Rename" className="popover-form__submit-btn" />
        </form>
      </div>
    );
  }
}

BoardNameForm.defaultProps = {
  name: ""
};

export default BoardNameForm;
