import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

const QuickButton = () => {
    const [isVisible, setIsVisible]=useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            setIsVisible(window.scrollY>300);
        };
        window.addEventListener("scroll",handleScroll);
        return ()=> {
            window.removeEventListener("scroll",handleScroll);
        }
    },[]);

    const scrollToTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    //flase값이 기본이기때문에 &&참일 경우만 실행됨
    return isVisible &&(
        <div className='QuickButton' onClick={scrollToTop} style={{position:'fixed', right:'20px', bottom:'14%', zIndex:'101'}}>
            <IoIosArrowDropupCircle  style={{fontSize:'35px', color:'#4d4d4d'}}/>
        </div>
    );
};

export default QuickButton;