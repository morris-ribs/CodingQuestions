function compareByTimestamp(a, b) {
  if (a.timestamp < b.timestamp)
    return -1;
  if (a.timestamp > b.timestamp)
    return 1;
  // a doit être égal à b
  return 0;
}

function busiestPeriod(entries=[]) {
  const period = { start: null, end: null };
  
  let numPeople = 0;
  let maxNumPeople = 0;

  // Sort the entries by timestamp
  const sortedEntries = entries.sort(compareByTimestamp);

  // Keep track of the number of people at each entry.
  for (let i = 0; i < sortedEntries.length; i++) {
    const entry = sortedEntries[i];
    if (entry["type"] === "enter") {
      numPeople += entry["count"];
    } else {
      numPeople -= entry["count"];      
    }

    if (numPeople > maxNumPeople) {
      maxNumPeople = numPeople;
      period.start = entry["timestamp"];
      period.end = sortedEntries[i+1]["timstamp"];
    }
  }

  return period;
}

