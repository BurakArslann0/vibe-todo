function FilterBar({ currentFilter, onFilterChange, onClearCompleted, activeCount }) {
  return (
    <div className="filter-bar">
      <span className="todo-count">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>
      <div className="filter-buttons">
        <button
          type="button"
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      <button
        type="button"
        className="btn-clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default FilterBar;

