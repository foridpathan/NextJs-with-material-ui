import React, { useRef } from "react";
import Map from "react-map-gl";
import bbox from "@turf/bbox";

import MAP_STYLE from "./map-style";

import type { MapboxStyle, MapRef, MapLayerMouseEvent } from "react-map-gl";

// API TOKEN
const TOKEN =
  "pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ";

export default function MapBoxWrapper() {
  const mapRef = useRef<MapRef | any>();

  const onClick = (event: MapLayerMouseEvent | any) => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 1000 }
      );
    }
  };

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        longitude: -99.6111874, // initial longitude
        latitude: 39.0972451, // initial latitude
        zoom: 4, // Default zoom
      }}
      mapStyle={MAP_STYLE as MapboxStyle}
      interactiveLayerIds={["sf-neighborhoods-fill"]}
      onClick={onClick}
      mapboxAccessToken={TOKEN}
    />
  );
}
