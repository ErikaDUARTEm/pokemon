import { useState } from "react";
import { Button } from "../../atoms/Button";
import "./Search.css";
import { InputSearch } from "../../molecules/input/InputSearch";

export function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchById, setSearchById] = useState(true); // Estado para determinar búsqueda por ID o nombre

    // Función para cambiar el modo de búsqueda
    const toggleSearchMode = (isById) => {
        setSearchById(isById);
    };

    return (
        <div className="input-container">
            <InputSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchById={searchById} // Pasamos el estado al InputSearch para manejar el valor
            />
            <Button toggleSearchMode={toggleSearchMode} searchById={searchById} />
        </div>
    );
}
