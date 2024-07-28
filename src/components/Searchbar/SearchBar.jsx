import { useState } from 'react'
import './search.scss'

const types = ["Buy", "Rent"]

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  const switchType = (val) => {
    setQuery((prev)=> ({...prev, type: val}))
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button key={index}
            onClick={() => {
              switchType(type);
            }} className={query.type === type ? "active" : ""}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max-Price"
        />
        <button type="submit">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar