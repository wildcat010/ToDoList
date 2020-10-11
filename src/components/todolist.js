import React, { useState, useEffect } from 'react';
import TodoItems from './todoItems';
import ItemsFinished from './itemsfinished';
import './../css/components/todolist.css';

import {connect} from "react-redux";
import * as finishedToDoActions from "../redux/actions/finishedToDoActions";
import * as toDoActions from "../redux/actions/toDoListActions";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

function ToDoList(props) {

    const [myItems, setItems] = useState([{text: "bloublou", key: Date.now(), recurrence: 0},{text: "bloublouXX", key: Date.now()+1, recurrence: 0}]);
    const [task, setTask] = useState('');

    useEffect(() => {
        props.actions.loadFinishedToDoList().catch(error => {
            console.log("LOADING finishedToDoList FAILED" + error);
        })

        props.actions.loadToDoList().catch(error => {
            console.log("LOADING ToDoList FAILED" + error);
        })

    }, []);

    const addItem = (e) => {
        debugger;
        if(e) {
            e.preventDefault();
        }
        const newItem = {
            text: task,
            key: Date.now(),
            recurrence: 0
        };

        if(task){
            setItems(myItems.push(newItem));
            setTask('');
        }
    }

    const changeStatus = (key, status) => {
        debugger;
        let itemToUpdate = props.finishedToDoList.filter(x => x.key === key);
        if(itemToUpdate.length === 0) {
            return;
        }

        switch(status){
            case "finished":
                    //setItemsDone(myItemsDone.concat(itemToUpdate));
                    changeStatus(key, 'delete');
                break;
            case "delete":
                    const filteredItems = myItems.filter(function (item) {
                        return (item.key !== key);
                    });
                    setItems(filteredItems);
                break;
            case "restart":
                    const newItem = {
                        text: `${itemToUpdate[0].text} (${itemToUpdate[0].recurrence})`,
                        key: Date.now(),
                        recurrence: 0
                    };
                    setItems(myItems.push(newItem));
            break;
            default:
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
            <ItemsFinished items={props.finishedToDoList} onChange={changeStatus}/>                           
        </div>
    );
}

ToDoList.propTypes = {
    actions: PropTypes.object.isRequired,
    finishedToDoList: PropTypes.array.isRequired,
    toDoList: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    debugger;
    return {
        finishedToDoList: state.finishedToDoList.toDoListFinished,
        toDoList: state.toDoList.toDoList
    };
}

function mapDispatchToProps(dispatch){
    return {
         actions: {
            loadFinishedToDoList: bindActionCreators(finishedToDoActions.loadFinishedToDoList, dispatch),
            loadToDoList: bindActionCreators(toDoActions.loadToDoList, dispatch)
         }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);