import {Navigate, useState} from 'react-router-dom';


export const Login = () => {
    const [isLoginSuccess,  setIsLoginSuccess] = useState(false);

    const handleSubmit = async values => {
        const response = await axios.Login(values);
        setIsLoginSuccess(response.success);
    }

    if (isLoginSuccess){
        return <Navigate to='/profile' replace></Navigate>
    } 

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}