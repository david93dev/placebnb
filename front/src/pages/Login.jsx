import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    a
  };

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-7 px-4 md:px-0">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-4"
        >
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            className="outline-primary-600 w-full rounded-full border border-gray-300 px-4 py-2 active:outline-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="outline-primary-600 w-full rounded-full border border-gray-300 px-4 py-2 active:outline-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-primary-600 text-md hover:bg-primary-400 w-full cursor-pointer rounded-full px-4 py-2 text-white transition-colors duration-300 hover:scale-101">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?
          <Link
            to={"/"}
            className="px-1 text-center text-sm font-semibold underline"
          >
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
