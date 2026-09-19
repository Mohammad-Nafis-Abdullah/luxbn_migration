import { BarChart } from "@mantine/charts";

const data = [
    { month: "UK", rate: 100},
    { month: "Canada", rate: 90},
    { month: "USA", rate: 80},
    { month: "Australia", rate: 75},
    { month: "Malaysia", rate: 100},
];

export function VisaSuccessRatio() {
    return (
        <div>
            <span className="section-eyebrow">Track record</span>
            <h3 className="section-title mt-2">
                Visa Success <span className="text-primary">Ratio</span>
            </h3>
            <div className="section-bar mb-4" />
            <p className="section-lead">
                We have a very good visa success rates due to our very
                professional commitment towards our students.
            </p>
            <BarChart
                h={300}
                data={data}
                dataKey="month"
                type="stacked"
                orientation="vertical"
                yAxisProps={{ width: 70 }}
                series={[
                    { name: "rate", color: "#0e7c86" },
                ]}
                // withBarValueLabel={false}
                // withLegend={false}
                withTooltip={false}
                className="mt-8"
            />
        </div>
    );
}
