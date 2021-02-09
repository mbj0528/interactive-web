import './App.css';
import {useState} from 'react';
import Card from './card/Card';

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
    const centerPos = {x:window.innerWidth / 2, y:window.outerHeight + 100};
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
        x: 0,
        y: 0,
        active: false,
        offset: { }
    });
    const [degree, setDegree] = useState(0);

    const handleMouseDown = e => {
        
        // const el = e.target;
        // const bbox = e.target.getBoundingClientRect();
        // const x = e.clientX - bbox.left;
        // const y = e.clientY - bbox.top;
        // el.setPointerCapture(e.pointerId);
        const x = e.clientX;
        const y = e.clientY;
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
        
        // const bbox = e.target.getBoundingClientRect();
        // const x = e.clientX - bbox.left;
        // const y = e.clientY - bbox.top;
        // const bbox = e.target.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        if (position.active) {
            setPosition({
                ...position,
                // x: position.x - (position.offset.x - x),
                // y: position.y - (position.offset.y - y),
                x: x,
                y: y,
            });
            var fromAngle = toDegree(Math.atan2(position.offset.y - centerPos.y, position.offset.x - centerPos.x))
            var toAngle = toDegree(Math.atan2(position.y - centerPos.y, position.x - centerPos.x));
            setDegree(toAngle-fromAngle);
            console.log(degree)
        }
    };
    const handleMouseUp = e => {
        setPosition({
        ...position,
        active: false
        });
    };

    const colors = ["red", "orange", "yellow", "green", "blue",  "yellow", "green", "blue", "navy", "purple", "black", "blue", "purple", "red", "orange", "green", "navy", "blue", "yellow", "purple", "orange"];
    // const colors = ["red", "orange", "yellow", "green", "blue", "navy"];
    var interval = 360/(colors.length);
    var rotate = -interval;
    
    var translateX = 0;
    var translateY = 0;
    
    const cards = colors.map((value) => {
        rotate += interval;
        // translateX = Math.floor(200*Math.cos(toRadians(rotate+moveAngle))) + centerPos;
        // translateY = Math.floor(200*Math.sin(toRadians(rotate+moveAngle))) + centerPos;
        // return <Card translateX={translateX} translateY={translateY} rotate={rotate-90+moveAngle} color={value} />
        translateX = Math.floor(800*Math.cos(toRadians(rotate+degree))) + centerPos.x - 150;
        translateY = Math.floor(800*Math.sin(toRadians(rotate+degree))) + centerPos.y - 200;
        return <Card translateX={translateX} translateY={translateY} rotate={rotate-90+degree} color={value} />
    });
    
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
