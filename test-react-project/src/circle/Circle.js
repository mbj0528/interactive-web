import {useState} from 'react';
import './Circle.css';

function Circle() {
  const [position, setPosition] = useState({
      x: 50,
      y: 50,
      active: false,
      offset: { }
  });
  const handlePointerDown = e => {
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
  const handlePointerMove = e => {
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
  const handlePointerUp = e => {
    setPosition({
      ...position,
      active: false
    });
  };

  return (
    <circle
      cx={position.x}
      cy={position.y}
      r={30}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      fill={position.active ? "red" : "black"}
    />
  );
};  
export default Circle;