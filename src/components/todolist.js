import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TodoItems from './todoItems'
import './../css/components/todolist.css';

function ToDoList(props) {

    /**/
    const [myItems, setItems] = useState([]);
    const [task, setTask] = useState('');

    const addItem = (e) => {
        let newItem = {
            text: task,
            key: Date.now()
        };

        e.preventDefault();
        if(task){
            setItems(myItems.concat(newItem));
            setTask('');
        }
        console.log(myItems);
    }

    return (
        <div className="todolist">
            <div className="header">
                <form onSubmit={addItem}>
                    <input placeholder="enter task" onChange={event => setTask(event.target.value)} value={task}>
                    </input>
                    <Button type="submit" className="btn-primary">add</Button>
                </form>
            </div>
            <TodoItems items={myItems}/>
        </div>
    );
}

export default ToDoList;