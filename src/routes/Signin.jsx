import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

const Signin = () => {
  return (
    <div>
        <div>
          <h1>Connexion</h1>
          <form>
            <div>
              <label>E-mail</label>
              <div>
                <input type="email" />
                <AiOutlineMail />
              </div>
            </div>
            <div>
              <label>Mot de passe</label>
              <div>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signin