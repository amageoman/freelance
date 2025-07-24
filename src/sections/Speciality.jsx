import { useGSAP } from '@gsap/react'
import '../css/Speciality.css'
import { Timeline } from 'gsap/gsap-core'
import gsap from 'gsap'
import { MotionPathPlugin, ScrollTrigger, SplitText } from 'gsap/all'
const Speciality = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger, MotionPathPlugin);


    useGSAP(() => {

        
        gsap.set('.speciality', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100% )'

        })
     

        const scrollTl2 = new Timeline({
            scrollTrigger: {
                trigger: '.mainContainer',
                scrub: true,
                start: 'top 70%',
                end: 'bottom 100%'
            }
        })
        const scrollOut = new Timeline({
            scrollTrigger: {
                trigger: '.mainContainer',
                scrub: true,
                start: 'bottom 70%',
                end: 'bottom 0%'
            }
        })
        // const scrollOutMain = new Timeline({
        //     scrollTrigger: {
        //         trigger: '.speciality',
        //         scrub: true,
        //         start: 'bottom 70%',
        //         end: 'bottom 0%'
        //     }
        // })


        scrollTl2.from('.card-1', {
            scale: 0,
            xPercent: -100,
            yPercent: -100,

        }).from('.card-2', {
            scale: 0,
            xPercent: 100,
            yPercent: -100,

        }, "=").from('.card-3', {
            scale: 0,
            xPercent: -100,
            yPercent: 100,

        }, "=").from('.card-4', {
            scale: 0,
            xPercent: 100,
            yPercent: 100,

        }, "=")

        // gsap.set('.specialtiy',{
        //                clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100% )'

        // })




        // scrollOutMain.to('.speciality', {
        //     clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100% )',
        //     ease: 'power.in'
        // })

        scrollOut.to('.card-1', {
            x: -500,
            y: 400,
            opacity:0
        }).to('.card-2', {
            x: 500,
            y: 400,
            opacity:0
        }, "=").to('.card-3', {
            x: 600,
            y: 400,
            opacity:0
        }, "=").to('.card-4', {
            x: -600,
            y: 400,
            opacity:0

        }, "=")
    })
    return (
        <div className='speciality relative '>
            {/* <div id="ccai" className='ccai'></div> */}
            

            <div className="card-container h-[50dvh]  w-[100%]"></div>
            <div className="mainContainer card-container w-[40dvw]   grid grid-cols-2 grid-rows-2 gap-10 ">
                <div className="cards card-1">
                    <div className="main">3x</div>
                    <div className="sub">Faster Delivery</div>
                </div>
                <div className="cards card-2">
                    <div className="main">100%</div>
                    <div className="sub">Client Satisfaction</div>
                </div>
                <div className="cards card-3">
                    <div className="main">24/7</div>
                    <div className="sub">AI Support</div>
                </div>
                <div className="cards card-4">
                    <div className="main">∞</div>
                    <div className="sub">Possibilities</div>
                </div>

            </div>
            <div className="card-container h-[10dvh]  w-[100%]"></div>

        </div>
    )
}

export default Speciality