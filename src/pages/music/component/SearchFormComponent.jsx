import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
    const [cancion, setCancion] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        if (cancion.trim() === "") {
            alert("Ingresa una canción");
            return;
        }
        onSearch(cancion); // Llamar al callback `onSearch` pasando la canción
        setCancion(''); // Limpiar el campo de búsqueda
    }

    return (
        <form onSubmit={handleSearch}>
            <i className="bi bi-search"></i>
            <input
                type="text"
                placeholder="Search"
                value={cancion}
                onChange={e => setCancion(e.target.value)}
            />
            
           
        </form>
    );
}
