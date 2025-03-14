import Navbar from "./Navbar"

export const HeroSection = ()=>{
    return(
        <>
        <section className="heroSection" id="heroSection">
            <Navbar/>
            <div className="container">
                <div className="banner">
                    <div className="largerBox">
                        <h1 className="title">Delicious</h1>
                    </div>
                    <div className="combined_boxes">
                        <div className="imageBox">
                            <img src="/hero1.png" alt="" />
                        </div>
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h1 className="title">Food</h1>
                                <h1 className="title dishes_title">Dishes</h1>
                                <img src="/threelines.svg" alt="" />
                            </div>
                            <img src="/logo.svg" alt="" className="logo"/>
                        </div>

                    </div>
                </div>

                <div className="banner">
                    <div className="imageBox">
                        <img src="/hero2.png" alt="hero 2" />
                    </div>
                    <h1 className="title dishes_title">Dishes</h1>
                </div>
            </div>

        </section>
        </>
    )
}