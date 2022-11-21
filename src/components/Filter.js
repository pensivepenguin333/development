import "./Filter.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Filter(props) {

    const curr = props.curr;
    let icon;
    if (props.type.includes(curr)) {
        icon = <CheckBoxIcon className="checkbox" onClick={() => {props.change(curr)}} />
    } else {
        icon = <CheckBoxOutlineBlankIcon className="checkbox" onClick={() => {props.change(curr)}} />
    }

    return  (
        <div className="Filter">
            <div className="checkbox">
                {icon}
            </div>
            <div className="type">
                {curr}
            </div>
        </div>
    )
}