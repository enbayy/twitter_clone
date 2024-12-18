import { topics } from "~/utils/consts";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";

export default function Topics() {
    return (
        <SidebarSection
            title="İlgini çekebilecek gündemler"
            more="/trends"
        >
            {
                topics.map((topic, i) => (
                    <Topic topic={topic} key={i} />
                ))
            }

        </SidebarSection >
    )
} 