import { scaleTime, timeMonth, timeYear } from "d3"
import "./App.css"
import { format, monthsToQuarters } from "date-fns"

const activities = [
  {
    id: 1,
    label: "QG1",
    isMilestone: true,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 1, 15),
    // baselineStart:
    //   baselineFinish:
    // actualStart:
    // actualFinish:
    progress: 50,
  },
  {
    id: 12,
    label: "QG2",
    isMilestone: true,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 3, 22),
    // baselineStart:
    //   baselineFinish:
    // actualStart:
    // actualFinish:
    progress: 50,
  },
  {
    id: 15,
    label: "QG3",
    isMilestone: true,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 6, 7),
    // baselineStart:
    //   baselineFinish:
    // actualStart:
    // actualFinish:
    progress: 50,
  },
  {
    id: 2,
    label: "Task 1",
    isMilestone: false,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 3, 9),
    progress: 0.8,
  },
  {
    id: 3,
    label: "Task 2",
    isMilestone: false,
    start: new Date(2024, 5, 10),
    finish: new Date(2024, 6, 17),
    progress: 0.2,
  },
]

const activitiesBl = [
  {
    id: 1,
    label: "QG1",
    isMilestone: true,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 1, 22),
    // baselineStart:
    //   baselineFinish:
    // actualStart:
    // actualFinish:
    progress: 50,
  },
  {
    id: 12,
    label: "QG2",
    isMilestone: true,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 3, 12),
    // baselineStart:
    //   baselineFinish:
    // actualStart:
    // actualFinish:
    progress: 50,
  },
  {
    id: 15,
    label: "QG3",
    isMilestone: true,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 5, 7),
    // baselineStart:
    //   baselineFinish:
    // actualStart:
    // actualFinish:
  },
  {
    id: 2,
    label: "Task 1",
    isMilestone: false,
    start: new Date(2024, 1, 15),
    finish: new Date(2024, 3, 9),
  },
  {
    id: 3,
    label: "Task 2",
    isMilestone: false,
    start: new Date(2024, 5, 10),
    finish: new Date(2024, 6, 17),
  },
]

const Milestone = ({ xScale, data }) => {
  const size = 18
  const xOffset = xScale(data.finish)
  const correctionY = (10 - size) / 2
  const width = size / 2 / Math.sin((45 * Math.PI) / 180)
  const height = width

  return (
    <g className="milestone" transform={`translate(${xOffset}, 0)`}>
      <g className="milestone-marker" transform={`translate(0, ${correctionY})`}>
        <rect x="0" y="0" width={width} height={height} transform="rotate(45)" />
      </g>
      <text
        className="milestone-label"
        style={{
          fontSize: "10px",
          textAnchor: "middle",
          transform: "translateY(25px)",
        }}
      >
        {data.label}
      </text>
    </g>
  )
}

const Activity = ({ xScale, data }) => {
  const xOffset = xScale(data.start)
  const length = xScale(data.finish) - xScale(data.start)
  const progress = data.progress ?? 0

  return (
    <g transform={`translate(${xOffset}, 0)`}>
      <rect x="0" y="0" width={length} height="10" rx="2" className="activity" />
      <rect x="0" y="4" width={length * progress} height="2" rx="2" className="activity-progress" />
    </g>
  )
}

const Row = ({ xScale, activities, yOffset }) => {
  return (
    <g transform={`translate(40, ${yOffset})`}>
      {activities
        .filter((a) => a.isMilestone === false)
        .map((a) => (
          <Activity key={a.id} xScale={xScale} data={a} />
        ))}
      {activities
        .filter((a) => a.isMilestone === true)
        .map((a) => (
          <Milestone key={a.id} xScale={xScale} data={a} />
        ))}
      {/* <line x2={1200 - 40} stroke="rgba(200, 200, 200)" transform={`translate(0, 30)`} /> */}
    </g>
  )
}

function App() {
  const w = 1200
  const minDate = new Date(2024, 0, 1)
  const maxDate = new Date(2025, 3, 30)
  const dataDate = new Date(2024, 5, 21)
  const x = scaleTime([minDate, maxDate], [0, w])
  const range = x.range()
  const rows = [1, 2, 3]

  const yearScale = scaleTime([minDate, maxDate], [0, w])
  const yearTicks = yearScale.ticks(timeYear).map((el) => ({ value: el, xOffset: yearScale(el) }))
  const quarterScale = scaleTime([minDate, maxDate], [0, w])
  const quarterTicks = quarterScale.ticks(timeMonth.every(3)).map((el) => ({ value: el, xOffset: quarterScale(el) }))
  const monthScale = scaleTime([minDate, maxDate], [0, w])
  const monthTicks = monthScale.ticks(timeMonth).map((el) => ({ value: el, xOffset: monthScale(el) }))

  return (
    <div style={{ width: "600px", overflow: "auto" }}>
      <p>Gantt</p>
      <svg width={w} height="400">
        <g className="grid-lines grid-lines-vertical" transform="translate(40, 120)">
          {monthTicks.map(({ value, xOffset }) => (
            <line key={value} y2={200} transform={`translate(${xOffset}, 0)`} />
          ))}
        </g>
        <g className="grid-lines grid-lines-horizontal" transform="translate(40, 120)">
          {rows.map((_, idx) => (
            <line key={idx} x2={w} transform={`translate(0, ${(idx + 1) * 50})`} />
          ))}
        </g>
        <g transform="translate(40, 40)">
          <path d={["M", range[0], 0, "L", range[1], 0].join(" ")} fill="none" stroke="currentColor" />

          {/* Ticks and labels */}
          {yearTicks.map(({ value, xOffset }) => (
            <g key={value} transform={`translate(${xOffset}, 0)`}>
              <line y2={-6} stroke="currentColor" />
              <text
                key={value}
                style={{
                  fontSize: "10px",
                  textAnchor: "middle",
                  transform: "translateY(-20px)",
                }}
              >
                {format(value, "yyyy")}
              </text>
            </g>
          ))}
        </g>
        <g transform="translate(40, 80)">
          <path d={["M", range[0], 0, "L", range[1], 0].join(" ")} fill="none" stroke="currentColor" />

          {/* Ticks and labels */}
          {quarterTicks.map(({ value, xOffset }) => (
            <g key={value} transform={`translate(${xOffset}, 0)`}>
              <line y2={-6} stroke="currentColor" />
              <text
                key={value}
                style={{
                  fontSize: "10px",
                  textAnchor: "middle",
                  transform: "translateY(-20px)",
                }}
              >
                {`Q${monthsToQuarters(value.getMonth()) + 1}`}
              </text>
            </g>
          ))}
        </g>
        <g transform="translate(40, 120)">
          <path d={["M", range[0], 0, "L", range[1], 0].join(" ")} fill="none" stroke="currentColor" />

          {/* Ticks and labels */}
          {monthTicks.map(({ value, xOffset }) => (
            <g key={value} transform={`translate(${xOffset}, 0)`}>
              <line y2={-6} stroke="currentColor" />
              <text
                key={value}
                style={{
                  fontSize: "10px",
                  textAnchor: "middle",
                  transform: "translateY(-20px)",
                }}
              >
                {format(value, "MMM")}
              </text>
            </g>
          ))}
        </g>
        <Row xScale={monthScale} activities={activities} yOffset={140} />
        <Row xScale={monthScale} activities={activitiesBl} yOffset={190} />
        <Row xScale={monthScale} activities={activitiesBl} yOffset={240} />
        <g className="data-date" transform="translate(40, 20)">
          <line y2={300} strokeWidth="2" transform={`translate(${monthScale(dataDate)}, 0)`} />
        </g>
      </svg>
    </div>
  )
}

export default App
