import { languages } from "../../../utils/FilterLists";
import { StyledFilters } from "./Filters.Styled";

export const Filters = ({ setSearchFilters, setFavourites }) => {
  const handleFilters = (e) => {
    e.preventDefault();
    setSearchFilters(`?type=&languages=${e.target.value}`);
  };

  const handleFilterFavourites = (e) => {
    e.target.checked ? setFavourites(true) : setFavourites(false);
  };
  return (
    <StyledFilters>
      <label htmlFor='languages'>Choose language:</label>
      <select style={{ fontSize: "20px" }} onChange={handleFilters}>
        {languages.map(({ name, searchQuery }) => (
          <option key={name} name={name} id={name} value={searchQuery}>
            {name}
          </option>
        ))}
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}>
        <label htmlFor='favourites'>Favourites</label>
        <input
          style={{ height: "20px", width: "20px" }}
          type='checkbox'
          name='favourites'
          id='favourites'
          value='true'
          onChange={handleFilterFavourites}
        />
      </div>
    </StyledFilters>
  );
};
