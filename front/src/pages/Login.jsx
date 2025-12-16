import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const Login = () => {
  const {user, setUser} = useUserContext()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc)
        setRedirect(true)
      } catch (error) {
        alert(`Erro ao logar! ${error.response.data}`)
      }
    } else {
      alert("Você precisa preencher o email e a senha!")
    }
  };

  if (redirect || user ) return <Navigate to={'/'} />

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-7 px-4 md:px-0">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-2"
        >
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Digite seu email"
            className="outline-primary-600 w-full rounded-full border border-gray-300 px-4 py-2 active:outline-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            className="outline-primary-600 w-full rounded-full border border-gray-300 px-4 py-2 active:outline-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-primary-600 mt-2 text-md hover:bg-primary-400 w-full cursor-pointer rounded-full px-4 py-2 text-white transition-colors duration-300 hover:scale-101">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?
          <Link
            to={"/register"}
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
