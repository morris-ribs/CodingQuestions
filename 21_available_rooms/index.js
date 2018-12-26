function availablerooms(input) {
  const rooms = [];
  const sortedInput = input.sort((lecture1, lecture2) => {
    return lecture1.init - lecture2.init;
  });

  for (const lecture of sortedInput) {
    const index = rooms.findIndex(time => time <= lecture.init);
    if (index >= 0) {
      rooms[index] = lecture.end;
    } else {
      rooms.push(lecture.end);
    }
  }

  return rooms.length;
}

const lecture1 = { init: 0, end: 50 };
const lecture2 = { init: 30, end: 75 };
const lecture3 = { init: 60, end: 150 };

console.log(availablerooms([lecture1, lecture2, lecture3]));
