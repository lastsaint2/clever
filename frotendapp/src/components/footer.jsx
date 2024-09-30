import React from 'react';
import '../assets/footer.css';
import tsap from '../assets/whatsapp.png';
import ig from '../assets/instagram.png';
import face from '../assets/facebook.png'
import x from '../assets/twitter.png'
import hub from '../assets/git.png'

const Footer = () => {
    
    const tsapp = () => {
        const number = '+250792411229';
        const link = `http://wa.me/${number}`;
        window.open(link);
    };
    const IG=()=>{
        const link='https://www.instagram.com/?hl=en'
        window.open(link);
    }
    const Fib=()=>{
        const fecbk='https://web.facebook.com/?_rdc=1&_rdr'
        window.open(fecbk);
    }
    const X=()=>{
        const twitter='https://x.com/home?lang=en';
        window.open(twitter);
    }
    const Git=()=>{
        const git='https://github.com/lastsaint2'
        window.open(git);
    }

    return (

        <footer>
            <div className="follow">
        <h1>follow me</h1>
    </div>
            <div className="cont">
                <button onClick={tsapp}>
                    <img src={tsap} alt="WhatsApp" />WhatsApp
                </button>
                <div className="ig">
                    <button onClick={IG}><img src={ig} alt="" />Instagram</button>
                </div>
                <div className="facebook">
                    <button onClick={Fib}><img src={face} alt="" />Facebook</button>
                </div>
                <div className="x">
                    <button onClick={X}><img src={x} alt="" /></button>
                </div>
                <div className="github">
                    <button onClick={Git}><img src={hub} alt="" />Github</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Alex Sibomana. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
