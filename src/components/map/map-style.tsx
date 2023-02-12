import type { GeoJSONSourceRaw, FillLayer, LineLayer } from "react-map-gl";

import MAP_STYLE from "./map-style-basic-v8.json";

const sfNeighborhoods: GeoJSONSourceRaw = {
  type: "geojson",
  data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson",
};

const fillLayer: FillLayer = {
  id: "sf-neighborhoods-fill",
  source: "sf-neighborhoods",
  type: "fill",
  paint: {
    "fill-outline-color": "#0040c8",
    "fill-color": "#fff",
    "fill-opacity": 0,
  },
};

const lineLayer: LineLayer = {
  id: "sf-neighborhoods-outline",
  source: "sf-neighborhoods",
  type: "line",
  paint: {
    "line-width": 2,
    "line-color": "#0080ef",
  },
};

// Make a copy of the map style
export default {
  ...MAP_STYLE,
  sources: {
    ...MAP_STYLE.sources,
    ["sf-neighborhoods"]: sfNeighborhoods,
  },
  layers: [...MAP_STYLE.layers, fillLayer, lineLayer],
};
