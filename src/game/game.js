import './game.css';
import Bird from '../components/bird/bird';
import Pipe from '../components/pipe/pipe';
import backgroundPic from '../images/backgroundfloppybird.png';
//import Gameover from '../components/gameoverpage/gameover';
import { useEffect, useState, useRef } from 'react';
console.clear();
function Game(){
 
    const [birdPosition, setBirdPosition] = useState( 50);
    const [pipePosition, setpipePosition] = useState([100]);
    const [pipePositionSecond, setpipePositionSecond] = useState([150]);
    //const [pipeTopHeight, setPipeTopHeight] = useState([-10,-30])
    const pipeTopHeight = [-10,-30];
    //const [pipeBottomHeight, setPipeBottomHeight] = useState([70,40])
    const pipeBottomHeight = [70,40];
    const [gameover, setGameover] = useState(false)
    const [score, setScore] = useState(0)
    const [visibility, setVisibility] = useState('hidden')
    const windowHeight = (window.innerHeight );
    const gravity = 3;
    const antiGravity = 9;
    let animateFale;
    let gameOverVisible = {'visibility':'hidden'}
    function fly(){
        
            if(birdPosition  > 0 && !gameover){
            setBirdPosition( birdPosition => birdPosition -antiGravity);
        }
    }
    useEffect(() => {
        if(birdPosition < 100 && !gameover){
                if(birdPosition  < 50 + pipeTopHeight[0] && (pipePosition < 62 && pipePosition > 50) || 
                    birdPosition  >  pipeBottomHeight[0] && (pipePosition < 62 && pipePosition > 50)){
                    console.log(' GAME OVER ');
                    setVisibility('visible');
                    setGameover(true);
                }
                else if(birdPosition  < 50 + pipeTopHeight[1] && (pipePositionSecond < 62 && pipePositionSecond > 50) ||
                        birdPosition  >  pipeBottomHeight[1] && (pipePositionSecond < 62 && pipePositionSecond > 50)){
                        console.log(' GAME OVER ');
                        setVisibility('visible');
                        setGameover(true);
                }
                else if(pipePosition == 40 || pipePositionSecond == 40){
                    setScore(score + 1);
                }
            
            animateFale = setInterval(() => {
                setBirdPosition( birdPosition => birdPosition + gravity);
                if(pipePosition < 0){
                    setpipePosition(pipePosition => pipePosition = 100);
                }
                setpipePosition(pipePosition => pipePosition - 5);
                

                if(pipePositionSecond < 0){
                    setpipePositionSecond(pipePositionSecond => pipePositionSecond = 100);
                }
                setpipePositionSecond(pipePositionSecond => pipePositionSecond - 5);
            }, 150)
            return () => {
                clearInterval(animateFale);
            }
        }
    },[birdPosition]);
  
    return(<div  onClick={fly} className="gameContainer">
            <img src={backgroundPic} className="background" />
            <Bird  birdPosition={birdPosition} />
            <Pipe style={{left:'460%'}} pipeTopHeight={pipeTopHeight[0]} pipeBottomHeight={pipeBottomHeight[0]}  pipePosition={pipePosition}/>   
            <Pipe style={{left:'560%'}} pipeTopHeight={pipeTopHeight[1]} pipeBottomHeight={pipeBottomHeight[1]}  pipePosition={pipePositionSecond}/> 
                <div style={{'visibility':visibility}} className="gameovercontainer">
                <h1 className="gameoverelement">GAME OVER</h1>
                <h1 className="gameoverelement">SCORE {score}</h1>
                <button onClick={()=>{setVisibility('hidden');setGameover(false); setScore(0); setpipePositionSecond(150); setpipePosition(100);setBirdPosition(50) }}>NEW GAME</button>
            </div>
    </div>);
}

export default Game;