import { useState } from "react";
import "./Button.css";
import { Modal } from "../molecules/modal/Modal";

export function Button({ searchById, toggleSearchMode }) {
    const [isOpen, setIsOpen] = useState(false); // Controla si el modal está abierto

    // Abre/cierra la ventana modal
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    // Determina la clase del botón basado en el estado
    const getButtonClass = () => {
        return searchById ? "button-search button-id" : "button-search button-name"; // Cambia según el modo
    };

    return (
        <>
            <button className={getButtonClass()} onClick={handleButtonClick}>
                {/* Se puede incluir un texto aquí, o dejarlo vacío si solo se usa la imagen */}
            </button>

            {isOpen && (
                <div className="modal">
                    <Modal 
                        toggleSearchMode={(isById) => {
                            toggleSearchMode(isById); // Cambia el modo de búsqueda
                            setIsOpen(false); // Cierra el modal automáticamente
                        }} 
                        closeModal={() => setIsOpen(false)} 
                        selectedOption={searchById ? "id" : "name"} // Pasa la opción seleccionada
                    />
                </div>
            )}
        </>
    );
}
