import { Button } from '@material-ui/core';
import React from 'react'
const InsertionSort = () => {
    let beginArray = [1,100,7,4,5,39,2,11,94,19, 13, 14, 98, 87, 85];
    const [arrayToSort, setArrayToSort] = React.useState([...beginArray]);
    const [rerender, setRerender] = React.useState([]);
    const [currInd, setCurrInd] = React.useState(0);
    const insert = (array, position, currValue) => {
        let i = position - 1;
        while(i >= 0 && array[i] > currValue) {
            array[i+1] = array[i];
            i--;
        }
        array[i+1] = currValue;
    }

    const sort = () => {
        let arr = [];
        for(let i = 0; i < beginArray.length; i++) {
            insert(beginArray, i, beginArray[i]);
            arr.push([...beginArray]);
        }
        setRerender([...arr]);
    }
    React.useEffect(() => {
        setTimeout(() => {
            if(!rerender.length || rerender.length >= currInd) return;
            console.log(rerender[currInd])
            setArrayToSort(rerender[currInd]);
            setCurrInd(currInd+1);
        }, 1000)
    
    }, [rerender])
  
    return (
        <div style={{margin: '1rem', display:'block',  width:'100%', height:'400px'}}>
            <div style={{height: '400px'}}>
                {arrayToSort.map((el, ind)=> (<div key={ind} style={{
                                                display: 'inline-block',
                                                alignSelf: 'flex-end',
                                                backgroundColor: 'blue', 
                                                border: '1px solid black',
                                                height: `${el}%`,
                                                width: '5px'}}>

                </div>))}
            </div>
            <Button onClick={sort}>Sort</Button>
        </div>
    )
}

export default InsertionSort
