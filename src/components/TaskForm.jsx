import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="p-10">
      <h1 className="text-2xl font-bold text-white">Create your task!</h1>
        <input
          placeholder="Write yor task!"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-100 p-3 w-full mb-2"
          autoFocus
        ></input>
        <textarea
          placeholder="Describe your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-100 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-400">Save</button>
      </form>
    </div>
  );
}
