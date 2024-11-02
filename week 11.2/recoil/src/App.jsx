import { useState } from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
// import { counterAtom } from './store/atoms/counter';

function App() {

  return (
    <RecoilRoot>
     <Counter />
    </RecoilRoot>
  )
}

function Counter() {

  return <div>
      <h1>counter</h1>
  </div>
}








export default App




// counter.js
