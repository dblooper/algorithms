import { Button, Typography } from '@material-ui/core';
import React from 'react'

const BubbleSort = (props) => {
    let beginArray = [...props.array];
    const [arrayToSort, setArrayToSort] = React.useState([...beginArray]);
    const [rerender, setRerender] = React.useState([]);
    const swap = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    const sort = () => {
        beginArray = [...props.array];
        let arr = [];
        for(let i = 0; i < beginArray.length; i++) {
            for(let j = 0; j <= i; j++) {
                if(beginArray[i] < beginArray[j]) {
                    swap(beginArray, i, j);
                }
                arr.push([...beginArray]);
            }
        }

        setRerender([...arr]);
    }
    
    React.useEffect(() => {
        let currInd = 0
        const interval = setInterval(() => {
            if(!rerender.length || rerender.length <= currInd) {
                clearInterval(interval)
                return
            };
            console.log(rerender[currInd])
            setArrayToSort([...rerender[currInd]]);
            currInd += 1;
        }, 1000) 
        return () => clearInterval(interval);
    }, [rerender])
  
    return (
        <div style={{margin: '1rem', display:'inline-block', textAlign: 'center',  width:'100%'}}>
            <Typography variant="h2">Bubble Sort</Typography>
            <div style={{height: '400px'}}>
                {arrayToSort.map((el, ind)=> (<div key={ind} style={{
                                                display: 'inline-block',
                                                alignSelf: 'flex-end',
                                                backgroundColor: 'blue', 
                                                border: '1px solid black',
                                                height: `${el}%`,
                                                width: '1px'}}>

                </div>))}
            </div>
            <Button onClick={sort}>Sort</Button>
        </div>
    )
}

export default BubbleSort;
