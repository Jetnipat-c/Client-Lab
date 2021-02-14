import StyleWrapper from "../styles/components/homework/styles";
import { useState } from "react";
const Homework = () => {
  const [tasks, setTasks] = useState([
    { id: 1, book: "Do homework", author: "Cheer" },
  ]);

  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [idEdit, setIdEdit] = useState(0);

  const renderTasks = () => {
    if (tasks !== null)
      return tasks.map((task, index) => (
        <li key={index}>
          {index + 1})
          {idEdit !== task.id ? (
            "name : " + task.book + " " + ", author : " + task.author
          ) : (
            <div>
              <input
                type="text"
                name="book"
                value={book}
                onChange={(e) => setBook(e.target.value)}
              />
              <input
                type="text"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
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
    setBook(t.book);
    setAuthor(t.author);
    if (+idEdit === +id) {
      //Press Edit again
      let newTasks = tasks.map((task, index) => {
        if (+task.id === +id) {
          tasks[index].book = book;
          tasks[index].author = author;
        }
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

  const addTask = (book, author) => {
    if (tasks.length < 10 && book != "") {
      setTasks([
        ...tasks,
        { id: tasks[tasks.length - 1].id + 1, book, author },
      ]);

      console.log(tasks);
    } else {
      alert("Empty name or Tasks Name more 10 ");
    }
  };

  return (
    <StyleWrapper>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Book name"
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="text"
        placeholder="author name"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={() => addTask(book, author)} style={{ margin: "20px" }}>
        Add
      </button>
      <ul>{renderTasks()}</ul>
    </StyleWrapper>
  );
};
export default Homework;
