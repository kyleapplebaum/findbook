import React, { useState } from "react";
import Card from "./card";
import axios from "axios";

const Main=()=>{
    const [search, setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if (evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCMIJHAM3Zk6fdX-cyUMYtaUP0BE0fad-s'+'&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
        }
    };
    return (
        <>
        <div className="header">
            <div className="row1">
                <h1>
                    So Many Books<br/>So Little Time</h1>
            </div>
            <div className="row2">
                <h2>
                    Find a Book!
                </h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}></input>
                    <button><i class="fas fa-search"></i></button>
                </div>
            </div>
        </div>

        <div className="container">
            {
                <Card book={bookData}/>
            }

        </div>
        </>
    )
}

export default Main;