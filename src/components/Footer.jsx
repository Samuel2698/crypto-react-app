import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Assistance technique</h2>
            <ul>
              <li className="text-sm py-2 cursor-pointer">
                Donnez-nous votre avis
              </li>
              <li className="text-sm py-2 cursor-pointer">
                Centre d'assistance
              </li>
              <li className="text-sm py-2 cursor-pointer">
                Envoyer une demande
              </li>
              <li className="text-sm py-2 cursor-pointer">
                Vérification Bitmonnaie
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">A propos de nous</h2>
            <ul>
              <li className="text-sm py-2 cursor-pointer">A propos</li>
              <li className="text-sm py-2 cursor-pointer">Carrières</li>
              <li className="text-sm py-2 cursor-pointer">Contact</li>
              <li className="text-sm py-2 cursor-pointer">Confidentialité</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right cursor-pointer">
                S'abonner à nos infos
              </p>
              <div className="py-4">
                <form className="md:flex">
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Entrez votre e-mail:"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
                    S'inscrire
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram className="hover:text-blue-600" />
                <FaTiktok className="hover:text-blue-600" />
                <FaTwitter className="hover:text-blue-600" />
                <FaFacebookF className="hover:text-blue-600" />
                <FaGithub className="hover:text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
