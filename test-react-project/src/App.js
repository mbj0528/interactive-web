import './App.css';
import {useState} from 'react';
import Card from './card/Card';
import Circle from './circle/Circle';

//////////////////

// function App() {
//   return (
//       <svg className="App">
//           <Circle/>
//       </svg>

//   );
// }

// export default App;

function App() {
    const [moveAngle, setMoveAngle] = useState(0);
    var isActive = false;
    var fromX, fromY;
    document.addEventListener("mousedown", (ev) => {
		isActive = true;
		fromX = ev.offsetX;
		fromY = ev.offsetY;
	});

	document.addEventListener("mouseup", (ev) => {
		isActive = false;
		// setMoveAngle(90);
	});

	document.addEventListener("mousemove", (ev) => {
		if (isActive) {
			var toX = ev.offsetX;
			var toY = ev.offsetY;
			var move = (-1) * Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
			console.log("move ======== " + move);
			setMoveAngle(move);
		}
	});


    const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple", "red", "orange"];
    var interval = 360/(colors.length);
    var translateX = 0;
    var translateY = 0;
    const centerPos = 400;
    var rotate = -180;
    const cards = colors.map((value) => {
        rotate += interval;
        // translate.x = Math.floor(100*Math.cos(toRadians(rotate))) + centerPos.x;
        // translate.y = Math.floor(100*Math.sin(toRadians(rotate))) + centerPos.y;
        translateX = Math.floor(100*Math.cos(toRadians(rotate))) + centerPos;
        translateY = Math.floor(100*Math.sin(toRadians(rotate))) + centerPos;
        return <Card translateX={translateX} translateY={translateY} rotate={rotate} color={value} />
    });

  return (
    <div className="App">
      {cards}
      angle={moveAngle} 
    </div>
  );
}
function toRadians(degrees) {	
	return degrees * (Math.PI / 180);
}

export default App;

///////////////////////////

// const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
//     var translateX = 0;
//     var rotate = -120;
//     const cards = colors.map((value) => {
//      translateX += 100;
//      rotate += 30;
//     return <Card translateX={translateX} rotate={rotate} angle={moveAngle} color={value} />
//   });

//   return (
//     <div className="App">
//       {cards}
//     </div>
//   );
// }