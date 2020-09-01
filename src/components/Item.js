import React, { useState } from 'react';
import imageCheck from './../assets/check.svg';
import imageReset from './../assets/refresh.svg';
import imageDelete from './../assets/bin.svg';
import './../css/components/Item.scss';

function Item(props) {

    const [listHover, setListHover] = useState(false);
    const [itemClasseName, setItemClasseName] = useState("myitems");

    const hoverList = (action) => {
        setListHover(!listHover);

        switch(action) {
            case 'finished':
                setItemClasseName("myitems_finished");
                break;
            case 'delete':
                setItemClasseName("myitems_delete");
                break;
            case 'restart':
                setItemClasseName("myitems_restart");
                break;
            default:
                setItemClasseName("myitems");
        }
    }

    const RenderButtons = () => {
        if(!props.finished) {
            return (
                <>
                <span type="submit" className="actions" 
                            onClick={()=> props.onChange(props.items.key, 'delete')} 
                            onMouseEnter={ () => hoverList('delete')} 
                            onMouseLeave={ () => hoverList()}
                >
                    <img className="deleteImg" src={imageDelete} alt="delete task"></img>
                </span>

                <span type="submit" className="actions" 
                            onClick={()=> props.onChange(props.items.key, 'finished')} 
                            onMouseEnter={ () => hoverList('finished')} 
                            onMouseLeave={ () => hoverList()}
                >
                    <img className="checkImg" src={imageCheck} alt="task finished"></img>               
                </span>
                </>
            )
        }else{
            return (<>
                <span type="submit" className="actions" 
                            onClick={()=> props.onChange(props.items.key, 'restart')} 
                            onMouseEnter={ () => hoverList('restart')} 
                            onMouseLeave={ () => hoverList()}
                >
                    <img className="imageReset" src={imageReset} alt="restart task"></img>               
                </span>
            </>);
        }
    }

    return (
        <li key={props.items.key} className={itemClasseName}> 
        {props.items.text}
            <RenderButtons/>
        </li>
    );
}

export default Item;