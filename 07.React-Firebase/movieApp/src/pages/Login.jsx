/* eslint-disable react/prop-types */
import FormLogin from "../componentes/FormLogin";

const Login = ({setUser}) => {
    return (
        <>
        <FormLogin setUser={setUser}></FormLogin>
        </>
    );

}

export default Login;