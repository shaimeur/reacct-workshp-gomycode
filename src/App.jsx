import './App.css'
// import ColorBigBox from './ColorsBigBox';
// import ColorBox from './ColorBox';
// import DoubleScore from './DoubleScore';
// import EmojiClicker from './EmojiClicker';
// import Counter from './counter';
import ScoreKeper from './ScoreKeper';
function App() {
  // const colors = [
  //   "#FF5722",
  //   "#E91E63",
  //   "#9C27B0",
  //   "#673AB7",
  //   "#3F51B5",
  //   "#2196F3",
  //   "#03A9F4",
  //   "#00BCD4",
  //   "#009688",
  //   "#4CAF50",
  //   "#8BC34A",
  //   "#CDDC39",
  //   "#FFEB3B",
  //   "#FFC107",
  //   "#FF9800",
  // ];

  return (
    <>
    <ScoreKeper players={10} target={3}/>
    {/* <Counter/> */}
    {/* <EmojiClicker/> */}
    {/* <DoubleScore/> */}
      {/* <ColorBigBox colors = {colors}/> */}
    </>
  )
}

export default App
