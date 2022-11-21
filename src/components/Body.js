import "./Body.css";
import { useState } from "react";
import songData from "../assets/song-data.json";
import Song from "./Song";
import Options from "./Options";

export default function Body() {
    // keep track of liked songs
    const [fav, updateFav] = useState([]);
    // keep track of genres checked
    const [genre, updateGenre] = useState([]);
    // keep track of artists checked
    const [artist, updateArtist] = useState([]);
    // keep track of filtered songs
    const [display, updateDisplay] = useState(songData);
    // keep track of sorting method
    const [sort, updateSort] = useState("A-Z: Song Name");
    // keep track of whether viewing liked songs is selected
    // true => view liked songs, false => browse songs
    const [liked, updateLiked] = useState(false);

    // updates the state of liked songs
    const changeFav = (song) => {
        if (fav.includes(song)) {
            updateFav(fav.filter(s => s.name !== song.name))
        } else {
            updateFav([...fav, song])
        }
    }

    // updates the state of filtered genres
    const changeGenre = (type) => {
        if (genre.includes(type)) {
            updateGenre(genre.filter(x => x !== type))
            removeFilter(type, null)
        } else {
            updateGenre([...genre, type])
            addFilter(type, null)
        }
    }

    // updates the state of filtered artists
    const changeArtist = (type) => {
        if (artist.includes(type)) {
            updateArtist(artist.filter(x => x !== type))
            removeFilter(null, type)
        } else {
            updateArtist([...artist, type])
            addFilter(null, type)
        }
    }

    // updates the state of the sorting method
    const changeSort = (type) => {
        sortDisplay(display, type)
        updateSort(type)
    }

    // checking a new filter
    const addFilter = (addG, addA) => {
        let filtered = songData;

        if (addA !== null || artist.length !== 0) {
            filtered = songData.filter(x => artist.includes(x.artist) || x.artist === addA)
        }

        if (addG !== null || genre.length !== 0) {
            filtered = filtered.filter(x => genre.includes(x.genre) || x.genre === addG)
        }
        sortDisplay(filtered, sort)
    }

    // unchecking an existing filter
    const removeFilter = (remG, remA) => {
        // removing the only filter that existed, equivalent to resetting
        if (artist.length + genre.length === 1) {
            sortDisplay(songData, sort)
        } else {
            let filtered = display;
            if (remA !== null) {
                if (artist.length === 1) {
                    filtered = songData.filter(x => genre.includes(x.genre))
                } else {
                    filtered = filtered.filter(x => artist.includes(x.artist) && x.artist !== remA)
                }
            }
    
            if (remG !== null) {
                filtered = filtered.filter(x => genre.includes(x.genre) && x.genre !== remG)
            }
            sortDisplay(filtered, sort)
        }
    }

    // sorts the songs that will be displayed
    const sortDisplay = (songs, type) => {
        if (type === "A-Z: Song Name") {
            updateDisplay(songs.sort((a, b) => a.name.localeCompare(b.name)))
        } else if (type === "Z-A: Song Name") {
            updateDisplay(songs.sort((a, b) => b.name.localeCompare(a.name)))
        } else if (type === "Duration: Low to High") {
            updateDisplay(songs.sort((a, b) => a.length - b.length))
        } else {
            updateDisplay(songs.sort((a, b) => b.length - a.length))
        }
    }
    
    // updates the state of viewing favorites
    const changeLiked = () => {
        // selected "browse songs"
        if (liked) {
            addFilter(null, null)
        // selected "view liked"
        } else {
            sortDisplay(fav, sort)
        }
        updateLiked(!liked)
    }

    return (
    <div className="Body">
        <div className='options'>
            <Options genre={genre} changeGenre={changeGenre} artist={artist} 
            changeArtist={changeArtist} sort={sort} changeSort={changeSort} 
            liked={liked} changeLiked={changeLiked} sortDisplay={sortDisplay} 
            updateGenre={updateGenre} updateArtist={updateArtist} updateSort={updateSort}
            fav={fav}/>
        </div>
        
        <div className='list'>
            <div className="songs">
                {display.map((song, index) => ( 
                <Song song={song} fav={fav} changeFav={changeFav}/>
                ))}
            </div>
        </div>

        {/* <div>
        {fav.map((s, index) => (
            <p>{s}</p>
        ))}
        </div> */}
    </div>
    );
}