import { Button, Typography } from '@material-ui/core';
import React from 'react'

const QuickSort = (props) => {
    let beginArray = [...props.array];
    const [arrayToSort, setArrayToSort] = React.useState([...beginArray]);
    const [rerender, setRerender] = React.useState([]);
    const quickSortHelper = (array, left, right, arr) => {
        let index = 0;
        if(array.length > 1) {
            index = partition(array, left, right, arr);
            if(left < index - 1) {
                arr.push([...array])
                quickSortHelper(array, left, index-1, arr);
            }
            if(index < right) {
                arr.push([...array])
                quickSortHelper(array, index, right, arr);
            }
        }
        return array;
    }

    const partition = (array, left, right, arr) => {
        let pivot = array[Math.floor((right + left) / 2)];
        console.log(pivot);
        while(left <= right) {
            while(pivot > array[left]) {
                left++;
            }
            while(pivot < array[right]) {
                right--;
            }
            if(left <= right) {
                let temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                left++;
                right--;
            }
            arr.push([...array])
        }
        return left;
    }

    const sort = () => {
        beginArray = [...props.array];
        console.log("initial array: " + beginArray)
        let arr = [];
        quickSortHelper(beginArray, 0, beginArray.length - 1, arr)
        setRerender([...arr]);
    }
    
    React.useEffect(() => {
        let currInd = 0
        const interval = setInterval(() => {
            if(!rerender.length || rerender.length <= currInd) {
                clearInterval(interval)
                return
            };
            setArrayToSort([...rerender[currInd]]);
            currInd += 1;
        }, 100) 
        return () => clearInterval(interval);
    }, [rerender])
  
    return (
        <div style={{margin: '1rem', display:'inline-block', textAlign: 'center',  width:'100%'}}>
            <Typography variant="h2">Quick   Sort</Typography>
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

export default QuickSort
