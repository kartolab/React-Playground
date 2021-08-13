
import React from "react";
import Square from "./Square";

class Board extends React.Component {
   constructor(props) {
    super(props);
    this.state={
        sqr:Array(9).fill(null),
        history:[],
        isNxt:true
    }
    
   }
 
   resetGame() {
       this.setState({
        sqr:Array(9).fill(null),
        history:[],
        isNxt:true
       })
   }
   ChkIfWinner(val) {
       //this method checks for winner or not , if winner found game ends 
       //else move to the next move with providing x or o symbol
       if(this.state.sqr[val]==null){
       this.state.sqr[val]= this.state.isNxt?'X':'o';
       this.setState({
           isNxt: !this.state.isNxt
       })
    }
       if(this.state.sqr[0]==this.state.sqr[1] && this.state.sqr[1]==this.state.sqr[2] &&  this.state.sqr[0]!==null &&this.state.sqr[2]!==null &&this.state.sqr[3]!==null ){
           alert(this.state.sqr[0] + "player wins");
           //reset the board
       }
       else if(this.state.sqr[3]==this.state.sqr[4] && this.state.sqr[4]==this.state.sqr[5]  &&  this.state.sqr[3]!==null &&this.state.sqr[4]!==null &&this.state.sqr[5]!==null ) {
        alert(this.state.sqr[3] + "player wins");
       }
       else if(this.state.sqr[6]==this.state.sqr[7] && this.state.sqr[7]==this.state.sqr[8]  &&  this.state.sqr[6]!==null &&this.state.sqr[7]!==null &&this.state.sqr[8]!==null) {
        alert(this.state.sqr[6] + "player wins");
       }
       else if(this.state.sqr[0]==this.state.sqr[3] && this.state.sqr[3]==this.state.sqr[6]  &&  this.state.sqr[0]!==null &&this.state.sqr[3]!==null &&this.state.sqr[6]!==null) {
        alert(this.state.sqr[0] + "player wins");
       }
       else if(this.state.sqr[1]==this.state.sqr[4] && this.state.sqr[4]==this.state.sqr[7]  &&  this.state.sqr[4]!==null &&this.state.sqr[7]!==null &&this.state.sqr[1]!==null) {
        alert(this.state.sqr[1] + "player wins");
       }
       else if(this.state.sqr[2]==this.state.sqr[5] && this.state.sqr[5]==this.state.sqr[8]  &&  this.state.sqr[5]!==null &&this.state.sqr[8]!==null &&this.state.sqr[2]!==null) {
        alert(this.state.sqr[2] + "player wins");
       }
       else if(this.state.sqr[0]==this.state.sqr[4] && this.state.sqr[4]==this.state.sqr[8]  &&  this.state.sqr[4]!==null &&this.state.sqr[8]!==null &&this.state.sqr[0]!==null) {
        alert(this.state.sqr[0] + "player wins");
       }
       else if(this.state.sqr[2]==this.state.sqr[4] && this.state.sqr[4]==this.state.sqr[6]  &&  this.state.sqr[6]!==null &&this.state.sqr[4]!==null &&this.state.sqr[2]!==null) {
        alert(this.state.sqr[2] + "player wins");
       }
        
   }
    render(){
        // const squares=[];
        // for(var i=0;i<9;i++){
         
        //     squares.push( <Square value={this.state.sqr[i]} onClick={()=>{this.ChkIfWinner(i)}}/>)
        // }
        return(
            <div>
                <button className="primary button" onClick={()=>this.resetGame()}>Reset Game</button>
        <div className="wrapper">

        <Square value={this.state.sqr[0]} onClick={()=>{this.ChkIfWinner(0)}}/>
        <Square value={this.state.sqr[1]} onClick={()=>{this.ChkIfWinner(1)}}/>
        <Square value={this.state.sqr[2]} onClick={()=>{this.ChkIfWinner(2)}}/>
        <Square value={this.state.sqr[3]} onClick={()=>{this.ChkIfWinner(3)}}/>
        <Square value={this.state.sqr[4]} onClick={()=>{this.ChkIfWinner(4)}}/>
        <Square value={this.state.sqr[5]} onClick={()=>{this.ChkIfWinner(5)}}/>
        <Square value={this.state.sqr[6]} onClick={()=>{this.ChkIfWinner(6)}}/>
        <Square value={this.state.sqr[7]} onClick={()=>{this.ChkIfWinner(7)}}/>
        <Square value={this.state.sqr[8]} onClick={()=>{this.ChkIfWinner(8)}}/>
    </div>
    </div>
        )
    }
}


export default Board;