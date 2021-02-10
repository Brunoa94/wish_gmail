import React from 'react'
import If from '../If'
import './GoogleIcon.css'

function GoogleIcon({Icon, type, icon__name, Img}) {
    return (
        <div className={`${type}__google__icon ${icon__name}`}>
            { Icon && <Icon className={`google__icon__img`}></Icon>}
            { Img && <img src={Img} className="google__icon__img" alt={icon__name}></img> }
        </div>
    )
}

export default GoogleIcon
