import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  /*  on change input */
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  /*  when form is submitted*/
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuid(),
      item: "",
      editItem: false,
    });
  };

  /* for clearing list*/
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  /*delete*/
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };

  /*render*/
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto  col-md-8 mt-4">
            <h3 className="text-capitalize text-center"> to do list input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>

            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
