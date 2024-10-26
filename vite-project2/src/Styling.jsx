import React from 'react'
import './Style.css'

export default function Styling() {
    return (
        <>

            {/* Header start here */}
            <div className="header">

                <div className='nav'>


                    <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/logo.svg" alt="" />


                    <div className='search-bar'>
                        <div className="catagory">
                            <select name="" id="" >
                                <option value="">All Catagories</option>
                                <option value="">Men's</option>
                                <option value="">Women's</option>
                                <option value="">Kids</option>
                            </select>
                            <input type="text" placeholder='search' />
                        </div>
                        <div className='side-logo'>
                            <div>
                                <span className='counter'>0</span>
                                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-compare.svg" alt="" />
                                <span>Compare</span>
                            </div>
                            <div>
                                <span className='counter'>0</span>
                                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-heart.svg" alt="" />
                                <span>Wishlist</span>
                            </div>
                            <div>
                                <span className='counter'>0</span>
                                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-cart.svg" alt="" />
                                <span>Cart</span>
                            </div>
                            <div>

                                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-user.svg" alt="" />
                                <span>Account</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* NavBar start here */}

            <div className="second-nav">
                <div className="browse">
                    <button>Browse All Categories</button>
                </div>
                <div className="list">
                    <ul>
                        <li><img src="	https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-hot.svg" alt="" />Hot Deals</li>
                        <li className='home-li'>Home
                            <i className="fa-solid fa-chevron-down"></i>
                            <div className='home-drop'>
                                <p>Home1</p>
                                <p>Home2</p>
                                <p>Home3</p>
                                <p>Home4</p>

                            </div>
                        </li>
                        <li>About</li>
                        <li className='shop-li'>Shop
                            <i className="fa-solid fa-chevron-down"></i>
                            <div className='shop-drop'>
                                <p>Shop grid-Right sidebar</p>
                                <p>Shop grid-Left sidebar</p>
                                <p>Shop List-Right sidebar</p>
                                <p>Shop List-Left sidebar</p>
                                <p>Shop List</p>
                                <p>Shop filter</p>
                                <p>Shop cart</p>


                            </div>
                        </li>
                        <li>Vendors<i className="fa-solid fa-chevron-down"></i></li>
                        <li className='menu-li'>Mega Menu
                            <i className="fa-solid fa-chevron-down"></i>
                            <div className='menu-drop'>
                                <div>
                                    <h4>Fruit & Vegetables</h4>
                                    <p>Fresh Vegetables</p>
                                    <p>Herbs & Seasonings</p>
                                    <p>Cuts & Sprouts</p>
                                    <p>Exotic Fruits & Veggies</p>
                                    <p>Produce</p>
                                </div>
                                <div>
                                    <h4>Breck-fast & Dairy</h4>
                                    <p>Fresh Vegetables</p>
                                    <p>Herbs & Seasonings</p>
                                    <p>Cuts & Sprouts</p>
                                    <p>Exotic Fruits & Veggies</p>
                                    <p>Produce</p>
                                </div>
                                <div>
                                    <h4>Meat & seafood</h4>
                                    <p>Fresh Vegetables</p>
                                    <p>Herbs & Seasonings</p>
                                    <p>Cuts & Sprouts</p>
                                    <p>Exotic Fruits & Veggies</p>
                                    <p>Produce</p>
                                </div>
                                <div >
                                    <img src="https://nest-nextjs-13.vercel.app/assets/imgs/banner/banner-menu.png" alt="" />

                                </div>


                            </div>
                        </li>
                        <li>Blog<i className="fa-solid fa-chevron-down"></i></li>
                        <li>Pages<i className="fa-solid fa-chevron-down"></i></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="help-line">
                    <div>

                        <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/icon-headphone.svg" width={50} alt="" />
                    </div>
                    <div>

                        <h2>1900-888</h2>
                        <span>24/7 Support Center</span>
                    </div>
                </div>
            </div>

            <section>
                <div className="section1">
                    {/* <i class="fa-solid fa-circle-left"></i> */}
                    <div className="slider">
                        <h1>Dont's miss <br/>amazing grocery deals</h1>
                        <p>Sign up for the daily newsletter</p>
                        <input type="text" placeholder='your email address' />
                        <button>Subscrib</button>
                    </div>
                    {/* <i class="fa-solid fa-circle-right"></i> */}

                </div>
            </section>
        </>




    )
}




