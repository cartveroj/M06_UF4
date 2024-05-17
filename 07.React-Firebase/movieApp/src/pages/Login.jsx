/* eslint-disable react/prop-types */
import FormLogin from "../componentes/FormLogin";

//Pagina de inicio renderiza un form 

const Login = ({setUser}) => {
    return (
        <>
        <FormLogin setUser={setUser}></FormLogin>
        </>
    );

}

export default Login;