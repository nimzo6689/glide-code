window.function = function (itemName, weight, maximumCarryNo) {
  console.log(`itemName=${itemName}, ${JSON.stringify(weight)} + ${JSON.stringify(maximumCarryNo)}`);
  return weight + maximumCarryNo;
}
