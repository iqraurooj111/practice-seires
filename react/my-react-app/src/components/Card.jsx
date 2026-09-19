
import Button from './Button';

function Card({ title, description }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '280px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    color: '#333',
    margin: '10px'
  };

  const handleClick = () => {
    alert(`Aap ne "${title}" ke button par click kiya!`);
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: '#666' }}>{description}</p>
      <Button text="Learn More" onClick={handleClick} />
    </div>
  );
}

export default Card;