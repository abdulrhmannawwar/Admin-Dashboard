import { VectorMap } from "@react-jvectormap/core";
import { usAea } from "@react-jvectormap/unitedstates";

export default function Map() {
    return (
        <VectorMap
            map={usAea}
            style={{ width: "100%", height: "300px" }}
        />
    );
}
