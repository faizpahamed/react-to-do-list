import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    const btnClass = editItem
      ? "btn btn-block btn-success my-4"
      : "btn btn-block btn-primary my-4";
    const btnText = editItem ? "Update" : "Add Item";
    console.log(editItem);
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend ">
              <div className="input-gruop-text bg-primary text-white ">
                <span className="m-2">
                  <i className="fas fa-book pt-2"></i>
                </span>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              value={item}
              onChange={handleChange}
              placeholder="Add Todo Item here"
            />
          </div>
          <button type="submit" className={btnClass}>
            {btnText}
          </button>
        </form>
      </div>
    );
  }
}
