/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
const Button = ({label}) => {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/movies')
      }
    
    return(
        <>
            <button type="button" onClick={handleClick} style={styles.button}>{label}</button>
        </>
    );
}
const styles = {
    link: {
      textDecoration: "none",
      color: "inherit",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
    //   color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
export default Button;