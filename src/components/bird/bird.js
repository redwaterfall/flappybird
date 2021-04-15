import './bird.css'
import birdPicture from '../../images/bird.png';

function Bird(props){
    //console.log('props.birdPosition ' + props.birdPosition);
    return(<div style={{top: props.birdPosition+'%',left:props.birdPositionLeft}} className="birdContainer">
            <img  className="birdPic" src={birdPicture} alt=""/>
            </div>);
}

export default Bird; 