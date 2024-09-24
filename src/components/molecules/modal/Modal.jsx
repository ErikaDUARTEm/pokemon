import "./Modal.css";

export function Modal({ toggleSearchMode, closeModal, selectedOption }) {
    const handleChange = (option) => {
        toggleSearchMode(option === "id"); // Cambia el modo de búsqueda
        closeModal(); // Cierra el modal automáticamente
    };

    return (
        <div className="modal">
            <p>Sort by:</p>
            <div className="container-inputs">
                <label>
                    <input
                        type="radio"
                        name="searchOption"
                        value="id"
                        checked={selectedOption === "id"} // Verifica el estado de la opción seleccionada
                        onChange={() => handleChange("id")} // Cierra el modal al seleccionar
                    />
                    Number
                </label>

                <label>
                    <input
                        type="radio"
                        name="searchOption"
                        value="name"
                        checked={selectedOption === "name"} // Verifica el estado de la opción seleccionada
                        onChange={() => handleChange("name")} // Cierra el modal al seleccionar
                    />
                    Name
                </label>
            </div>
        </div>
    );
}
