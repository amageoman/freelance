import { useGSAP } from '@gsap/react'
import '../css/Services.css'
import { Timeline } from 'gsap/gsap-core'
import gsap from 'gsap'
const Services = () => {

    useGSAP(()=>{
    const cards = document.querySelectorAll('.service-card')

    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 40%',
          scrub:true,
        },
        opacity: 0,
        scale:0,
        ease: 'power2.out',
      })
    })
    })
    return (
        <div className='services relative'>
            <div className="services-head">
                <div className='stroke'>Our</div> <div className='fill'>services</div>
            </div>



            <div className="services-cards-container p-5 flex flex-col gap-[20px]">
                <div className="service-card">
                    <div className="domain">Web development</div>
                    <div className="desc">Modern web applications built with cutting-edge technologies and AI-assisted coding for optimal performance.

                        <div className='!mt-5 !px-5'>
                            <ul>
                                <li>Progressive Web Apps</li>
                                <li>AI-Enhanced UX</li>
                                <li>Responsive Design</li>
                                <li>Performance Optimization</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="service-card">
                    <div className="domain">App Development</div>
                    <div className="desc">Native and cross-platform mobile applications powered by AI-driven development tools and automated testing.

                        <div className='!mt-5 !px-5'>
                            <ul>
                                <li>iOS & Android Apps</li>
                                <li>Cross-platform Solutions</li>
                                <li>AI-powered UI/UX</li>
                                <li>Automated Testing</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="service-card">
                    <div className="domain">DevOps Excellence</div>
                    <div className="desc">Streamlined development operations with AI-powered automation and intelligent infrastructure management.
                        <div className='!mt-5 !px-5'>
                            <ul>
                                <li>CI/CD Automation</li>
                                <li>Infrastructure as Code</li>
                                <li>AI-Driven Monitoring</li>
                                <li>AI-Driven Monitoring</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="service-card">
                    <div className="domain">Cloud Infrastructure</div>
                    <div className="desc">Smart cloud solutions that adapt to your needs with AI-powered optimization and management.

                        <div className='!mt-5 !px-5'>
                            <ul>
                                <li>Multi-Cloud Strategy</li>
                                <li>Cost Optimization</li>
                                <li>Security Automation</li>
                                <li>Performance Tuning</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services