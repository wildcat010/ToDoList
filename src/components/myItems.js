import React, { useState } from 'react';
import imageCheck from './../assets/check.svg';
import FlipMove from 'react-flip-move';
import imageDelete from './../assets/bin.svg';
import './../css/components/myItems.scss';

function MyItems(props) {

    const colors = {
        normal: 'rgba(255,255,255,.5)',
        done: '#004D00',
        active: '#ffcc00',
    };

    const status = [
        'active',
        'inProgress',
        'done',
        'delete'
    ];

    const [listHover, setListHover] = useState(false);
    const [itemClasseName, setItemClasseName] = useState("myitems");

    const hoverList = (action) => {
        console.log(action);
        setListHover(!listHover);

        switch(action) {
            case 'done':
                setItemClasseName("myitems_done");
                break;
            case 'delete':
                setItemClasseName("myitems_delete");
                break;
            default:
                setItemClasseName("myitems");
        }
    }

    return (
        
        <FlipMove>
        {props.items.map(i => 
            <li key={i.key} className={itemClasseName}>{i.text}

                <span type="submit" className="actions" 
                onClick={()=> props.onDelete(i.key)} 
                onMouseEnter={ () => hoverList('delete')} 
                onMouseLeave={ () => hoverList()}
                >
                    <img className="deleteImg" src={imageDelete} alt="delete task"></img>
                </span>

                <span type="submit" className="actions" 
                onClick={()=> props.onChange(i.key, 'finished')} 
                onMouseEnter={ () => hoverList('done')} 
                onMouseLeave={ () => hoverList()}
                >
                    <img className="checkImg" src={imageCheck} alt="task finished"></img>               
                </span>
                
            </li>)
        }
        </FlipMove>
        
    );

}

export default MyItems;