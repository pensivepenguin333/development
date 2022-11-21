import "./Options.css";
import Filter from "./Filter";
import Sort from "./Sort";
import songData from "../assets/song-data.json";

export default function Options(props) {
    const genres = ["Electronic", "Indie", "Pop"]
    const artists = ["Billie Eilish", "Hippo Campus", "ODESZA", "Taylor Swift"]
    const sorting = ["A-Z: Song Name", "Z-A: Song Name", "Duration: Low to High", "Duration: High to Low"]

    let buttonText;
    // user is viewing favorites
    if (props.liked) {
        buttonText = "Browse Songs"
    // user is viewing liked songs
    } else {
        buttonText = "View Favorites"
    }

    // total duration of liked songs (seconds)
    let time = 0
    for (let i = 0; i < props.fav.length; i++) {  
        time += props.fav[i].length;  
    }

    // reformating total seconds to the form min:sec
    let total = 0;
    if ((time % 60) > 9) {
        total = Math.floor(time/60) + ":" + (time % 60)
    } else {
        total = Math.floor(time/60) + ":0" + (time % 60)
    }

    return  (
        <div className="Options">
            <div className="section">
                Filter
            </div>
            <div className="title">
                GENRE
            </div>

            <div className="selection">
                {genres.map((currGenre, index) => ( 
                <Filter curr={currGenre} type={props.genre} change={props.changeGenre}/>
                ))}
            </div>

            <div className="title">
                ARTIST
            </div>

            <div className="selection">
                {artists.map((currArtist, index) => ( 
                <Filter curr={currArtist} type={props.artist} change={props.changeArtist}/>
                ))}
            </div>

            <div className="section">
                Sort
            </div>

            <div className="selection">
                {sorting.map((currSort, index) => ( 
                <Sort currSort={currSort} sort={props.sort} changeSort={props.changeSort}/>
                ))}
            </div>

            <div className="favorites">
                <button className="liked" onClick={() => {props.changeLiked()}}>
                    {buttonText}
                </button>
                (Duration: {total})
            </div>

            <div className="resetting">
                <button className="reset" onClick={() => {
                    props.sortDisplay(songData, "A-Z: Song Name")
                    props.updateGenre([])
                    props.updateArtist([])
                    props.updateSort("A-Z: Song Name")}}>
                    Reset Filters/Sort
                </button>
            </div>
        </div>
    )
}