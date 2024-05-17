/* eslint-disable react/prop-types */

//componente boton que revibe diferentes propiedades para la funcionalidad del boton
const Button = ({ type, onClick, texto,  }) => {
  return (
    <button style={styles.button}
      type={type}
      onClick={onClick}>
      {texto}
    </button>
  );
};
const styles = {
    button: {
      padding: "10px 20px",
      backgroundColor: "blueViolet",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
export default Button;