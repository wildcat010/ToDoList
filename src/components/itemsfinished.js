import React, { useState } from 'react';
import MyItems from './myItems';
import './../css/components/itemsfinished.scss';

function ItemsFinished(props) {

    return (
        <div className="itemsFinished">
           <div className="displayItemsDone">
                Tasks Done: {props.items.length}
            </div>
            <span className="lineDone"></span>
            <ul className="theListDone">
                <MyItems items={props.items} finished={true}></MyItems>
            </ul>
        </div>
    );
}

export default ItemsFinished;