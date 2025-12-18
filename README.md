# Vibe Todo - Todo List App

A clean, minimal todo list application built with React and Vite. Features a modern UI with full CRUD functionality and local storage persistence.

## Features

- ✅ **Add Todo**: Type a task and press Enter to add it to your list
- ✏️ **Edit Todo**: Double-click any todo to edit it inline with Save/Cancel options
- 🗑️ **Delete Todo**: Click the × button to remove a todo
- ☑️ **Toggle Complete**: Click the checkbox to mark todos as complete/incomplete
- 💾 **Persistent Storage**: All todos are saved to localStorage and persist after page refresh
- 🔍 **Filters**: View All, Active, or Completed todos
- 🧹 **Clear Completed**: Remove all completed todos with one click

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Plain CSS** - No external UI libraries

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx    # Form for adding new todos
│   ├── TodoItem.jsx    # Individual todo item with edit/delete/toggle
│   ├── TodoList.jsx    # List container for todos
│   └── FilterBar.jsx   # Filter buttons and clear completed
├── App.jsx             # Main app component with state management
├── App.css             # Component styles
└── index.css           # Global styles
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Adding Todos**: Type your task in the input field and press Enter
2. **Completing Todos**: Click the checkbox next to a todo to mark it complete
3. **Editing Todos**: Double-click on any todo text to enter edit mode
   - Press Enter or click Save to save changes
   - Press Escape or click Cancel to discard changes
4. **Deleting Todos**: Click the × button on the right side of any todo
5. **Filtering**: Use the filter buttons (All/Active/Completed) to view different subsets
6. **Clearing Completed**: Click "Clear completed" to remove all completed todos at once

## Code Features

- **Component-based Architecture**: Split into small, reusable components
- **React Hooks**: Uses useState and useEffect for state management
- **LocalStorage Integration**: Automatic persistence of todos
- **Responsive Design**: Mobile-friendly layout that works on all screen sizes
- **Clean Code**: Readable, maintainable code with clear separation of concerns

## Browser Support

Works in all modern browsers that support ES6+ and localStorage.
