export const getOptions = () => (
  {
    nodes: {
      shape: 'circle',
      font: {
        size: 0
      }
    },
    interaction: {
      hover: true,
      tooltipDelay: 10,
      multiselect: true
    },
    layout: {
      randomSeed: 727
    },
    edges: {
      smooth: false
    },
    physics: true
  }
)
