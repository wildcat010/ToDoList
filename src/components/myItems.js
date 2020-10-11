import React from 'react';
import Item from './Item';
import './../css/components/myItems.scss';


function MyItems(props) {

    return (
        // <FlipMove>
        <>
        {props.items.map((i) => (<Item key={i.key} onChange={props.onChange} items={i} finished={props.finished}></Item>))}
        </>
        // </FlipMove>
    );

}

export default MyItems;