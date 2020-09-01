import React, { useState } from 'react';
import TodoItems from './todoItems';
import ItemsFinished from './itemsfinished';
import './../css/components/todolist.css';

function ToDoList(props) {

    const [myItems, setItems] = useState([{text: "bloublou", key: Date.now(), recurrence: 0}]);
    const [myItemsDone, setItemsDone] = useState([{text: "task finished", key: Date.now()+1, recurrence: 0}]);
    const [task, setTask] = useState('');

    const addItem = (e) => {
        if(e) {
            e.preventDefault();
        }
        const newItem = {
            text: task,
            key: Date.now(),
            recurrence: 0
        };

        if(task){
            setItems(myItems.concat(newItem));
            setTask('');
        }
        console.log(myItems);
    }

    const changeStatus = (key, status) => {
        let itemToUpdate = myItems.filter(x => x.key === key);
        if(itemToUpdate.length === 0) {
            itemToUpdate = myItemsDone.filter(x => x.key === key);
        }

        switch(status){
            case "finished":
                    setItemsDone(myItemsDone.concat(itemToUpdate));
                    changeStatus(key, 'delete');
                break;
            case "delete":
                    const filteredItems = myItems.filter(function (item) {
                        return (item.key !== key);
                    });
                    setItems(filteredItems);
                break;
            case "restart":
                debugger;
                    setItems(itemToUpdate[0].recurrence ++);
                    const newItem = {
                        text: `${itemToUpdate[0].text} (${itemToUpdate[0].recurrence})`,
                        key: Date.now(),
                        recurrence: 0
                    };
                    setItems(myItems.concat(newItem));
            break;
            default:
                console.log("default status")
        }
    };

    return (
        <div className="todolist">

                <form onSubmit={addItem}>
                    <input placeholder="enter task" 
                    onChange={event => 
                        setTask(event.target.value)} 
                    value={task}
                    >
                    </input>
                    <button type="submit" className="button">add</button>
                </form>

            <TodoItems items={myItems} onChange={changeStatus}/>
            <ItemsFinished items={myItemsDone} onChange={changeStatus}/>
        </div>
    );
}

export default ToDoList;