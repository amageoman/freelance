
// no more in use

import { useGSAP } from '@gsap/react';
import '../css/HeroSection.css'

import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, SplitText } from 'gsap/all';
import { Timeline } from 'gsap/gsap-core';

// Register the React plugin
gsap.registerPlugin(SplitText, ScrollTrigger, MotionPathPlugin);
const HeroSection = () => {


    useGSAP(() => {

        const looking = new SplitText('#looking', {
            type: "words"
        })
        const powered = new SplitText('#powered', {
            type: "chars"
        })

        const motionpath1 = document.querySelector('#motionpath1')

        const boxes = document.querySelectorAll('.boxes')
        const balls = document.querySelectorAll('.ball')
        const buttons = document.querySelectorAll('.button-container > button')
        const tl = new Timeline({

        })

        tl.from(boxes, {
            // display: 'none',
            opacity: 0
        }).from(powered.chars, {
            opacity: 0,
            stagger: .01
        }).from(balls, {
            opacity: 0
        }).from(looking.words, {
            opacity: 0,
            stagger: .1
        }, "<").from(buttons, {
            opacity: 0,
            stagger: .2
        })

        // .to(balls, {
        //             duration: 3,
        //             stagger: 0.1,
        //             repeat: -1,
        //             ease: "none",
        //             motionPath: {
        //                 path: motionpath1,
        //                 align: motionpath1,
        //                 autoRotate: true,
        //                 alignOrigin: [0.5, 0.5]
        //             }
        //         })

        const scrollTl = new Timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                scrub: true,
                start: 'bottom 90%',
                end: 'bottom 40%'
            }
        })

        gsap.set('.hero-section', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100% )'

        })

        scrollTl.to('.hero-section', {
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)',
            ease: 'power.in'
        }).to('.button-container', {
            y: 300,
            opacity:0
        }, "=").to('.right-box', {
            y: -200,
            x: 100,
            // scale: 2.5,

        }, "=").to('.left-box', {
            y: -100,
            x: -100,
            scale: 5,

        }, "=")
    })

    return (
        <>
            <div className="hero-section w-[100%] flex flex-row gap-5 items-center justify-center">

                <div className="boxes left-box flex-1  h-full grid place-items-center  relative">



                    <div id="powered" className='capitalize'> AI <br /> Powered <br /> Development</div></div>
                <div className="boxes right-box flex-1  h-full  grid place-items-center "><div id="looking">ACCELERATE YOUR DIGITAL TRANSFORMATION

                    with <br /> <span>Current Cloud AI</span> <br />

                    Looking for an efficient team? We deliver software projects 3x faster with our AI-enhanced development process</div>

                    <div className="button-container flex gap-10 w-[100%]">
                        <button>Find your dream team</button><button>Contact Us</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection