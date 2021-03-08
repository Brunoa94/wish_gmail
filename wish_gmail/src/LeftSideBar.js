import React, { useState } from 'react'
import './LeftSideBar.css'
import { BsFillInboxFill, BsFillClockFill, BsBookmarkFill,BsFillCameraVideoFill } from 'react-icons/bs'
import { AiFillStar, AiFillFile, AiOutlineVideoCamera } from 'react-icons/ai'
import { MdLabel } from 'react-icons/md'
import { IoSend } from 'react-icons/io5'
import { FaKeyboard } from 'react-icons/fa'
import { SiGooglehangouts } from 'react-icons/si'
import { GoTriangleDown } from 'react-icons/go'
import Avatar from '@material-ui/core/Avatar';
import SideBarIcon from './components/SideBarIcon'
import If from './If'
import { setBoxVisible } from './composeBoxSlice'
import { useDispatch } from 'react-redux'

const first_part_icons=[
    [
        BsFillInboxFill,
        "inbox",
        "Inbox"
    ],
    [
        AiFillStar,
        "favorites",
        "Favorites"
    ],
    [
        BsFillClockFill,
        "suspended",
        "Suspended"
    ],
    [
        BsBookmarkFill,
        "marked",
        "Important"
    ],
    [
        IoSend,
        "sent",
        "Sent"
    ],
    [
        AiFillFile,
        "drafts",
        "Drafts"
    ],
    [
        MdLabel,
        "categories",
        "Categories"
    ]
]

const second_part_icons = [
    [
        AiOutlineVideoCamera,
        "meet",
        "Meet"
    ],
    [
        BsFillCameraVideoFill,
        "new_meet",
        "New Meeting"
    ],
    [
        FaKeyboard,
        "join_meeting",
        "Join Meeting"
    ]
]

function LeftSideBar() {
    const[openNav, setOpenNav] = useState(false);
    const dispatch = useDispatch();
    
    return (
        <div className="left__side__bar">
            <div className="compose__div" onClick={() => dispatch(setBoxVisible())}>
                <div className="compose__img">
                    <img alt="Compose Img" src="https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png"></img>
                </div>
                <div className="compose__span">
                    <span>Compose</span>
                </div>
            </div>
            <div className="sidebar__icons">
                {
                    first_part_icons.map(
                        icon => <SideBarIcon Icon={icon[0]} name={icon[1]} description={icon[2]}></SideBarIcon>
                    )
                }
            </div>
            <div className="sidebar__icons">
                {
                    second_part_icons.map(
                        icon => <SideBarIcon Icon={icon[0]} name={icon[1]} description={icon[2]}></SideBarIcon>
                    )
                }
            </div>
        </div>
    )
}

export default LeftSideBar
