import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutCard from "../components/aboutCard";
import bg from "../assets/imagens/bg.png"


const AboutPage = () => {
    return(
        <>  
        <Navbar/>
        <div
            className="text-white bg-cover bg-center relative"
            style={{backgroundImage: `url(${bg})`}}
        >  
            <div className="flex flex-col blur-sm">
                
                    </div>

                    <div>
                        <AboutCard/>
                    </div>

                <Footer/>
            </div>
        </>
    )
}

export default AboutPage;