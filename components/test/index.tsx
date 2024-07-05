import { useEffect, useState } from "react"


export const TestComponent = () => {
  const [value, setValue] = useState('')
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    if (!renderCount && !value) { // check that this is the first render
      setRenderCount(1)
    }
    else {
      setRenderCount(prev => ++prev)
    }
  }, [value])

  return (
    <div>
      <h1>Кол-во рендеров: {renderCount}</h1>
      <input type="text" onChange={e => setValue(e.target.value)} value={value} />
    </div>
  )
} 