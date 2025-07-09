import React, { useState } from "react";
import bg from "../assets/imagens/bg.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Mensagem enviada por: ${formData.name}, ${formData.email}`);
    console.log(`Mensagem: ${formData.message}`);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div
        className="h-[685px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Entre em Contato
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23d3ca] text-sm"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23d3ca] text-sm"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23d3ca] text-sm"
                placeholder="Digite sua mensagem..."
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#23d3ca] hover:bg-[#10b9b9] text-white px-6 py-2 rounded-lg transition duration-300 cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
