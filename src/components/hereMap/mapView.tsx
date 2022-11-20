import React, { useLayoutEffect, useRef } from 'react';

import H from "@here/maps-api-for-javascript";

function MapView(): JSX.Element {
  const ref = useRef();

  useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!ref.current) return;

    // instantiate a platform, default layers and a map as usual
    const platform = new H.service.Platform({
      apikey: process.env.REACT_APP_HERE_MAP_API_KEY,
    });
    const defaultLayers = platform.createDefaultLayers();
    const mapView = new H.Map(
      ref.current,
      defaultLayers.vector.normal.map,
      {
        pixelRatio: window.devicePixelRatio || 1,
        center: { lat: 0, lng: 0 },
        zoom: 2,
      },
    );
    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      mapView.dispose();
    };
  }, []);

  return (
    <div
      style={{ width: '300px', height: '300px' }}
      ref={ref}
    />
  );
}

export default MapView;
