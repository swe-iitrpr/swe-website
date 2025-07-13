import './Hero.css'

export default function Hero(){
    return(
        <>
            <div className="hero">
                <div className="images">
                    <div className="image item1">
                        <img src="/item1.png" alt="" />
                    </div>
                    <div className="image item2">
                        <img src="/item2.png" alt="" />
                    </div>
                    <div className="image item3">
                        <img src="/item3.png" alt="" />
                    </div>
                </div>
                <div className="text">
                    <h1>
                        <span>Empowering</span><br />
                        <span className='underline'>Women</span><br />
                        <span className='underline'>Engineers</span><br />
                    </h1>
                    <p>Join us to build, grow and lead in engineering communities</p>
                </div>
            </div>
        </>
    )
}