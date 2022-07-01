import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          Vous n'avez aucune crypto enregistrée. Veuillez enregistrer une crypto
          pour l'ajouter à votre liste de surveillance.{" "}
          <Link to="/"> Cliquez ici pour rechercher des cryptos.</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Position #</th>
              <th className="text-left">Crypto</th>
              <th className="text-left">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img src={coin?.image} className="w-8 mr-4" alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
