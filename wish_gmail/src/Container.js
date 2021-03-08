import React, { useEffect, useState } from 'react'
import './Container.css'
import LeftSideBar from './LeftSideBar'
import GoogleIcon from './components/GoogleIcon'
import { BiSquareRounded } from 'react-icons/bi' 
import { GoTriangleDown } from 'react-icons/go'
import { IoMdRefresh } from 'react-icons/io'
import { RiMore2Fill } from 'react-icons/ri'
import { AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from 'react-icons/ai'
import EmailItem from './components/EmailItem'
import ComposeBox from './components/ComposeBox'
import { useDispatch } from 'react-redux'
import { setMessage } from './composeBoxSlice'
import { db } from './firebase'

const right_side__imgs = [
    [
        "https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png",
        "calendar"
    ],
    [
        "https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png",
        "keep"
    ],
    [
        "https://www.gstatic.com/companion/icon_assets/tasks2_2x.png",
        "tasks"
    ],
    [
        "https://www.gstatic.com/companion/icon_assets/contacts_2x.png",
        "contacts"
    ]
]



function Container() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("emails").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ));
    }, [])

    return (
        <div className="main__container">
            <div className="left__side">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className="center">
                <div className="container__header">
                    <div className="left__part__container__header">
                        <GoogleIcon Icon={BiSquareRounded} type="rounded" icon__name="header__square"></GoogleIcon>
                        <GoogleIcon Icon={GoTriangleDown} type="square" icon__name="triangle__down"></GoogleIcon>
                        <GoogleIcon Icon={IoMdRefresh} type="rounded" icon__name="refresh"></GoogleIcon>
                    </div>
                    <div className="center__part__container__header">
                        <GoogleIcon Icon={RiMore2Fill} type="rounded" icon__name="more"></GoogleIcon>
                    </div>
                    <div className="right__part__container__header">
                        <div className="pagination__number">
                            <span>1-5 of 2 146</span>
                        </div>
                        <div className="turn__pages">
                            <GoogleIcon Icon={AiOutlineLeft} type="rounded" icon__name="turn__page"></GoogleIcon>
                            <GoogleIcon Icon={AiOutlineRight} type="rounded" icon__name="turn__page"></GoogleIcon>
                        </div> 
                    </div>
                </div>
                <div className="emails__container">
                    {
                        posts.map(({ id, data: {sender, subject, description, 
                            timestamp } }) => (
                            <EmailItem key={id} sender={sender} subject={subject} decription={description} timestamp={timestamp}></EmailItem>
                        ))
                    }
                </div>
            </div>
            <div className="right__side">
                <div className="right__side__icons">
                    {
                        right_side__imgs.map(
                            icon => <GoogleIcon type="rounded" Img={icon[0]} icon__name={icon[1]}></GoogleIcon>
                        )
                    }
                </div>
                <div className="bottom__right__side">
                    <GoogleIcon Icon={AiOutlinePlus} type="rounded" icon__name="plus"></GoogleIcon>
                    <GoogleIcon Icon={AiOutlineRight} type="rounded" icon__name="right_arrow"></GoogleIcon>
                </div>
            </div>
            <ComposeBox></ComposeBox>
        </div>
    )
}

export default Container
