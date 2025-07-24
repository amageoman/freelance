import { useState } from "react"

const Header = ({onNav,refList}) => {

  const onNavHandle=(ref)=>{
    setShowMenu(false)
    onNav(ref)
  }

 const [showMenu,setShowMenu] =useState(false)
  return (
    <div className='header h-[70px] !px-[50px]    sticky top-0 w-[100%]   z-100 flex justify-between items-center '>
        <div className="logo" onClick={()=>onNavHandle(refList.ref2)}>CCAI</div>
       
       <div className="closeBtn" onClick={()=>setShowMenu(prev=>!prev)}>X</div>
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