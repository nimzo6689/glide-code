window.function = function (
  itemName,
  weight,
  maxCarryCount,
  pikminType,
  pikminSpeed,
  pikminCount,
  pikminMaturity,
  pikminSpicy
) {
  const pikmins = pikminType.value.map((type, i) => {
    return {
      type,
      speed: pikminSpeed.value[i],
      count: pikminCount.value[i],
      maturity: pikminMaturity.value[i],
      isSpicy: pikminSpicy.value[i],
    };
  });

  const allPikminCount = pikmins.map((it) => it.count).reduce((a, x) => a + x);
  if (weight.value < allPikminCount) {
    return 0;
  }

  const wingedPikminCount = pikmins
    .fileter((it) => it.type === "羽")
    .map((it) => it.count)
    .reduce((a, x) => a + x);
  const groundedPikminCount = allPikminCount - wingedPikminCount;

  if (maxCarryCount.value < wingedPikminCount || maxCarryCount.value < groundedPikminCount) {
    return -1;
  }

  maturitySpeed = {
    葉っぱ: 0.0,
    つぼみ: 0.5,
    花: 1.0,
  };

  if (itemName.value in ["キンカイ", "ムラサキタワワ"]) {
    if (pikmins[0].isSpicy === "あり" || pikmins[0].type === "白") {
      return 4;
    }
    return pikmins[0].speed + maturitySpeed[pikmins[0].maturity] + 1.75;
  }

  const allPikminSpeed = pikmins.map((it) => it.speed + maturitySpeed[it.maturity]).reduce((a, x) => a + x);
  return (allPikminSpeed - weight.value + 1) / maxCarryCount.value + 1
};
