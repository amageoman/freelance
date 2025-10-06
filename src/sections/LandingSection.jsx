import GradientBlinds from '../components/PlasmaBg';
import '../css/landing.css'
const LandingSection = () => {
    return (
        <div className='grid place-items-center min-h-screen' style={{ width: '100%',  position: 'relative' }}>
            <GradientBlinds
                gradientColors={['#123450', '#123450']}
                angle={45}
                noise={.2}
                blindCount={10}
                blindMinWidth={50}
                spotlightRadius={0.5}
                spotlightSoftness={1}
                spotlightOpacity={.6}
                mouseDampening={0.15}
                distortAmount={0}
                shineDirection="right"
                mixBlendMode="lighten"
            />

            <div className=' title absolute top-[20%] md:top-[20%] !mx-5 md:!mx-[160px]   text-center '>
                <span className='!text-[20px] md:!text-[40px] lg:!text-[60px] text-center '>Current Cloud AI</span>

            </div>

            <br />
            <div className='sub-title !text-[10px] top-[30%]  md:!text-[25px] absolute md:top-[calc(40%)] !mx-5 md:!mx-[50px]  w-auto text-center '> 

                Looking for an efficient team? We deliver software projects 3x faster with our AI-enhanced development process</div>

            <br />

            <div className="button-container flex gap-10 w-[60%] absolute top-[45%] md:top-[calc(60%)]">
                <button>Find your dream team</button><button>Contact Us</button>
            </div>
        </div>

    )
}

export default LandingSection