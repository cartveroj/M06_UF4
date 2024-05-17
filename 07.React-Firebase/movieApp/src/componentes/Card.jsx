/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

//componente que recibe por parametros titulo y la direccion de enrutamiento
const Card = ({title, link})=>{
    return(
        <>
            <div style={styles.card}>
                <Link to={link} style={styles.link}> {title}</Link>
            </div>
        </>
    );
}
const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "20px",
      margin: "10px",
      textAlign: "center",
      background:"blueviolet"
    },

    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
export default Card;