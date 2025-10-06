import { useState } from "react";
import {logo } from '../assets'

const Header = ({onNav,refList}) => {

  const onNavHandle=(ref)=>{
    setShowMenu(false)
    onNav(ref)
  }

 const [showMenu,setShowMenu] =useState(false)
  return (
    <div className='header h-[70px] !px-[10px] md:!px-[50px]    sticky top-0 w-[100%]   z-100 flex justify-between items-center '>
        <div className="logo" onClick={()=>onNavHandle(refList.ref2)}> <img height={70} width={70} src={logo}/> </div>
       
       <div className="closeBtn" onClick={()=>setShowMenu(prev=>!prev)}> {!showMenu && <svg className="w-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>}
       {showMenu && <span>X</span> }  
       
       
       </div>
        <div className={`navs flex gap-10`}>
          <div className="nav" onClick={()=>onNavHandle(refList.ref3)}>Services</div>
          <div className="nav" onClick={()=>onNavHandle(refList.ref4)}>AI Services</div>
          <div className="nav" onClick={()=>onNavHandle(refList.ref5)}>Technology</div>
          
        </div>
        <div className={`navs-mobile flex gap-10 z-[1000] ${showMenu?'translate-x-[0%]':'translate-x-[100%]'}`}>
          <div className="nav" onClick={()=>onNavHandle(refList.ref3)}>Services</div>
          <div className="nav" onClick={()=>onNavHandle(refList.ref4)}>AI Services</div>
          <div className="nav" onClick={()=>onNavHandle(refList.ref5)}>Technology</div>
          
        </div>
    </div>
  )
}

export default Header