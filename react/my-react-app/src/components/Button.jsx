function Button({ text, onClick }) {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text || "Click Me"}
    </button>
  );
}

export default Button;