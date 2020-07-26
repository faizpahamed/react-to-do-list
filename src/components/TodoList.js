import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group">
        <h3 className="text-capitalize text-center">To Do List</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              info={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></TodoItem>
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block  text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
