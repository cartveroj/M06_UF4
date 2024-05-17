/* eslint-disable react/prop-types */

const Button = ({ type, onClick, texto, className = '' }) => {
  return (
    <button style={styles.button}
      type={type}
      onClick={onClick}
      className={`my-button ${className}`}
    >
      {texto}
    </button>
  );
};
const styles = {
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
export default Button;