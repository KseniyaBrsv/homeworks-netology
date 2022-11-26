import '../App.css';

export const Toolbar = (props) => {
  const { filters, onSelectFilter } = props;
  return (filters.map((el) => {
    return (
      <div className="but">
        <button key={el.id}
                type="button"
                onClick={() => onSelectFilter(el.name)}>
          {el.name}
        </button>
      </div>
    )
  }))
}


