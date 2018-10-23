import React from "react";
import PropTypes from "prop-types";

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
    this.props.updateName(this.state.name);
  };
  componentDidMount() {
    this.focusInput();
  }
  focusInput = () => {
    requestAnimationFrame(() => {
      if (this.inputRef) {
        this.inputRef.focus();
      }
    });
  };
  setInputRef = input => {
    this.inputRef = input;
  };
  render() {
    const { name } = this.state;

    return (
      <div className="popover-container">
        <div className="popover-header">
          <span>Rename Board</span>
          <button
            type="button"
            className="popover-header-close-btn"
            onClick={this.props.closeForm}
          >
            <span>x</span>
          </button>
        </div>
        <form className="popover-form" onSubmit={this.handleFormSubmit}>
          <label className="d-flex flex-column popover-form__label">
            Name
            <input
              ref={this.setInputRef}
              type="text"
              name="name"
              className="popover-form__input"
              onChange={this.handleInputChange}
              value={name}
              autoComplete="off"
            />
          </label>
          <input
            type="submit"
            value="Rename"
            className="popover-form__submit-btn"
          />
        </form>
      </div>
    );
  }
}

BoardNameForm.defaultProps = {
  name: ""
};

BoardNameForm.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired
};

export default BoardNameForm;
