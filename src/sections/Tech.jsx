import { useGSAP } from '@gsap/react'
import '../css/Tech.css'
import gsap from 'gsap'


const Tech = () => {

    const frontendtechs = [
        {
            icon: 'reactlogo',
            label: "React JS"
        },
        {
            icon: 'reactlogo',
            label: "Angular JS"
        },
        {
            icon: 'reactlogo',
            label: "Next JS"
        },
        {
            icon: 'reactlogo',
            label: ""
        },
        {
            icon: 'reactlogo',
            label: "5"


        }
    ]
    const backendtechs = [
        {
            icon: 'reactlogo',
            label: "1"
        },
        {
            icon: 'reactlogo',
            label: "2"
        },
        {
            icon: 'reactlogo',
            label: "3"
        },
        {
            icon: 'reactlogo',
            label: "4"
        }
    ]
    const cloudtechs = [
        {
            icon: 'reactlogo',
            label: "1"
        },
        {
            icon: 'reactlogo',
            label: "2"
        },
        {
            icon: 'reactlogo',
            label: "3"
        },
        {
            icon: 'reactlogo',
            label: "4"
        }
    ]
    const aiml = [
        {
            icon: 'reactlogo',
            label: "1"
        },
        {
            icon: 'reactlogo',
            label: "2"
        },
        {
            icon: 'reactlogo',
            label: "3"
        },
        {
            icon: 'reactlogo',
            label: "4"
        },
        {
            icon: 'reactlogo',
            label: "5"
        }
    ]



    useGSAP(() => {

        // const rows = document.querySelectorAll('.tech-row')

        // rows.forEach((row,index)=>{
        //           let path = document.getElementById(`path${index}`)
        // const cards = row.querySelectorAll('.tech-card')
        // cards.forEach((card, i) => {

        //     gsap.to(card, {

        //         delay: i*.5,
        //         repeat: -1,
        //         duration: .5*cards.length,
        //         // duration: 20,
        //         yoyo: false,
        //         ease: 'none',
        //         motionPath: {
        //             path: path,
        //             align: path,
        //             autoRotate: false,
        //             alignOrigin: [1, 0.5],
        //             start: 0,     // 👈 start of path
        //             end: 1
        //         }
        //     })
        // })
        // })
        const rows = document.querySelectorAll('.tech-row')

        rows.forEach((row,index) => {
gsap.set(row,{
    xPercent:index%2==0?0:-50
})
            gsap.timeline({repeat:-1}).to(row, {
                xPercent: index%2==0?-50:0,
                repeat: -1,
                duration: 20,
                ease: 'none'
            }).set(row,{
                xPercent:0
            })

        })


    })
    return (
        <div className='tech-container '>

            <div className="services-head">
                <div className='stroke'>Our</div> <div className='fill'>Tech stack</div>

            </div>

            <div className="row-container overflow-hidden">

                <div id='row1' className="tech-row row-1 ">


                    {frontendtechs.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}
                    {frontendtechs.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}


                </div>

                {/* ROW  2   -------------- */}

                <div className="tech-row row-2 relative">


                    {backendtechs.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}
                    {backendtechs.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}




                </div>

                {/* ROW 3 ------------ */}

                <div className="tech-row row-3 relative">


                    {cloudtechs.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}
                    {cloudtechs.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}




                </div>

                {/* ROW 4 -------------- */}

                <div className="tech-row row-4 relative">


                    {aiml.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}
                    {aiml.map((item) => {
                        return (

                            <div className={`tech-card  aspect-square`} >
                                <div>{item.label}</div>
                            </div>

                        )
                    })}




                </div>

            </div>
        </div>
    )
}

export default Tech