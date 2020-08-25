import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './../css/components/todoitems.css';

function ToDoItems(props) {

    const deleteItem = (key) => {
        console.log(key);
    };

    return (
        <div className="todoitems">
            <div >
                {props.items.length}
            </div>
            <ul>
                {props.items.map(i => <div key={i.key} className="listOfItems"><li>{i.text}</li><Button type="submit" className="btn-danger" onClick={()=>deleteItem(i.key)}>delete</Button></div>)}
            </ul>
        </div>
    );
}

export default ToDoItems;