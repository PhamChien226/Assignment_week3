import React, { Component, useState  } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HistoryPlayerData from './component/PlayerData/HistoryPlayerData'
import PlayInterfaceWrapper from './component/PlayInterface/PlayInterfaceWrapper'
import ButtonChoice from './component/choice/ButtonChoice';
import CHOICES from './data/ChoicesData'
import resultData from './data/resultData'

var _yourScore=0;
var _player2Score=0;
var _countStone =0;
var _countPaper =0;
var _countScissor =0;
var _scaleStone =0;
var _scalePaper =0;
var _scaleScissor =0;
const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = (userChoice,computerChoice) => {
  let result={};

  if (userChoice === 'Stone') {
    result = computerChoice === 'Scissor' ? resultData.win  : resultData.lose;
  }
  if (userChoice === 'Paper') {
    result = computerChoice === 'Stone' ? resultData.win : resultData.lose;
  }
  if (userChoice === 'Scissor') {
    result = computerChoice === 'Paper' ? resultData.win : resultData.lose;
  }
  if (userChoice === computerChoice) result = resultData.tie;
  return result;
};
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       playerChoice:{},
       computerChoice:{},
       result:{},
       yourScore:0,
       player2Score:0,
      yourWinRate:0,
      player2WinRate:0,
      countStone:0,
      countPaper:0,
      countScissor:0,
      scaleStone:0,
      scalePaper:0,
      scaleScissor:0,
    }
  }
  onPressButton=userChoice =>{
    const playerChoice = CHOICES.find(choice => choice.name === userChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(userChoice,computerChoice.name);
    
    if (userChoice === 'Stone') {
      _countStone++;
    }
    if (userChoice === 'Paper') {
      _countPaper++
    }
    if (userChoice === 'Scissor') {
      _countScissor++
    }
    var sumCount= _countStone + _countPaper + _countScissor;
    _scaleStone = (_countStone/sumCount*100).toFixed(0);
    _scalePaper = (_countPaper/sumCount*100).toFixed(0);
    _scaleScissor = (_countScissor/sumCount*100).toFixed(0);
    
    //tinh diem cua nguoi choi
    if(result.name === 'win') {
      // this.setState({yourScore:this.state.yourScore + 1});
      _yourScore +=1;
    } else if (result.name === 'lose'){
      // this.setState({player2Score:this.state.player2Score + 1});
      _player2Score++
    };

    var sum = _yourScore + _player2Score
    var _yourWinRate = 0;
    var _playerWinRate = 0;
    if (sum != 0) {
      _yourWinRate = _yourScore / sum;
      _playerWinRate= 1 - _yourWinRate
    }

    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      result:result,
      yourScore: _yourScore,
      player2Score: _player2Score,
      yourWinRate: _yourWinRate,
      player2WinRate:_playerWinRate,
      countStone: _countStone,
      countPaper: _countPaper,
      countScissor: _countScissor,
      scaleStone: _scaleStone,
      scalePaper: _scalePaper,
      scaleScissor: _scaleScissor,
    })
  }
  
  
  render() {
    // const [yourWinRate, setYourWinRate] = useState(0);
    // const [player2WinRate, setPlayer2WinRate] = useState(0);
    // const getScale = () => {
    // var sum = this.state.yourScore + this.state.player2Score
    // var value = 0;
    // if (sum != 0) {
    //   value = this.state.yourScore / sum;
    // }
    //   setYourWinRate(value.toFixed(2));
    //   setPlayer2WinRate(1-yourWinRate);
    // }
    // useEffect(getScale);
    return (
      <View style ={{flex:0.7}}>
        <HistoryPlayerData style={{ flex: 0.4, }}
          yourScore={this.state.yourScore}
          player2Score={this.state.player2Score}
          yourWinRate={this.state.yourWinRate}
          player2WinRate={this.state.player2WinRate}
          countStone={this.state.countStone}
          countPaper={this.state.countPaper}
          countScissor={this.state.countScissor}
          scaleStone={this.state.scaleStone}
          scalePaper={this.state.scalePaper}
          scaleScissor={this.state.scaleScissor}
      />
        <PlayInterfaceWrapper style={{ flex: 0.4, backgroundColor: 'red' }} 
          playerChoice={this.state.playerChoice}
          computerChoice ={this.state.computerChoice}
          result={this.state.result}
        />
        <ButtonChoice style={{ flex: 0.2, }}
          onPressButton={this.onPressButton}
        >
        </ButtonChoice>
      </View>
    )
  }
};

const styles = StyleSheet.create({});
