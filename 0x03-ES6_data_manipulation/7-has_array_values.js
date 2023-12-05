export default function hasValuesFromArray(setArg, arrayArg) {
  const bool = arrayArg.every((element) => setArg.has(element));
  return bool;
}
