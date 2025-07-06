import { BarChart } from "@mantine/charts";

const data = [
    { month: "UK", rate: 100},
    { month: "Canada", rate: 90},
    { month: "USA", rate: 80},
    { month: "Australia", rate: 75},
    { month: "Malaysia", rate: 100},
];

export function VisaSuccessRation() {
    return (
        <div>
            <h3 className="text-4xl font-bold mb-2">
                Visa Success <span className="text-primary">Ratio</span>
            </h3>
            <p className="text-primary">
                We have a very good visa success rates due to our very
                professional commitment towards our students.
            </p>
            <BarChart
                h={150}
                data={data}
                dataKey="month"
                type="stacked"
                orientation="vertical"
                yAxisProps={{ width: 80 }}
                series={[
                    { name: "rate", color: "#819A91" },
                ]}
                // withBarValueLabel={false}
                // withLegend={false}
                withTooltip={false}
                className="mt-8"
            />
        </div>
    );
}
