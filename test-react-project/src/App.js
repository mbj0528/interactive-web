import './App.css';
import Card from './card/Card';

function App() {

  const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
  var translateX = 0;
  var rotate = -120;
  const cards = colors.map((value) => {
    translateX += 100;
    rotate += 30;
    return <Card translateX={translateX} rotate={rotate} color={value} />
  });

  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;