import React from 'react';

import { Link } from 'react-router-dom';

import img from '../../assets/images/background/Characters.png'
import royal_blades_play_to_earn from '../../assets/images/logo/royal-blades-play-to-earn.png'
import polygonlogo from '../../assets/images/background/Login_Polygon.png'
import hivelogo from '../../assets/images/background/Hivebutton-01.png'
import join_us_on_discord from '../../assets/images/background/Join_Discord-01.png'



function Banner3({hiveClick,polygonClick}) {
    return (
        <section className="banner s3">
        <div className="shape"></div>
        <div className="shape right"></div>
        <div className="shape s3 right"></div>
   
        <div className="container big">
            <div className="row">
                <div className="col-xl-5 col-md-12">
                    <div className="banner__left">
                        <div className="block-text">
                            {/* <h2 className="heading">Discover and
                                Collect Digital Art
                                and <span className="arlo_tm_animation_text_word"></span>
                                </h2> */}

                                <img src={royal_blades_play_to_earn} alt="royal blades play to earn" />
                                <p className="desc">Embark on an epic blockchain-powered journey where skill meets strategy, as two players clash in a sword-wielding battle for tokens and coveted NFT treasures..</p>
                                <Link to='#' className="polygon" onClick={hiveClick}>
                                    <div className="hive-div">
                                        <div className="polygon-logo"><img src={hivelogo} alt="logo" className='logo-button' /></div>
                                        <div className="hive-text">Enter Using Key Chain </div>
                                    </div>
                                </Link>
                                <Link to='#' className="polygon" onClick={polygonClick}>
                                    <div className="polygon-div">
                                        <div className="polygon-logo"><img src={polygonlogo} alt="logo" className='logo-button' /></div>
                                        <div className="polygon-text">Enter using polygon scan</div>
                                    </div>

                                </Link>
                               
                                <Link to="/contact" className="action-btn nft-market nft-level">
                                    <span className='nft-market'>NFT Market</span>
                                </Link>
                                <Link to="/contact" className="action-btn s1 nft-level">
                                    <div className='join-us-on-discord'>
                                     <img src={join_us_on_discord} alt="join us on discord" />
                                    </div>
                                </Link>
                        </div>

                        <div className="couter-list">
                            <div className="couter-box">
                                <h4 className="numb">52K<span>+</span></h4>
                                <p>Tokens</p>
                            </div>
                            <div className="couter-box">
                                <h4 className="numb">27K<span>+</span></h4>
                                <p>Lands</p>
                            </div>
                            <div className="couter-box">
                                <h4 className="numb">18K<span>+</span></h4>
                                <p>NFTs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">

                    <div className="banner__right">
                        <div className="image-1">
                            <img className="characters" src={img} alt="Royal blades" />
                        </div>

                        <div className="banner-box" data-aos="fade-up" data-aos-duration="2000">
                            <div className="top">
                                <h4 className="title play-to-earn-box">Royal Blades Play To Earn</h4>

                                <div className="wishlist">
                                    <div className="icon">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 3.8125C11.25 2.36292 10.0256 1.1875 8.51533 1.1875C7.38658 1.1875 6.41708 1.84433 6 2.78175C5.58292 1.84433 4.61342 1.1875 3.48408 1.1875C1.975 1.1875 0.75 2.36292 0.75 3.8125C0.75 8.02417 6 10.8125 6 10.8125C6 10.8125 11.25 8.02417 11.25 3.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        
                                    </div>
                                    <p>3432</p>
                                </div>
                            </div>

                            <div className="main">
                                <div className="info">
                                    <p>Current Bid</p>
                                    <h4 className='play-to-earn-box'>2.26 ETH</h4>
                                    <p>$8,154.36</p>
                                </div>

                                <div className="coundown">
                                    <p>Remaining time</p>
                                    <span className="js-countdown" data-timer="12865550"></span>
                                </div>
                            </div>

                            <div className="button">
                                    <Link to="#" className="action-btn play-discord-game" >
                                        <span>Play Discord Game</span> 
                                    </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Banner3;