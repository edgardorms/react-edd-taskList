import { useState } from "react";

export default function TaskForm({ createTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({title, description});

    setTitle("");
    setDescription("");
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Write yor task!"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        ></input>
        <textarea
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}
