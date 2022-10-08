import React, { useState } from "react";
import Modal from "./modal";
const Card=({book})=>{
    const [show, setShow]=useState(false);
    const [bookItem, setItem]=useState();
    return (
        <>
        {
            book.map((item)=>{
                let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let authors=item.volumeInfo.authors;
                let title=item.volumeInfo.title;
                return (
                    <>
                    <div className="card" onClick={()=>{setShow(true); setItem(item)}}>
                        <img src={thumbnail} alt=""/>
                        <div className="bottom">
                            <h3 className="title">{title}</h3>
                            <p className="authors">{authors}</p>
                        </div>
                    </div>
                    <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                    </>
                )
            })
        }
        </>
    )
}

export default Card;