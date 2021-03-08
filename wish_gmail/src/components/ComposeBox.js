import React, { useState } from 'react'
import firebase from 'firebase'
import './ComposeBox.css'

import { FaRegWindowMinimize } from 'react-icons/fa'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { BsFillCaretDownFill, BsPaperclip } from 'react-icons/bs'
import { CgFormatColor } from 'react-icons/cg'
import { FiLink2 } from 'react-icons/fi'
import { BiSmile, BiLock} from 'react-icons/bi'
import { DiGoogleDrive } from 'react-icons/di'
import { MdPhotoSizeSelectActual, MdDelete } from 'react-icons/md'
import { BsPen } from 'react-icons/bs'
import { RiMore2Fill } from 'react-icons/ri'

import ComposeBoxItem from './ComposeBoxItem'
import { useDispatch, useSelector } from 'react-redux'
import { setBoxInvisible, setMessage, setSender, setSubject, closeBox } from './../composeBoxSlice'
import { db } from '../firebase'

const footer_icons = [ CgFormatColor, BsPaperclip, FiLink2, BiSmile, DiGoogleDrive, MdPhotoSizeSelectActual, BiLock, BsPen, RiMore2Fill, MdDelete]

function ComposeBox({handleChange}) {
    const composeBox = useSelector(state => state.composeBoxSlice.composeBoxVisible)
    const composeMessage = useSelector(state => state.composeBoxSlice.message)
    const composeSender = useSelector(state => state.composeBoxSlice.sender)
    const composeSubject = useSelector(state => state.composeBoxSlice.subject)
    const dispatch = useDispatch();

    const sendEmail = (e) => {
        e.preventDefault();
        db.collection('emails').add({
            sender: composeSender,
            subject: composeSubject,
            description: composeMessage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <div className={`compose__box ${composeBox === true ? `active` : `disabled`}`}>
            <form>
                <div className="compose__box__header">
                    <div className="new__message__title">
                        <span>New message</span>
                    </div>
                    <div className="header__icons">
                        <ComposeBoxItem Icon={FaRegWindowMinimize} handleClick={setBoxInvisible()}></ComposeBoxItem>
                        <ComposeBoxItem Icon={AiOutlineExpandAlt}></ComposeBoxItem>
                        <ComposeBoxItem Icon={IoCloseSharp} handleClick={closeBox()}></ComposeBoxItem>
                    </div>
                </div>
                <div className="compose__body">
                    <div className="compose__details__box">
                        <span className="receivers">Receivers</span>
                        <div className="receivers__input">
                            <input className="receivers__input" type="text" value={composeSender} onChange={e => dispatch(setSender(e.target.value))}></input>
                        </div>
                        <div className="cc__bcc">
                            <span className="Cc">Cc</span>
                            <span>Bcc</span>
                        </div>
                    </div>
                    <div className="compose__details__box">
                        <div className="subject__input">
                            <input placeholder="Subject" className="subject__input" type="text" value={composeSubject} onChange={e => dispatch(setSubject(e.target.value))}></input>
                        </div>
                    </div>
                    <div className="compose__message__box">
                        <textarea className="message__input" type="textarea" value={composeMessage} onChange={e => dispatch(setMessage(e.target.value))}></textarea>
                    </div>
                </div>
                <div className="footer__compose__box">
                    <button className="btn btn-send" onClick={sendEmail}>Send</button>
                    <button className="btn btn-triangle"><BsFillCaretDownFill className="triangle"></BsFillCaretDownFill></button>
                    <div className="footer__icons">
                        {
                            footer_icons.map( icon => <ComposeBoxItem Icon={icon}></ComposeBoxItem>)
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ComposeBox
