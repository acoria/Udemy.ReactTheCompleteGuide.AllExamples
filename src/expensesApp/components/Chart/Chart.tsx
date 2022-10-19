import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props: any) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={props.maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
