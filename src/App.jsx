import { scaleTime, timeMonth, timeYear } from "d3"
import "./App.css"
import { format, monthsToQuarters } from "date-fns"

const rows = [
  {
    label: "row 1",
    activities: [
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
        finish: new Date(2024, 6, 7),
        progress: 0.8,
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 1",
    activities: [
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
        finish: new Date(2024, 6, 7),
        progress: 0.8,
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 1",
    activities: [
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
        finish: new Date(2024, 6, 7),
        progress: 0.8,
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 1",
    activities: [
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
        finish: new Date(2024, 6, 7),
        progress: 0.8,
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 1",
    activities: [
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
        finish: new Date(2024, 6, 7),
        progress: 0.8,
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
  {
    label: "row 2",
    activities: [
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
        start: new Date(2024, 1, 22),
        finish: new Date(2024, 5, 7),
      },
    ],
  },
]

const Milestone = ({ xScale, rowPadding, activityHeight, size, data }) => {
  const xOffset = xScale(data.finish)
  const correctionY = (activityHeight - size) / 2
  const width = size / 2 / Math.sin((45 * Math.PI) / 180)
  const height = width

  return (
    <g className="milestone" transform={`translate(${xOffset}, ${rowPadding})`}>
      <g className="milestone-marker" transform={`translate(0, ${correctionY})`}>
        <rect x="0" y="0" width={width} height={height} rx="2" transform="rotate(45)" />
      </g>
      <text
        className="milestone-label"
        transform={`translate(0, ${size + 6})`}
        style={{
          fontSize: "10px",
          textAnchor: "middle",
        }}
      >
        {data.label}
      </text>
    </g>
  )
}

const Activity = ({ xScale, rowPadding, height, padding, data }) => {
  const xOffset = xScale(data.start)
  const length = xScale(data.finish) - xScale(data.start)
  const progress = data.progress ?? 0

  return (
    <g transform={`translate(${xOffset}, ${rowPadding})`}>
      <rect x="0" y="0" width={length} height={height} rx="2" className="activity" />
      <rect
        x="0"
        y={padding}
        width={length * progress}
        height={height - 2 * padding}
        rx="2"
        className="activity-progress"
      />
    </g>
  )
}

function App() {
  const w = 1200
  const labelWidth = 200
  const tickLabelPadding = 14
  const axisPadding = 2
  const rowPadding = 14
  const activityHeight = 16
  const rowHeight = rowPadding * 2 + activityHeight
  const activityPadding = 5
  const milestoneSize = activityHeight + 4
  const h = rows.length * rowHeight + 3 * 40 + 20
  const minDate = new Date(2024, 0, 1)
  const maxDate = new Date(2025, 3, 30)
  const dataDate = new Date(2024, 5, 21)
  const x = scaleTime([minDate, maxDate], [0, w])
  const range = x.range()

  const yearScale = scaleTime([minDate, maxDate], [0, w])
  const yearTicks = yearScale.ticks(timeYear).map((el) => ({ value: el, xOffset: yearScale(el) }))
  const quarterScale = scaleTime([minDate, maxDate], [0, w])
  const quarterTicks = quarterScale.ticks(timeMonth.every(3)).map((el) => ({ value: el, xOffset: quarterScale(el) }))
  const monthScale = scaleTime([minDate, maxDate], [0, w])
  const monthTicks = monthScale.ticks(timeMonth).map((el) => ({ value: el, xOffset: monthScale(el) }))

  return (
    <div>
      <p>Gantt</p>
      <svg width={w} height={h}>
        <g className="grid-lines grid-lines-vertical" transform={`translate(${labelWidth}, 120)`}>
          {monthTicks.map(({ value, xOffset }) => (
            <line key={value} y2={rows.length * rowHeight} transform={`translate(${xOffset}, 0)`} />
          ))}
        </g>
        <g className="grid-lines grid-lines-horizontal" transform="translate(0, 120)">
          <line x2={w} />
          {rows.map((_, idx) => (
            <line key={idx} x2={w} transform={`translate(0, ${(idx + 1) * rowHeight})`} />
          ))}
        </g>
        <g transform={`translate(${labelWidth}, 0)`}>
          <g transform="translate(0, 40)">
            <path d={["M", range[0], 0, "L", range[1], 0].join(" ")} fill="none" stroke="currentColor" />
            {yearTicks.map(({ value, xOffset }) => (
              <g key={value} transform={`translate(${xOffset}, 0)`}>
                <line y2={-6} stroke="currentColor" />
                <text
                  key={value}
                  transform={`translate(0, ${-tickLabelPadding})`}
                  style={{
                    fontSize: "10px",
                    textAnchor: "middle",
                  }}
                >
                  {format(value, "yyyy")}
                </text>
              </g>
            ))}
          </g>
          <g transform="translate(0, 80)">
            <path d={["M", range[0], 0, "L", range[1], 0].join(" ")} fill="none" stroke="currentColor" />
            {quarterTicks.map(({ value, xOffset }) => (
              <g key={value} transform={`translate(${xOffset}, 0)`}>
                <line y2={-6} stroke="currentColor" />
                <text
                  key={value}
                  transform={`translate(0, ${-tickLabelPadding})`}
                  style={{
                    fontSize: "10px",
                    textAnchor: "middle",
                  }}
                >
                  {`Q${monthsToQuarters(value.getMonth()) + 1}`}
                </text>
              </g>
            ))}
          </g>
          <g transform="translate(0, 120)">
            <path d={["M", range[0], 0, "L", range[1], 0].join(" ")} fill="none" stroke="currentColor" />
            {monthTicks.map(({ value, xOffset }) => (
              <g key={value} transform={`translate(${xOffset}, 0)`}>
                <line y2={-6} stroke="currentColor" />
                <text
                  key={value}
                  transform={`translate(0, ${-tickLabelPadding})`}
                  style={{
                    fontSize: "10px",
                    textAnchor: "middle",
                  }}
                >
                  {format(value, "MMM")}
                </text>
              </g>
            ))}
          </g>
        </g>
        <g transform={`translate(${labelWidth}, 120)`}>
          {rows.map((row, idx) => (
            <g key={idx} transform={`translate(0, ${idx * rowHeight})`}>
              {row.activities
                .filter((a) => a.isMilestone === false)
                .map((a) => (
                  <Activity
                    key={a.id}
                    rowPadding={rowPadding}
                    height={activityHeight}
                    padding={activityPadding}
                    xScale={monthScale}
                    data={a}
                  />
                ))}
              {row.activities
                .filter((a) => a.isMilestone === true)
                .map((a) => (
                  <Milestone
                    key={a.id}
                    rowPadding={rowPadding}
                    activityHeight={activityHeight}
                    size={milestoneSize}
                    xScale={monthScale}
                    data={a}
                  />
                ))}
            </g>
          ))}
        </g>
        <g>
          {rows.map((row, idx) => (
            <text
              key={idx}
              transform={`translate(0, ${idx * rowHeight + rowHeight / 2 + 120})`}
              style={{ dominantBaseline: "middle" }}
            >
              {row.label}
            </text>
          ))}
        </g>
        <g className="data-date" transform="translate(40, 20)">
          <line y2={h} strokeWidth="2" transform={`translate(${monthScale(dataDate)}, 0)`} />
        </g>
      </svg>
    </div>
  )
}

export default App
