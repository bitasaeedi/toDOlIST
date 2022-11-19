import React, {useState, useEffect} from 'react';

export default function Header(props) {
    //for handleShift(new or edit)
    let [editFlag,setEditFlag]=useState(false);
    //value of input
    let [text, setText] = useState("");
    ////////// for edit text
    useEffect(() => {
        if (props.editText !== "") {
            setText(props.editText)
            setEditFlag(true);
        }
    }, [props.editText])

    function handleInput(input) {
        setText(input.target.value);
    }
    function handleEnter(p) {

        if (p.key === "Shift"&&!editFlag) {
            props.addItem(text);
            setText("");
        }
        else if(p.key === "Shift"&&editFlag){
            props.edit(text);
            setText("");
            setEditFlag(false);
        }

    }

    return <>
        <form className="input-box">
            <i className="material-icons">subject</i>
            <input type="text" placeholder="Add a new task"
                   onChange={handleInput} onKeyDownCapture={handleEnter}
                   value={text}/>
        </form>
        <div className="button-box">
            <div onClick={() => {
                props.status("All")
            }}>All
            </div>
            <div onClick={() => {
                props.status("Pending")
            }}>Pending
            </div>
            <div onClick={() => {
                props.status("Completed")
            }}>Completed
            </div>
            <div className="clear-btn" onClick={props.clear}>clear All</div>
        </div>
    </>

}

