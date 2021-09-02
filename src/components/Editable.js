import React, { Component } from "react";

class Editable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      text: "",
      editing: true,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  async handleBlur(e) {
    const container = e.target.parentElement;
    console.log(container);
    if (!this.isBlank(container)) {
      this.save(container.firstChild);
      this.lock();
    }
  }

  save(input) {
    this.setState({
      text: input.value,
    });
  }

  lock() {
    this.setState({
      editing: false,
    });
  }

  handleClick(e) {
    this.setState({
      editing: true,
    });
  }

  handleChange(event) {
    this.isBlank(event.target.parentElement);
    this.save(event.target);
  }

  handleDel() {
    this.props.handleDel(this.state.id);
  }

  isBlank(container) {
    console.log(container.firstChild);
    if (container.firstChild.value === "") {
      container.lastChild.classList.add("error-active");
      return true;
    } else {
      container.lastChild.classList.remove("error-active");
    }
  }

  render() {
    const { editing, text } = this.state;
    if (editing) {
      return (
        <div className="editable">
          <input
            type="text"
            autoFocus
            required
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={text}
          />
          {this.props.hasDelete && (
            <button onMouseDown={this.handleDel}>🗑</button>
          )}
          <span>Don't leave blank plz</span>
        </div>
      );
    } else {
      return (
        <div className="editable" onClick={this.handleClick}>
          <this.props.tag>{text}</this.props.tag>
        </div>
      );
    }
  }
}

export default Editable;
