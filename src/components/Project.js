import React from "react";

function Project() {
    return (
      <div className="my-2.5 m-auto w-3/5 project" id="project">
        <p className="font-semibold text-left">Project</p>
        <hr className="bg-gray-300 h-0.5 my-2.5"></hr>
        <div className="flex sm:max-md:flex-col gap-5 items-start mt-5 shadow-lg rounded-2xl px-5 py-5">
          <div className="w-full h-full">
            <div className="flex items-center">
              <p className="font-semibold text-left w-full h-full">
                To do list
              </p>
              <a
                href="https://lavymeng.github.io/my-todo-list/"
                className="hover:bg-sky-300 hover:rounded-2xl"
              >
                <img
                  src={require("../image/github.png")}
                  alt="github pic"
                  className="w-10 h-10"
                ></img>
              </a>
            </div>
            <p className="text-left mt-5">
              This Todo-List application, you add, edit, delete tasks and filter
              the tasks.
            </p>
          </div>
          <div className="w-full h-full sm:max-md:flex sm:max-md:justify-center">
            <img
              src={require("../image/todo-list.png")}
              alt="todolist pic"
              className="object-contain h-36 float-right"
            />
          </div>
        </div>
      </div>
    );
}

export default Project;
