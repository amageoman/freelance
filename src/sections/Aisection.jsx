import { useGSAP } from '@gsap/react'
import '../css/Aisection.css'
import { Timeline } from 'gsap/gsap-core'
const Aisection = () => {

    useGSAP(() => {
        const tl = new Timeline({
            repeat: -1
        })
        const tl2 = new Timeline({
            repeat: -1,
            // delay:.3
        })
        const tl3 = new Timeline({
            repeat: -1,
            // delay:.5
        })

        // NUMBER  -----------

        tl.fromTo('.number',
            {
                duration: 1,
                y: -20,
                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.number').innerText = '01'
            },
            y: 0,
            opacity: 1
        }).to('.number', {
            duration: 1,
            delay: 2,
            y: 20,
            opacity: 0
        }).fromTo('.number',
            {
                duration: 1,
                y: -20,
                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.number').innerText = '02'
            },
            y: 0,
            opacity: 1
        }).to('.number', {
            duration: 1,
            delay: 2,
            y: 20,
            opacity: 0
        }).fromTo('.number',
            {
                duration: 1,
                y: -20,
                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.number').innerText = '03'
            },
            y: 0,
            opacity: 1
        }).to('.number', {
            duration: 1,
            delay: 2,
            y: 20,
            opacity: 0
        }).fromTo('.number',
            {
                duration: 1,
                y: -20,
                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.number').innerText = '04'
            },
            y: 0,
            opacity: 1
        }).to('.number', {
            duration: 1,
            delay: 2,
            y: 20,
            opacity: 0
        })

        // HEADING ==========

        tl2.fromTo('.head',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.head').innerText = 'AI-Powered Planning'
            },
            y: 0,
            opacity: 1
        }).to('.head', {
            duration: 1,
            delay: 2,

            opacity: 0
        }).fromTo('.head',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.head').innerText = 'Rapid Development'
            },
            y: 0,
            opacity: 1
        }).to('.head', {
            duration: 1,
            delay: 2,

            opacity: 0
        }).fromTo('.head',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.head').innerText = 'Smart QA'
            },
            y: 0,
            opacity: 1
        }).to('.head', {
            duration: 1,
            delay: 2,

            opacity: 0
        }).fromTo('.head',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.head').innerText = 'Continuous Evolution'
            },
            y: 0,
            opacity: 1
        }).to('.head', {
            duration: 1,
            delay: 2,

            opacity: 0
        })

        //  CONTENT ==========

        tl3.fromTo('.cont',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.cont').innerText = 'Intelligent project analysis and resource allocation for optimal delivery timelines'
            },
            y: 0,
            opacity: 1
        }).to('.cont', {
            duration: 1,
            delay: 2,

            opacity: 0
        }).fromTo('.cont',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.cont').innerText = 'AI-assisted coding and automated testing for faster development cycles'
            },
            y: 0,
            opacity: 1
        }).to('.cont', {
            duration: 1,
            delay: 2,

            opacity: 0
        }).fromTo('.cont',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.cont').innerText = 'AI-driven testing and automated quality assurance processes'
            },
            y: 0,
            opacity: 1
        }).to('.cont', {
            duration: 1,
            delay: 2,

            opacity: 0
        }).fromTo('.cont',
            {
                duration: 1,

                opacity: 0
            }, {
            duration: 1,
            onStart: () => {
                document.querySelector('.cont').innerText = 'AI-powered monitoring and proactive optimization'
            },
            y: 0,
            opacity: 1
        }).to('.cont', {
            duration: 1,
            delay: 2,

            opacity: 0
        })
    })
    return (
        <div className='aisection'>
            <div className="services-head">
                <div className='stroke'>Our</div> <div className='fill'>AI-Enhanced Process</div>

            </div>

            <div className="scrollCards w-[100%]  min-h-[500px] !mt-10 relative">
                <div className="card h-[100%] min-h-[500px] flex flex-row gap-5 justify-center items-center   !p-10">
                    <div className="number flex-1  "></div>
                    <div className=' aicontent flex-3 flex flex-col  gap-10 justify-start  h-[100%]'>
                        <div className="head"></div>
                        <div className="cont"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aisection