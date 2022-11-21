import "./Song.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Song(props) {

    const song = props.song;
    let icon;
    if (props.fav.includes(song)) {
        icon = <FavoriteIcon className="icon" onClick={() => {props.changeFav(song)}} />
    } else {
        icon = <FavoriteBorderIcon className="icon" onClick={() => {props.changeFav(song)}} />
    }

    return  (
        <div className="Song">
            <img src={song.cover}/>
            <div className="info">
                <div className="name">
                    {song.name}
                </div>
                <div className="artist">
                    {song.artist}
                </div>
            </div>
            <div className="length">
                {Math.floor(song.length/60) + ":" + (song.length % 60)} 
            </div>
            <div className="favorite">
                {icon}
            </div>
        </div>
    )
}