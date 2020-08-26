import React, { useState } from 'react';
import TodoItems from './todoItems'
import './../css/components/todolist.css';

function ToDoList(props) {

    const [myItems, setItems] = useState([{text: "bloublou", key: Date.now()}]);
    const [task, setTask] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        let newItem = {
            text: task,
            key: Date.now()
        };

        if(task){
            setItems(myItems.concat(newItem));
            setTask('');
        }
        console.log(myItems);
    }

    return (
        <div className="todolist">

                <form onSubmit={addItem}>
                    <input placeholder="enter task" 
                    onChange={event => setTask(event.target.value)} 
                    value={task}
                    >
                    </input>
                    <button type="submit" className="button">add</button>
                </form>

            <TodoItems items={myItems} setItems={setItems}/>
        </div>
    );
}

export default ToDoList;