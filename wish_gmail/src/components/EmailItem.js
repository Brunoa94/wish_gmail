import React from 'react'
import './EmailItem.css'
import { BiSquareRounded, BiStar } from 'react-icons/bi' 
import { BsBookmark, BsFillEnvelopeOpenFill, BsGrid3X3GapFill } from 'react-icons/bs'
import GoogleIcon from './GoogleIcon'
import { IoArchiveSharp } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { FiClock } from 'react-icons/fi'

const email_items = [ [BiSquareRounded, "select"], [ BiStar, "favorite"], [ BsBookmark, "mark"] ]
const onhover_email_items = [ [IoArchiveSharp, "archive"], [MdDelete, "delete"], [BsFillEnvelopeOpenFill, "envelope"], [FiClock, "clock"]]

function EmailItem({sender, title, description, date}) {
    return (
        <div className="email__item">
            <div className="email__item__icons">
                {
                    email_items.map( Icon =>
                        <div className="email__item__div">
                            <GoogleIcon Icon={Icon[0]} type="rounded" name={Icon[1]}></GoogleIcon>
                        </div>
                )}
            </div>
            <div className="email__item__body">
                <div className="sender">
                    <span><strong>{sender}</strong></span>
                </div>
                <div className="title__description">
                    <span><strong>{title}</strong></span>
                    <span>{description}</span>
                </div>
                <div className="date">
                    <span><strong>{date}</strong></span>
                </div>
                <div className="onhover__email__item__icons">
                    {
                        onhover_email_items.map( Icon =>
                            <div className="onhover__email__item__div">
                                <GoogleIcon Icon={Icon[0]} type="rounded" name={Icon[1]}></GoogleIcon>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmailItem
