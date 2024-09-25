import "./InputSearch.css";

export function InputSearch({ searchValue, setSearchValue, searchById }) {
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log(searchById ? `Buscando por ID: ${searchValue}` : `Buscando por Nombre: ${searchValue}`);
        }
    };

    return (
        <>
            <img
                src="https://raw.githubusercontent.com/ErikaDUARTEm/pokemon/refs/heads/main/src/assets/search.png" // Ruta a tu imagen de lupa
                alt="Buscar"
                className="search-icon"
            />
            <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder="Search" // Placeholder siempre será "Search"
                className="search-input"
            />
        </>
    );
}
