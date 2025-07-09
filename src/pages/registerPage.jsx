import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RegisterForm from "../components/registerForm";
import bg from "../assets/imagens/bg.png"


const RegisterPage = () => {
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <div
                className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center"
                style={{backgroundImage: `url(${bg})`}}
                >  
                    <Navbar/>
                    <div className="flex-grow flex items-center justify-center p-30">
                    <RegisterForm/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;