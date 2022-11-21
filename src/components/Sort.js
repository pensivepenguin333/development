import "./Sort.css";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Sort(props) {

    const currSort = props.currSort;
    let icon;
    if (props.sort === currSort) {
        icon = <RadioButtonCheckedIcon onClick={() => {props.changeSort(currSort)}} />
    } else {
        icon = <RadioButtonUncheckedIcon onClick={() => {props.changeSort(currSort)}} />
    }

    return  (
        <div className="Filter">
            <div className="checkbox">
                {icon}
            </div>
            <div className="type">
                {currSort}
            </div>
        </div>
    )
}