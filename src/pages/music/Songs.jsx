import { useState } from "react";
import axios from "axios";
import { SearchBar } from "./component/SearchFormComponent";
import { CancionesList } from "./component/songsListComponent";
import "../../assets/css/soung.css";
import imagen from "../../assets/img/logo.png"

export const Songs = () => {
    const [canciones, setCanciones] = useState([]);

    const options = {
        headers: {
            "X-RapidAPI-Key": "74cc465ba6msh43a97f7ec8254d1p1a7472jsnb8440fc2ccda",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
    };

    async function getSong(cancion) {
        try {
            let url =
                "https://spotify23.p.rapidapi.com/search/?q=" +
                cancion +
                "&type=multi&offset=0&limit=10&numberOfTopResults=5";
            let response = await axios.get(url, options);
            setCanciones(response.data.tracks.items);
        } catch (error) {
            console.log("ups... error", error);
        }
    }

    return (
        <div className="content_soung">
            <header className="container-header ">
                <nav className="container-Buscador" >
                    <section className="container-logo">
                        <img src={imagen} alt="Gabriel music" />
                    </section>
                    <section className="buscador">
                        <SearchBar onSearch={getSong} />{" "}
                    </section>
                    <section className="container-perfil">
                        <a href="#">
                            <i className="bi bi-person"></i>
                        </a>
                        
                    </section>

                </nav>

                <main>
                    <CancionesList canciones={canciones} />{" "}
                </main>


                {/* Pasar la función de búsqueda al componente SearchBar */}

                {/* Pasar las canciones al componente CancionesList */}
            </header>
        </div>
    );
};
