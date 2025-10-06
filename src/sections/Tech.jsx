import { useGSAP } from '@gsap/react'
import '../css/Tech.css'
import gsap from 'gsap'


const Tech = () => {

    const frontendtechs = [
        {
            icon: 'reactlogo',
            label: "React "
        },
        {
            icon: 'reactlogo',
            label: "Flutter "
        },
        {
            icon: 'reactlogo',
            label: "Angular "
        },
        {
            icon: 'reactlogo',
            label: "Next "
        },
        {
            icon: 'reactlogo',
            label: "Vue "
        },
        {
            icon: 'reactlogo',
            label: "React Native"


        }
    ]
    const backendtechs = [
        {
            icon: 'reactlogo',
            label: "Node"
        },
        {
            icon: 'reactlogo',
            label: "Python"
        },
        {
            icon: 'reactlogo',
            label: "Java Spring"
        },
        {
            icon: 'reactlogo',
            label: "Go"
        }
    ]
    const cloudtechs = [
        {
            icon: 'reactlogo',
            label: "AWS"
        },
        {
            icon: 'reactlogo',
            label: "Google Cloud"
        },
        {
            icon: 'reactlogo',
            label: "Azure"
        },
        {
            icon: 'reactlogo',
            label: "Kubernetes"
        }
    ]
    const aiml = [
        {
            icon: 'reactlogo',
            label: "TensorFlow"
        },
        {
            icon: 'reactlogo',
            label: "pyTorch"
        },
        {
            icon: 'reactlogo',
            label: "OpenAI"
        },
        {
            icon: 'reactlogo',
            label: "Custom AI"
        },
        
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
                duration: 40,
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