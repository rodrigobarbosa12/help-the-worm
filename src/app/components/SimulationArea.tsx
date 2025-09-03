interface Props {
  holeDepth: number
  countUps: number
  movement: number
  maxCM: number
}

export function SimulationArea({
  holeDepth,
  countUps,
  movement,
  maxCM,
}: Props) {
  const currentPercentage = (countUps / maxCM) * 100

  return (
    <div className="simulation-section">
      <div className="simulation-card">
        <div className="progress-container">
          <div className="progress-label">Progresso da minhoca</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${currentPercentage}%`,
                background:
                  currentPercentage < 100
                    ? 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)'
                    : 'linear-gradient(90deg, #48fb24ff 0%, #00a30bff 100%)',
              }}
            />
          </div>
          <div className="progress-text">
            {currentPercentage.toFixed(0)}% completo
          </div>
        </div>

        <div className="simulation-viewport">
          <div className="surface-layer">
            <div className="flower-container">
              <div className="flower">
                <div className="flower-center" />
                <div className="petal petal-1" />
                <div className="petal petal-2" />
                <div className="petal petal-3" />
                <div className="petal petal-4" />
                <div className="petal petal-5" />
              </div>
              <div className="flower-stem" />
            </div>
            <div className="grass-blades">
              <div className="grass-blade" />
              <div className="grass-blade" />
              <div className="grass-blade" />
              <div className="grass-blade" />
              <div className="grass-blade" />
            </div>
          </div>

          <div className="ground-layer" style={{ height: '82%' }}>
            <div
              className="hole"
              style={{
                height: `${holeDepth < 20 ? 20 : holeDepth}%`,
                paddingBottom: movement,
              }}
            >
              <div className="hole-depth-indicator" />
              <div className="worm">
                <div className="worm-segment worm-head" />
                <div className="worm-segment" />
                <div className="worm-segment" />
                <div className="worm-segment worm-tail" />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">{countUps}</div>
            <div className="stat-label">Subidas</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">{`${holeDepth}cm`}</div>
            <div className="stat-label">Profundidade</div>
          </div>
        </div>
      </div>
    </div>
  )
}
