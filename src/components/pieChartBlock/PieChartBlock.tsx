import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import './pieChartBlock.scss';

const data = [
    { name: "Chrome", value: 400, color: "#0088FE" },
    { name: "Mobile App", value: 300, color: "#00C49F" },
    { name: "Safari", value: 300, color: "#FFBB28" },
    { name: "offline", value: 200, color: "#F00" },
  ];

const PieChartBox = () => {
 
    return (
        <div className="chart-container">
          <h3>Device Usage</h3>
          <div className="chart">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Tooltip
                  contentStyle={{ background: "#eee", borderRadius: "5px" }}
                  labelStyle={{ display: "none" }}
                  cursor={{ fill: "none" }}
                />
                <Pie
                  data={data}
                  innerRadius={"70%"}
                  outerRadius={"90%"}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="options">
            {data.map((item) => (
              <div className="option" key={item.name}>
                <div className="title">
                  <div className="dot" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    
}

export default PieChartBox