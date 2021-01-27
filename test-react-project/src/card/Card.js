import {useState} from 'react';
import './Card.css';

function Card({translateX, translateY, rotate, color}) {
    const [flag, setFlag] = useState(false);

    const onMouseOver = () => setFlag(true);
    const onMouseOut = () => setFlag(false);

    return (
        <div className="card-items" 
            style={{
                backgroundColor: color, 
                // transform: "translate3d("+ translate.x + "px, "+ translate.y + "px, 0px) rotate(" + rotate + "deg) scale(" + (flag?1.1:1) + ")",
                // transform: "translate3d("+ translateX + "px, "+ translateY + "px, 0px) rotate(" + rotate + "deg) scale(" + (flag?1.1:1) + ")",
                transform: "translate3d("+ translateX + "px, "+ translateY + "px, 0px)  rotate(" + rotate + "deg) scale(" + (flag?1.1:1) + ")",
                zIndex: flag ? 1 : 0,
            }}
            onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
        </div>
    );
    
  }
  
  export default Card;