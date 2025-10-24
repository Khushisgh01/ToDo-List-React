📝 Modern React Todo List Application

This is a responsive and fully functional Todo List application built with **React** and bundled using **Vite**. It features a clean, attractive, modern UI with a focus on simplicity and ease of use, while preserving the core task management functionality.

✨ Features

* **Add New Tasks**: Easily input and add new tasks to the list.
* **Unique IDs**: Each task is assigned a unique ID using the `uuid` package.
* **Task Management Actions**:
    * **Delete Task**: Remove individual tasks from the list.
    * **Uppercase Task**: Convert the text of a single task to uppercase.
    * **Mark As Done**: Mark individual tasks as completed (tasks are visually styled with a strikethrough).
* **Global Actions**:
    * **UPPERCASE ALL**: Convert all tasks in the list to uppercase.
    * **Mark All as Done**: Mark every task in the list as complete.
* **Modern UI**: Implemented an attractive, card-based UI with custom styling (CSS) for a visually appealing user experience.
* **State Management**: Uses React's `useState` hook for efficient local state management of the todo list.

🚀 Technologies Used

* **Framework**: React (using functional components and hooks)
* **Bundler**: Vite
* **Styling**: Pure CSS (Modularized across `index.css` and `App.css`)
* **Dependencies**:
    * `react`: Core React library.
    * `react-dom`: DOM binding for React.
    * `uuid`: For generating universally unique identifiers for tasks.

▶️ Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository or set up the files.**
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application should open in your browser, typically at `http://localhost:5173/`.
