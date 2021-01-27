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
    // const [moveAngle, setMoveAngle] = useState(0);
    // var isActive = false;
    // var fromX, fromY;
    // document.addEventListener("mousedown", (ev) => {
	// 	isActive = true;
	// 	fromX = ev.offsetX;
	// 	fromY = ev.offsetY;
	// });

	// document.addEventListener("mouseup", (ev) => {
	// 	isActive = false;
	// 	// setMoveAngle(90);
	// });

	// document.addEventListener("mousemove", (ev) => {
	// 	if (isActive) {
	// 		var toX = ev.offsetX;
	// 		var toY = ev.offsetY;
	// 		var move = (-1) * Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
	// 		console.log("move ======== " + move);
	// 		setMoveAngle(move);
	// 	}
	// });
    const [position, setPosition] = useState({
        x: 50,
        y: 50,
        active: false,
        offset: { }
    });
    const handleMouseDown = e => {
        const el = e.target;
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left;
        const y = e.clientY - bbox.top;
        el.setPointerCapture(e.pointerId);
        setPosition({
        ...position,
        active: true,
        offset: {
            x,
            y
        }
        });
    };
    const handleMouseMove = e => {
        const bbox = e.target.getBoundingClientRect();
        const x = e.clientX - bbox.left;
        const y = e.clientY - bbox.top;
        if (position.active) {
        setPosition({
            ...position,
            x: position.x - (position.offset.x - x),
            y: position.y - (position.offset.y - y)
        });
        }
    };
    const handleMouseUp = e => {
        setPosition({
        ...position,
        active: false
        });
    };

    const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple", "black", "green"];
    // const colors = ["red", "orange", "yellow", "green", "blue", "navy"];
    var interval = 360/(colors.length);
    var rotate = -interval;
    const centerPos = 400;
    var translateX = 0;
    var translateY = 0;
    
    const cards = colors.map((value) => {
        rotate += interval;
        // translateX = Math.floor(200*Math.cos(toRadians(rotate+moveAngle))) + centerPos;
        // translateY = Math.floor(200*Math.sin(toRadians(rotate+moveAngle))) + centerPos;
        // return <Card translateX={translateX} translateY={translateY} rotate={rotate-90+moveAngle} color={value} />
        translateX = Math.floor(200*Math.cos(toRadians(rotate))) + centerPos;
        translateY = Math.floor(200*Math.sin(toRadians(rotate))) + centerPos;
        return <Card translateX={translateX} translateY={translateY} rotate={rotate-90} color={value} />
    });
    console.log(position)
    return (
        <div className="App"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
        {cards}
        </div>
    );
}
function toRadians(degrees) {	
	return degrees * (Math.PI / 180);
}
function toDegree(radians){
    return radians * (180/Math.PI);
}
// function getAngle(x, y) {
// 	return radiansToDegrees(Math.atan2(circleY - y, x - circleX));
// }
export default App;
