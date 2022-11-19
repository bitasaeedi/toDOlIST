import React, {useState} from 'react';

export default function Item(props) {


    let items = props.titles.map((i, index) => {
        if (props.status === "All" || (props.status === "Pending" && i.check === false) || (props.status === "Completed" && i.check === true)) {
            return <MenuItem props={props} i={i} index={index}/>
        }
    })
    return <>
        {items}
    </>
}
///////////////////////////////////////////////////////////////////////////////////
function MenuItem({props, i, index}) {

    const [menu, setMenu] = useState(false);

    function handleCheck(l) {
        props.handlecheck(l.target.id);
    }

    function handleDelete(x) {
        props.delete(x.target.id.split("del")[1])
    }

    function handleEdit(e){
        props.edit(e.target.id.split("edit")[1])
    }
    return <div key={index} className="item_style">
        <input type="checkbox" onChange={handleCheck} id={index} checked={i.check}/>
        <div>{i.title}</div>
        <div onClick={() => { setMenu(!menu)}}>...
            <div className={menu ? "none" : "dis"}>
                <div onClick={handleDelete} id={`del${index}`}>Delete</div>
                <div onClick={handleEdit} id={`edit${index}`}>Edit</div>
            </div>
        </div>
    </div>
}
