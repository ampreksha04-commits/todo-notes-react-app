const filters = ['All', 'Pending', 'Completed'];

const TodoFilter = ({ current, onChange }) => (
  <div className="filters">
    {filters.map((name) => (
      <button
        key={name}
        className={current === name ? 'chip active' : 'chip'}
        onClick={() => onChange(name)}
      >
        {name}
      </button>
    ))}
  </div>
);

export default TodoFilter;
