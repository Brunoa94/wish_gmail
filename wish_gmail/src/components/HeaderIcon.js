import React from 'react'

function HeaderIcon({Icon}) {
    return (
        <div className="header__icon__div">
            { Icon && <Icon className="header__icon"></Icon>}
        </div>
    )
}

export default HeaderIcon
