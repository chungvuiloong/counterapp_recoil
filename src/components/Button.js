import React from 'react';
import {counter} from '../atom/atom';
import {
    useRecoilState
  } from 'recoil';

export default function Button(value) {
    const [count, setCount] = useRecoilState(counter);
  return (
    <button onClick={()=> value === 0 ? setCount(0) : setCount(count+value)}>{value}</button>
  )
}
