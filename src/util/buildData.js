import data from '../data/ranking_association_min_conf_70.json'

export function buildData() {
  const getLength = (lift) => (
    250 * (1 / (1 + Math.exp(0.15 * (lift - data[0]['lift'] / 2))))
  );

  const nodes = new Map();
  const edges = [];

  data.forEach(r => {
    [r["node a"], r["node b"]].forEach(node => (
      nodes.set(node, { id: node, label: node, title: `${node}` })
    ))

    edges.push({
      from: r["node a"],
      to: r["node b"],
      length: getLength(r.lift),
      value: r.lift,
      title: `Lift: ${r.lift}\nLength: ${getLength(r.lift)}`
    });
  });

  return {
    nodes: Array.from(nodes.values()),
    edges,
  };
}
