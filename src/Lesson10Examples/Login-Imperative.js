import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async values => {
        const response = await axios.Login(values);
        if (response.success){
            navigate('/profile', {replace: true});
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <button type='submit'></button>
            </form>
        </div>
    )
}