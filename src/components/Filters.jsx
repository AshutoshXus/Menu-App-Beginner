function Filters({ filterData }) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={() => filterData('All')}>
        All
      </button>
      <button className="btn" onClick={() => filterData('Breakfast')}>
        Brakfast
      </button>
      <button className="btn" onClick={() => filterData('Lunch')}>
        Lunch
      </button>
      <button className="btn" onClick={() => filterData('Shakes')}>
        Shakes
      </button>
    </div>
  )
}
export default Filters
