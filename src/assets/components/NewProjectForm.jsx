import { useState } from "react";

export default function NewProjectForm({ onCancel, onAddNewProject }) {
  const submitHandler = (e) => {
    e.preventDefault();
    onAddNewProject(projectTitle, projectDescription, projectDate);
  };

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDate, setProjectDate] = useState("");

  const changeTitleHandler = (event) => {
    setProjectTitle(event.target.value);
  };
  const changeTitleDescription = (event) => {
    setProjectDescription(event.target.value);
  };
  const changeTitleDate = (event) => {
    setProjectDate(event.target.value);
  };

  return (
    <form className="mt-4 text-left" onSubmit={submitHandler}>
      <div className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          type="submit"
        >
          Save
        </button>
      </div>
      <div >
        <label
          className="text-sm font-bold uppercase text-stone-500"
          htmlFor="title"
        >
          TITLE
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          id="title"
          value={projectTitle}
          onChange={changeTitleHandler}
        ></input>
        <label
          className="text-sm font-bold uppercase text-stone-500"
          htmlFor="description"
        >
          DESCRIPTION
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          id="description"
          value={projectDescription}
          onChange={changeTitleDescription}
        ></input>
        <label
          className="text-sm font-bold uppercase text-stone-500"
          htmlFor="date"
        >
          DUE DATE
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date"
          id="date"
          placeholder="dd.mm.yyyy"
          value={projectDate}
          onChange={changeTitleDate}
        ></input>
      </div>
    </form>
  );
}
