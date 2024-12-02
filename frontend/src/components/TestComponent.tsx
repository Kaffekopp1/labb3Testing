import { useEffect, useState } from 'react'

export default function TestComponent() {
  const [test, setTest] = useState<string>('Test string')
  useEffect(() => {
    setTest('useEffect change')
  }, [])
  return <div>TestComponent {test} HEJ</div>
}
