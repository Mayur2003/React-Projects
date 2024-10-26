import React from 'react'
import { useState } from 'react'
import All_Pakege from './Api'
import './ApiCrud.css'

export default function ApiCrud() {

    const [Search, setSearch] = useState("")
    return (
        <>
            <div className="input">
                <input type="text" name="" id="" value={Search} onChange={(e) => setSearch(e.target.value)} />
                <button className='btn'>Search</button>

            </div>
            {All_Pakege.filter((item) => { return Search.toLowerCase() === "" ? item : item.h1.toLowerCase().startsWith(Search) }).map((item, index) => {
                return <div key={index} className="main-card">
                    <div className="card">
                        <div className="img-box">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="details">
                            <h2>{item.h1}</h2>
                            <div className="description">
                                <h3>{item.room_details.heading}</h3>
                                <p>{item.room_details.para}</p>
                            </div>
                        </div>
                        <div className="price">
                            <div className="review">
                                <div>


                                    <h3>{item.reviews.compliment}</h3>
                                    <p>{item.reviews.total}</p>
                                </div>

                                <span>{item.reviews.rating}</span>
                            </div>
                            <div className="days">
                                <p>{item.available.stay}</p>
                                <h3>{item.available.cost}</h3>
                                <button>See availability</button>
                            </div>
                        </div>

                    </div>


                </div>

            })}


        </>
    )
}
