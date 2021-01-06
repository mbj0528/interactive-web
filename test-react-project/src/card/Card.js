import {useState} from 'react';
import './Card.css';

function Card({translateX, rotate, color}) {
    const [flag, setFlag] = useState(false);

    const onMouseOver = () => setFlag(true);
    const onMouseOut = () => setFlag(false);

    return (
        <div className="card-items" 
            style={{
                backgroundColor: color, 
                transform: "translate3d("+ translateX + "px, 100px, 0px) rotate(" + rotate + "deg) scale(" + (flag?1.1:1) + ")",
                zIndex: flag ? 1 : 0,
            }}
            onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
        </div>
    );
    
  }
  
  export default Card;