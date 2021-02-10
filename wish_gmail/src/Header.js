import React from 'react'
import './Header.css'
import { MdHelpOutline, MdSettings } from  'react-icons/md'
import { IoApps, IoSettingsOutline } from 'react-icons/io5'
import { GoSearch } from 'react-icons/go'
import { FiMenu } from 'react-icons/fi'
import { BsCaretDownFill } from 'react-icons/bs'
import Avatar from '@material-ui/core/Avatar';
import HeaderIcon from './components/HeaderIcon'

const right__icons = [ MdHelpOutline, MdSettings, IoApps ]

function Header() {
    return (
        <div className="header">
            <div className="left__part__header">
                <HeaderIcon Icon={FiMenu}></HeaderIcon>
                <div className="gmail__header__logo">
                    <img alt="gmail__logo" src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63"></img>
                    <span>Gmail</span>
                </div>
            </div>
            <div className="search__div">
                <form>
                    <HeaderIcon Icon={GoSearch}></HeaderIcon>
                    <input type="text" placeholder="Search by mail"></input>
                    <button type="submit"></button>
                    <HeaderIcon className="down__option__icon " Icon={BsCaretDownFill}></HeaderIcon>
                </form>
            </div>
            <div className="right__part__header">
                {
                    right__icons.map(
                        icon => <HeaderIcon Icon={icon}></HeaderIcon>
                    )
                }
                <div className="header__icon__div">
                    <Avatar className="my__avatar" alt="Bruno Afonso" src="https://scontent.flis5-1.fna.fbcdn.net/v/t31.0-8/12240308_10207590645182654_6527767063056341391_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGeBLHB5RaGqjk3QLSqO5JmQoSM9EzSJ1hChIz0TNInWGxyQ1EPnILWPDnpFgPXkiw&_nc_ohc=sFyWIKR0udEAX-cunXq&_nc_ht=scontent.flis5-1.fna&oh=f98585397ceaf3234e422b6592157a2f&oe=6044ED86"></Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header
