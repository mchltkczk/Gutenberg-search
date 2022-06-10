import { StyledSearch } from "./Search.Styled";

export const Search = ({ setSearchFilters }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    setSearchFilters(`?search=${e.target.name.value}`);
  };

  return (
    <StyledSearch onSubmit={handleSearch}>
      <label htmlFor='search'></label>
      <input
        style={{ padding: "10px", fontSize: "20px", border: "none" }}
        type='text'
        name='search'
        id='name'
        placeholder='Title or book author...'></input>
    </StyledSearch>
  );
};
