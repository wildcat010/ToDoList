import React from 'react';
import './../css/components/todoitems.scss';
import MyItems from './myItems';


function ToDoItems(props) {

    const deleteItem = (key) => {

        var filteredItems = props.items.filter(function (item) {
            return (item.key !== key);
        });

        props.setItems(filteredItems);
    };

    const changeStatus = (key, status) => {

        console.log("update: " + key + " to: "+status);

        // props.setItems(filteredItems);
    };

    return (
        <div className="todoitems">
            <div className="displayItems">
                Number of Task: {props.items.length}
            </div>
            <span className="line"></span>
            <ul className="theList">
                <MyItems items={props.items} onDelete={deleteItem} onCheck={deleteItem} onChange={changeStatus}></MyItems>
            </ul>
        </div>
    );
}

export default ToDoItems;