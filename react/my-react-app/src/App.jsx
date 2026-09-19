 import Card from './components/Card';
import Button from './components/Button';

function App() {
  const handleMainButtonClick = () => {
    alert("Main Button Clicked!");
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Components Practice</h1>
      
      {/* Direct Standalone Button */}
      <div style={{ marginBottom: '30px' }}>
        <h3>Standalone Button:</h3>
        <Button text="Click Main Button" onClick={handleMainButtonClick} />
      </div>

      <hr />

      {/* Cards Display Section */}
      <h3>Card Components (Reusable):</h3>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card 
          title="React JS Course" 
          description="React frontend library seekhein aur modern dynamic web applications banayein." 
        />
        <Card 
          title="Vite Build Tool" 
          description="Vite ke zariye ultra-fast dev server setup aur super quick HMR experience hasil karein." 
        />
      </div>
    </div>
  );
}

export default App;