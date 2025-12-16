import { Network } from "vis-network";
import "vis-network/styles/vis-network.css";
import { useEffect, useRef } from "react";
import { buildData } from "../util/buildData";
import { getOptions } from "../util/getOptions";

function Graph() {
  const containerRef = useRef(null);

  useEffect(() => {
    const data = buildData();
    const options = getOptions()

    const network = new Network(containerRef.current, data, options);

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
    />
  )
}

export default Graph;
