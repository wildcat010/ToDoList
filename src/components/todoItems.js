import React from 'react';
import './../css/components/todoitems.scss';
import MyItems from './myItems';


function ToDoItems(props) {


    return (
        <div className="todoitems">
            <div className="displayItems">
                Number of Task: {props.items.length}
            </div>
            <span className="line"></span>
            
        </div>
    );
}
//<ul className="theList">
 //               <MyItems items={props.items} onChange={props.onChange}></MyItems>
 //           </ul>

export default ToDoItems;