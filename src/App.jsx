import { useEffect, useRef, useState } from 'react'
import './App.css'
import HeroSection from './sections/HeroSection'
import Header from './sections/Header'
import Speciality from './sections/Speciality'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis/types'
import Services from './sections/Services'
import Aisection from './sections/Aisection'
import { useGSAP } from '@gsap/react'
import Tech from './sections/Tech'
import Footer from './sections/Footer'
import LandingSection from './sections/LandingSection'

function App() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.01
    })

    function update(time) {
      lenis?.scroll && lenis.scroll.update(time) // no longer .raf()
      ScrollTrigger.update()
      requestAnimationFrame(update)
    }

    requestAnimationFrame(update)

    // Connect ScrollTrigger to Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined
          ? lenis.scrollTo(value)
          : window.scrollY
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    ScrollTrigger.addEventListener('refresh', () => lenis?.scroll?.update?.())
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // useGSAP(()=>{
  //      const ccai = document.getElementById('ccai')
  //       gsap.set('.speciality', {
  //           clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100% )'

  //       })
  //       gsap.set(ccai, {
  //           width: 'max-content'
  //       })

  //       gsap.to(ccai, {
  //           duration: 50,
  //           repeat: -1,
  //           yoyo: true,
  //           ease: "none",
  //           motionPath: {
  //               path: motionpath2,
  //               align: motionpath2,
  //               autoRotate: false,
  //               alignOrigin: [0, 0.5]
  //           }
  //       })
  // })

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)

  const goToRef = (reference) => {
    if(reference==ref2){
      window.scrollTo({
  top: '5000px',
  behavior: 'smooth'
});
    }
    reference.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <img id="ccai" className='ccai -z-100 absolute' height={'40px'} width={'30px'}  src="src\assets\blob.png"/>
            <svg className='absolute top-0 left-0 w-[100%] h-[100%]' viewBox="0 0 100 100" preserveAspectRatio='none'>
                <path id='motionpath2' fill='none' stroke='transparent' d='M 0 0 L 10 70 L 50 0 L 80 70 L 0 0 Z' />
            </svg> */}
      {/* <div className="mask"></div> */}
      <div ref={ref1} className='sticky top-0 z-[1000000]'> <Header onNav={(ref) => goToRef(ref)} refList={{ref1,ref2,ref3,ref4,ref5,ref6}} /></div>
      {/* <div ref={ref2}> <HeroSection /></div> */}
      <div ref={ref2}> <LandingSection /></div>
      <div  ><Speciality /></div>
      <div ref={ref3}> <Services /></div>
      <div ref={ref4}> <Aisection /></div>
      <div ref={ref5}><Tech /></div>
      <div ref={ref6} ><Footer/></div>
    </>
  )
}

export default App
