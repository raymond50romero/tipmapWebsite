export default function organizeWeights(weightsData, weightsType, zoom) {
  if (!weightsData) return false;

  // If zoom is not provided, we don't group (threshold = 0)
  // Otherwise, group points using a zoom-dependent threshold in degrees.
  // 0.01 degrees is ~1.1km. At zoom 10, threshold is ~1.1km.
  // At zoom 15, threshold is ~34m.
  const threshold = (zoom !== undefined && zoom !== null)
    ? 0.01 / Math.pow(2, zoom - 10)
    : 0;

  let groupedData = [];
  if (threshold <= 0) {
    groupedData = weightsData.map(item => ({
      longitude: parseFloat(item.longitude),
      latitude: parseFloat(item.latitude),
      items: [item]
    }));
  } else {
    for (let i = 0; i < weightsData.length; i++) {
      const item = weightsData[i];
      const val = item[weightsType];
      if (val === undefined || val === null) continue;

      const itemLng = parseFloat(item.longitude);
      const itemLat = parseFloat(item.latitude);

      let foundGroup = null;
      for (let g of groupedData) {
        const dLng = Math.abs(g.longitude - itemLng);
        const dLat = Math.abs(g.latitude - itemLat);
        if (dLng < threshold && dLat < threshold) {
          foundGroup = g;
          break;
        }
      }

      if (foundGroup) {
        foundGroup.items.push(item);
      } else {
        groupedData.push({
          longitude: itemLng,
          latitude: itemLat,
          items: [item]
        });
      }
    }
  }

  const points = { type: "FeatureCollection", features: [] };
  for (let g of groupedData) {
    let sumWeight = 0;
    let sumLng = 0;
    let sumLat = 0;
    let validItemsCount = 0;

    for (let item of g.items) {
      const val = item[weightsType];
      if (val !== undefined && val !== null) {
        sumWeight += val;
        validItemsCount++;
      }
      sumLng += parseFloat(item.longitude);
      sumLat += parseFloat(item.latitude);
    }

    if (validItemsCount === 0) continue;

    const avgWeight = sumWeight / validItemsCount;
    const avgLng = sumLng / g.items.length;
    const avgLat = sumLat / g.items.length;
    const representative = g.items[0];

    points.features.push({
      type: "Feature",
      properties: {
        value: avgWeight,
        mapbox_id: representative.mapbox_id,
        name: representative.name,
        address: representative.address,
      },
      geometry: {
        type: "Point",
        coordinates: [avgLng, avgLat],
      },
    });
  }

  console.log("these are the points: ", points);
  return points;
}

