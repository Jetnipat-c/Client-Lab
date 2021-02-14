import Head from "next/head";
import styles from "../styles/Home.module.css";
import StyleWrapper from "../styles/components/index/styles";
import { useState } from "react";
const Todo = ({ avatar_url, login }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Do homework" },
    { id: 2, name: "Read book" },
  ]);

  const [name, setName] = useState("");

  const [idEdit, setIdEdit] = useState(0);

  const renderTasks = () => {
    if (tasks !== null)
      return tasks.map((task, index) => (
        <li key={index}>
          {index + 1})
          {idEdit !== task.id ? (
            task.name
          ) : (
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <button className="btn" onClick={() => editTask(task.id)}>
            Edit
          </button>
          <button className="btn" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ));
  };

  const editTask = (id) => {
    setIdEdit(id);
    let t = tasks.find((task) => +task.id === +id);
    setName(t.name);
    if (+idEdit === +id) {
      //Press Edit again
      let newTasks = tasks.map((task, index) => {
        if (+task.id === +id) tasks[index].name = name;
        return task;
      });
      setTasks(newTasks);
      setIdEdit(0);
    }
  };

  const deleteTask = (id) => {
    console.log("delete id: ", id);
    let newTasks = tasks.filter((task) => task.id !== +id);
    setTasks(newTasks);
  };

  const addTask = (name) => {
    if (tasks.length < 10 && name != "") {
      setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name }]);
      console.log(tasks);
    } else {
      alert("Empty name or Tasks Name more 10 ");
    }
  };

  return (
    <StyleWrapper>
      <div>
        <h1>
          <img src={avatar_url} width="80" />
          Todo for <span>{login} </span>
        </h1>
      </div>
      <h1>Todo</h1>
      <input
        type="text"
        name="addTask"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => addTask(name)} style={{ margin: "20px" }}>
        Add
      </button>
      <ul>{renderTasks()}</ul>
    </StyleWrapper>
  );
};

Todo.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/users/wwarodom");
  const json = await res.json();
  return { login: json.login, avatar_url: json.avatar_url };
};

export default Todo;
