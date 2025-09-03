'use client'

import { useCallback, useState } from 'react'
import { ControlPanel } from './components/ControlPanel'
import { Header } from './components/Header'
import { SimulationArea } from './components/SimulationArea'

export default function HelpTheWorm() {
  const [holeDepth, setHoleDepth] = useState(20)
  const [amountToUp, setAmountToUp] = useState(5)
  const [amountToDown, setAmountToDown] = useState(3)
  const [movement, setMovement] = useState(10)
  const [countUps, setCountUps] = useState(0)

  function reset() {
    setHoleDepth(20)
    setAmountToUp(5)
    setAmountToDown(3)
    setMovement(10)
    setCountUps(0)
  }

  const maxCM = 290 * (holeDepth / 100)

  async function waitAmoment(time: number) {
    return new Promise((resolve) => setTimeout(() => resolve({}), time))
  }

  const downWorm = useCallback(async () => {
    const downCM = Array.from({ length: amountToDown }).map((v, i) => i)

    for await (const cm of downCM) {
      setMovement((s) => s - (cm + 1))
      await waitAmoment(100)
    }
  }, [amountToDown])

  const upWorm = useCallback(async () => {
    reset()

    let countUps = 0

    const upCM = Array.from({ length: maxCM }).map((v, i) => i)

    for await (const cm of upCM) {
      if (countUps === amountToUp) {
        await downWorm()

        countUps = 0

        await waitAmoment(1000)
      }

      setCountUps((s) => s + 1)
      setMovement(cm)
      await waitAmoment(150)

      countUps++
    }
  }, [downWorm, amountToUp, maxCM])

  return (
    <>
      <div className="app">
        <Header />

        <main className="main-content">
          <SimulationArea
            holeDepth={holeDepth}
            countUps={countUps}
            movement={movement}
            maxCM={maxCM}
          />

          <ControlPanel
            setHoleDepth={setHoleDepth}
            setAmountToUp={setAmountToUp}
            setAmountToDown={setAmountToDown}
            holeDepth={holeDepth}
            amountToUp={amountToUp}
            amountToDown={amountToDown}
            upWorm={upWorm}
            reset={reset}
          />
        </main>
      </div>
    </>
  )
}
