export default function updateUniqueItems(groceryList) {
  for (const item of groceryList) {
    if (groceryList.get(item[0]) === 1) {
      groceryList.set(item[0], 100);
    }
  }
  return groceryList;
}
