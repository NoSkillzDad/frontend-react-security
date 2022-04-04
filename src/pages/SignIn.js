import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {

    const {logged, loginFunction, user : {name}} = useContext(AuthContext);

    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();

    const renderLogin = (islogged) => {

      return (
          islogged ? (
              <>
                  <>Hey {name}, jij ben logged in!</>
              </>
          ) : (
              <>
                  <h1>Inloggen</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

                  <form>
                      <p>*invoervelden*</p>
                      <input type={"text"} name={"name"} onChange={e => setInputName(e.target.value)} placeholder={"Naam"}/>
                      <input type={"email"} name={"email"} onChange={e => setInputEmail(e.target.value)} placeholder={"Email"}/>
                      <button onClick={() => loginFunction(inputName, inputEmail)}>Inloggen</button>
                  </form>

                  <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
              </>
          )
      )
    }

  return (
    <>
        {renderLogin(logged)}
    </>
  );
}

export default SignIn;