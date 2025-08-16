import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import  Landing  from './pages/Landing'
import { SideBar } from './components/SideBar'
import QuickSort from './pages/QuickSort'
import MergeSort from './pages/MergeSort'
import BubbleSort from './pages/BubbleSort'
import SelectionSort from './pages/SelectionSort'
import InsertionSort from './pages/InsertionSort'
import { Routes,Route } from 'react-router-dom'

function App() {
  const[showSideBar,setShowSideBar] = useState(false);
  return (
    <div className='bg-black'>
      <Navbar onToggleSidebar={()=>setShowSideBar(!showSideBar)} showSideBar={showSideBar}/>
      <SideBar isVisible={showSideBar} setShowSideBar={setShowSideBar} />
      <div className='pt-16'>
        <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/merge-sort" element={<MergeSort/>}></Route>
        <Route path="/quick-sort" element={<QuickSort/>}></Route>
        <Route path="/insertion-sort" element={<InsertionSort/>}></Route>
        <Route path="/selection-sort" element={<SelectionSort/>}></Route>
        <Route path="/bubble-sort" element={<BubbleSort/>}></Route>
      </Routes>
      </div> 
    </div>
  )
}

export default App
