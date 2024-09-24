import "./InputSearch.css";
export function InputSearch({ searchValue, setSearchValue }) {

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
      };
      console.log(setSearchValue)
  return (
    <>
        <img
          src="./src/assets/search.png" // Ruta a tu imagen de lupa
          alt="Buscar"
          className="search-icon"
        />
        <input
          type="text"
          value={searchValue}
          onChange={(e)=>{handleSearch(e)}}
          placeholder="Search"
          className="search-input"
        />
    </>
  );
}
