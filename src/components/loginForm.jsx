import React, {use, useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Email:${email} \nSenha:${senha}`)
    }



    return(
        <>
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-[22px] font-semibold text-center mb-6">Login</h2>
            <form>
                <div>
                    <label>E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                        focus:ring-2 focus:ring-[#23d3ca] text-sm sm:text-base"
                        placeholder="Digite seu email"
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                        focus:ring-2 focus:ring-[#23d3ca] text-sm sm:text-base"
                        placeholder="Digite sua senha"
                    />
                </div>
                <button type="submit" className="w-full bg-[#23d3ca] hover:bg-[#10b9b9] text-white px-6 py-2 
                rounded-lg transition duration-300 sm:2-full mt-2 cursor-pointer">
                        Entrar
                    </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">Não tem conta?
            <a href="/register" className="text-[#23d3ca] hover:underline text-center p-2">Cadastre-se</a>
            </p>
        
        
        </div>
        </>
    )
}

export default LoginForm;