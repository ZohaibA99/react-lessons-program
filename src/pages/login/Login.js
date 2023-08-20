import React from 'react';

function Login ({loginHandler, path}){
    console.log(loginHandler);
    return (
        <div>
            <button onClick={() => loginHandler(true, path)}>Login</button>
        </div>
    )
}

export default Login;