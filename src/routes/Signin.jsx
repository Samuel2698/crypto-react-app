import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <form>
          <div className="my-4">
            <label>E-mail</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Mot de passe</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl hover:brightness-105">
            Se connecter
          </button>
        </form>
        <p className="my-4">
          Vous n'avez pas encore de compte ?
          <Link
            className="text-accent px-1 hover:brightness-125 hover:underline "
            to="/signup"
          >
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
