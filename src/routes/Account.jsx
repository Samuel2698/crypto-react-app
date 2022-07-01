import React from "react";
import SavedCoin from "../components/SavedCoin";

const Account = () => {
  return (
    <div className="max-w-[1140px} mx-auto">
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div>
          <h1 className="text-2xl font-bold">Compte</h1>
          <div>
            <p>Bienvenue, user</p>
          </div>
        </div>
        <div>
          <button className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-lg">
            Déconnexion
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px]">
          <h1>Mes cryptos préférées</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
};

export default Account;
