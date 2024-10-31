import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

export default function Map() {
    return (
        <VectorMap
            map={worldMill}
            style={{ width: "65%", height: "500px"}}
        />
    );
}
