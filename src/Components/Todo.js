import React, { useState } from "react";
function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const addList = () => {
    setList((list) => {
      const newList = [...list, todo];
      setTodo("");
      // console.log(newList);
      return newList;
    });
  };

  const Delete = (i) => {
    // console.log(i);
    setList((list) => {
      const newList = [...list];
      newList.splice(i, 1);
      return newList;
    });
  };

  return (
    <>
      <div className="Container">
        <div className="Header">ToDo List</div>
        <input
          type="text"
          placeholder="Enter your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="Add" onClick={addList}>
          Add
        </button>
        {list !== [] &&
          list.map((data, i) => {
            return (
              <p className="List" key={i}>
                <div>{data}</div>
                <button className="Delete" onClick={() => Delete(i)}>
                  Remove
                </button>
              </p>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
