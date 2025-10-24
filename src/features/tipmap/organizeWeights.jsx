export default function organizeWeights(weightsData, weightsType) {
  if (!weightsData) return false;

  const points = { type: "FeatureCollection", features: [] };
  for (let i in weightsData) {
    points.features.push({
      type: "Feature",
      properties: { value: weightsData[i][weightsType] },
      geometry: {
        type: "Point",
        coordinates: [weightsData[i].longitude, weightsData[i].latitude],
      },
    });
  }

  return points;
}
