import React from 'react'
import { useDispatch } from 'react-redux';
import './ComposeBoxItem.css'


function ComposeBoxItem({Icon, handleClick}) {
    const dispatch = useDispatch();
    return (
        <div className="compose__box__item" onClick={() => dispatch(handleClick)}>
            { Icon && <Icon className="box__item__icon"></Icon>}
        </div>
    )
}

export default ComposeBoxItem
