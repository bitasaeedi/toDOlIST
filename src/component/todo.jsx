import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Item from "./item";

export default function Todo(props) {

    let [items, setItem] = useState([]);
    let[status,setStatus]=useState("All");
    let[editText,setEditText]=useState("");
    let [Id,setId]=useState(0);
    //ALL or pending or completed
    function handleStatus(s){
       setStatus(s);
    }
    //add new item
    function addItem(text) {
        setItem([...items, {index:items.length,title:text,check:false}])
    }
    //update item after checked
    function handleCheck(id){
        setItem(items.map((x)=>{
            if(Number(x.index)===Number(id)){
                return {index:x.index,title:x.title,check:!x.check}
            }
            else {
                return x;
            }
        }))
    }
    //delete item
    function handleDelete(id){
        setItem([...items].filter(i=>{
            if(i.index!==Number(id)){
                return i;
            }
        }) .map((item, I) => {
            item.index = I
            return item
        })
        )
    }
    // find text that we want to update
    function handleEdit(id){
       setId(id);
       items.map((x)=>{
            if(Number(x.index)===Number(id)){
              setEditText(x.title);
            }})
    }
    // update item after edit
    function edit(text){
        setItem(items.map((x)=>{
            if(Number(x.index)===Number(Id)){
                return {index:x.index,title:text,check:x.check}
            }
            else {
                return x;
            }
        }))
    }
    //clear all
    function handleClear(){
        setItem([]);
    }
    return <>
        <div className="container">
            <div className="top">
                <Header status={handleStatus} addItem={addItem} clear={handleClear} editText={editText} edit={edit}/>
            </div>
            <div className="bottom">
               <Item titles={items} handlecheck={handleCheck} status={status}
               delete={handleDelete} edit={handleEdit}/>
            </div>

        </div>
    </>
}
