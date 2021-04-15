import './pipe.css'
import pipePicture from '../../images/pipe.png';

function Pipe(props){
    return(<>
            <div style={{left:props.pipePosition+'%',top:props.pipeTopHeight+'%'}}className="pipeContainerTop">
            <img className="pipePicTop" src={pipePicture} alt=""/>
            
            </div>
            <div style={{left:props.pipePosition+'%',top:props.pipeBottomHeight+'%'}}className="pipeContainerBottom">
            <img className="pipePicBottom" src={pipePicture} alt=""/>
            
            </div>
            </>);
}

export default Pipe; 