import React, {useEffect, useState} from 'react';
import {useNavigate, Navigate} from 'react-router-dom';

function NotFound () {
    // const {goBackToHome, setGoBackToHome} = useState(false);

    // if(goBackToHome){
    //     return <Navigate to="./" replace={true}></Navigate>
    // }

    // useEffect(() => {
    //     const redirectHandler = () => navigate('/');
    //     redirectHandler();
    // }, [])

    const navigate = useNavigate();

    //  return (
    //     <Navigate to ='/' replace={true} />
    //  )

    return (
        <>
            <div>Page not Found</div>
            <div>
                <button onClick={() => navigate('/')}>Go Back Home</button>
            </div>
        </>
    )
}

export default NotFound;