import React from 'react'
import './SideBarIcon.css'
import If from '../If'

function SideBarIcon({Icon, name, description}) {
    return (
        <div className={`${`sidebar__icon ${name}-div`}`}>
            <If test={name == "meet"}>
                <div className="meet__title__div">
                    <span className="hidden__title"><strong>{description}</strong></span>
                </div>
            </If>
            <div className="sidebar__icon__div">
                {Icon && <Icon className="icon"></Icon>}
            </div>
            <div className="sidebar__icon__span">
                <span className="expanded__description">{description}</span>
            </div>
        </div>
    )
}

export default SideBarIcon
