import { Text, Timeline, TimelineItem } from "@mantine/core";

export function HowWeWork() {
    return (
        <div>
            <h3 className="text-4xl font-bold mb-2">
                How We <span className="text-primary">Work?</span>
            </h3>
            <p className="text-primary">
                It is very easy to apply through NHP Education Consultants. It
                starts from career counselling and ends in pre-departure
                orientation.
            </p>
            <Timeline color="teal" active={3} lineWidth={4} bulletSize={20} className="mt-8">
                <TimelineItem
                    title="Career Counselling"
                    className="p-3 bg-secondary/30 max-w-xs rounded-sm"
                >
                    <Text c="dimmed" size="sm">
                        Course and Institution Selection - University
                        Application
                    </Text>
                </TimelineItem>

                <TimelineItem
                    title="Visa Documents"
                    className="p-3 bg-secondary/30 max-w-xs rounded-sm"
                >
                    <Text c="dimmed" size="sm">
                        Preparation - Interview Preparation - Visa Application
                    </Text>
                </TimelineItem>

                <TimelineItem
                    title="Accommodation"
                    className="p-3 bg-secondary/30 max-w-xs rounded-sm"
                >
                    <Text c="dimmed" size="sm">
                        Arrangement - Airport Pick Up - Pre-departure
                        Orientation
                    </Text>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
