import { useState } from "react"
import { Minus, Plus } from 'lucide-react'

function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <div className="parent">
        <div className="p1">
          <div className="p2">
            <div className="h1">
              Smart Counter App
            </div>
            <div className="line" />
            <div className="count">
              Count:
            </div>
            <div className="num">
              {num}
            </div>
            <div className="p3">
              <div className="c1" onClick={() => {
                setNum(num - 1)
              }}>
                <div className="p-minus"><Minus className="minus" /></div>
                <div className="dec">Decrement</div>
              </div>
              <div className="c2" onClick={() => {
                setNum(num + 1)
              }}>
                <div className="p-plus"><Plus className="plus" /></div>
                <div className="dec">Increment</div>
              </div>
            </div>
            <div className="line" />
            <div className="reset" onClick={() => {
              setNum(0)
            }}>Reset</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
