const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
const targetTime = document.querySelector('.target-time');

const addSelectOptions = () => {
  for (let i = 0; i < 24; i++) {
    startTime[i + 1] = new Option(`${i}時`, i);
    endTime[i + 1] = new Option(`${i}時`, i);
    targetTime[i + 1] = new Option(`${i}時`, i);
  }
};

addSelectOptions();

const checkInputValidation = (startTime, targetTime) => {
  const startTimeValidation = document.querySelector('.start-time-validation');
  const targetTimeValidation = document.querySelector(
    '.target-time-validation'
  );

  startTimeValidation.innerHTML = startTime
    ? ''
    : '開始時刻を選択してください。';
  targetTimeValidation.innerHTML = targetTime
    ? ''
    : '特定時刻を選択してください。';

  return startTime && targetTime;
};

const isTimeInRange = (startTime, endTime, targetTime) => {
  if (startTime < endTime) {
    return startTime <= targetTime && endTime >= targetTime;
  } else {
    return startTime <= targetTime || endTime >= targetTime;
  }
};

const checkTimeRange = () => {
  const result = document.querySelector('.result');

  if (checkInputValidation(startTime.value, targetTime.value)) {
    const DEFAULT_END_TIME = 24;
    const endTimeValue = endTime.value ? endTime.value : DEFAULT_END_TIME;

    result.innerHTML = isTimeInRange(
      Number(startTime.value),
      Number(endTimeValue),
      Number(targetTime.value)
    )
      ? '範囲内に含まれます。'
      : '範囲内に含まれません。';
  } else {
    result.innerHTML = '';
  }
};
