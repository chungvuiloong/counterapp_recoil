import React from 'react';
import {counter} from '../atom/atom';
import {
    useRecoilState
  } from 'recoil';
  import {Button as MuiButton} from '@mui/material';

export default function Button(value) {
    const [count, setCount] = useRecoilState(counter);
  return (
    <MuiButton variant="contained" onClick={()=> value === 0 ? setCount(0) : setCount(count+value)}>{value}</MuiButton>
  )
}
