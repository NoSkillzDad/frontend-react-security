import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {

    const {logged, loginFunction} = useContext(AuthContext);

    const renderLogin = (islogged) => {

        console.log(islogged.toString());
        console.log(logged.toString());

      return (
          islogged ? (
              <>
                  <>Jij ben al logged in!</>
              </>
          ) : (
              <>
                  <h1>Inloggen</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

                  <form>
                      <p>*invoervelden*</p>
                      <button onClick={loginFunction}>Inloggen</button>
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