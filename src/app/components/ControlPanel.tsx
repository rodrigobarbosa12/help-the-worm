import { ChangeEvent } from 'react'

interface Props {
  setHoleDepth: (x: number) => void
  setAmountToUp: (x: number) => void
  setAmountToDown: (x: number) => void
  holeDepth: number
  amountToUp: number
  amountToDown: number
  upWorm: () => void
  reset: () => void
}

export function ControlPanel({
  setHoleDepth,
  setAmountToUp,
  setAmountToDown,
  holeDepth,
  amountToUp,
  amountToDown,
  upWorm,
  reset,
}: Props) {
  return (
    <div className="control-section">
      <div className="control-card">
        <div className="control-header">
          <h3>Defina os parâmetros da simulação</h3>
        </div>
        <div className="form-container">
          <div className="input-group">
            <label>Profundidade do buraco</label>
            <div className="input-wrapper">
              <input
                type="number"
                id="depth"
                value={holeDepth}
                onInput={(x: ChangeEvent<HTMLInputElement>) => {
                  const value = Number(x.target.value)

                  if (value <= 100) setHoleDepth(value)
                }}
                min={20}
                max={100}
              />
              <span className="input-unit">cm</span>
            </div>
          </div>
          <div className="input-group">
            <label>Quantidade de avanço</label>
            <div className="input-wrapper">
              <input
                type="number"
                id="advance"
                value={amountToUp}
                min={1}
                max={20}
                onInput={(x: ChangeEvent<HTMLInputElement>) => {
                  const value = Number(x.target.value)
                  setAmountToUp(value)
                }}
              />
              <span className="input-unit">cm</span>
            </div>
          </div>
          <div className="input-group">
            <label>Quantidade de queda</label>
            <div className="input-wrapper">
              <input
                type="number"
                id="fall"
                value={amountToDown}
                min={0}
                max={10}
                onInput={(x: ChangeEvent<HTMLInputElement>) => {
                  const value = Number(x.target.value)
                  setAmountToDown(value)
                }}
              />
              <span className="input-unit">cm</span>
            </div>
          </div>
        </div>
        <div className="action-container">
          <div className="help-section">
            <p className="help-text">
              Clique no botão abaixo para ajudar a minhoca a sair do buraco
            </p>
          </div>
          <button className="start-button" onClick={upWorm}>
            <span className="button-icon">🪱</span>
            <span className="button-text">Vai minhoca!</span>
          </button>
          <button className="reset-button" onClick={reset}>
            <span className="button-text">Resetar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
