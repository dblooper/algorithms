import logo from './logo.svg';
import './App.css';
import InsertionSort from './sorting-algorithms/insertion-sort/InsertionSort';
import BubbleSort from './sorting-algorithms/bubble-sort/BubbleSort';
import SelectionSort from './sorting-algorithms/selection-sort/SelectionSort';
import { Button } from '@material-ui/core';
import QuickSort from './sorting-algorithms/quick-sort/QuickSort';

function App() {
  const beginArray = ((num) => {
      let arr = [];
      for(let i = 1; i <= num; i++) {
          arr.push(i);
      }
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
      return arr;
  })(80)

  let triggerSort = (fnct) => {
    fnct();
  }
  
  return (
    <div >
      <header >
      </header>
      <main >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <InsertionSort array={[...beginArray]} />
          <BubbleSort array={[...beginArray]} />
          <SelectionSort array={[...beginArray]} />
          <QuickSort array={[...beginArray]} />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Button style={{width: '50%'}} variant="outlined" color="success" onClick={console.log('hello')}>Sort</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
