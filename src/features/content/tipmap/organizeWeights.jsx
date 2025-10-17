export default function organizeWeights(weightsData, weightsType) {
  if (!weightsData) return false;
  console.log("this is weights data: ", weightsData);
  console.log("this is weights type: ", weightsType);

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

  console.log("this is the returned organized points: ", points);
  return points;
}
