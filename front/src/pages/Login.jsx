import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex flex-col items-center gap-7 max-w-96 w-full px-4 md:px-0">
        
          <h1 className="text-3xl font-bold">Faça seu login</h1>

          <form action="" className="flex justify-center items-center w-full flex-col gap-4">
          <input
          id="email" 
          type="email"
          name="email"
          placeholder="Digite seu email"
          className="w-full border border-gray-300 rounded-full px-4 py-2 active:outline-1 outline-primary-600"/>
          
          
             <input
          id="password" 
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="w-full border border-gray-300 rounded-full px-4 py-2 active:outline-1 outline-primary-600"/>
          
          <button className="cursor-pointer bg-primary-600 text-white text-md w-full px-4 py-2 rounded-full hover:bg-primary-400 transition-colors duration-300 hover:scale-101">
          Login
          </button> 

          </form>

          <p>
            Ainda não tem uma conta?  
            <Link 
            to={"/"} 
            className="underline px-1 text-sm text-center font-semibold"
            >Registre-se aqui!</Link>
          </p>        
      
      </div>
    </section>
  );
};

export default Login;
