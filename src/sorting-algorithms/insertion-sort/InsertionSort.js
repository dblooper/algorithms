import { Button, Typography } from '@material-ui/core';
import React from 'react'
const InsertionSort = (props) => {
    let beginArray = [...props.array];
    const [arrayToSort, setArrayToSort] = React.useState([...beginArray]);
    const [rerender, setRerender] = React.useState([]);
    const insert = (array, position, arr) => {
        let currValue = array[position];
        let i = position - 1;
        while(i >= 0 && array[i] > currValue) {
            array[i+1] = array[i];
            i--;
            arr.push([...array]);
        }
        array[i+1] = currValue;
    }

    const sort = () => {
        beginArray = [...props.array];
        let arr = [];
        for(let i = 0; i < beginArray.length; i++) {
            insert(beginArray, i, arr);
            arr.push([...beginArray]);
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
        }, 10) 
        return () => clearInterval(interval);
    }, [rerender])
  
    return (
        <div style={{margin: '1rem', display:'inline-block', textAlign: 'center',  width:'100%'}}>
            <Typography variant="h2">Insertion sort</Typography>
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

export default InsertionSort
