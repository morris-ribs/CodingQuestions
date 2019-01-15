function visit(flightsMap, totalFlights, currentItinerary) {
  // If our itinerary uses up all the flights, we're done here.
  if (currentItinerary.length === (totalFlights + 1)) {
    return [[...currentItinerary]];
  }
  
  const lastStop = currentItinerary[currentItinerary.length - 1];
  // if we haven't used all the flights yet but we have no way of getting out of this airport, then we're stuck. Backtrack out
  if (!flightsMap[lastStop]) {
    return [];
  }

  // Otherwise, let's try all the options out of the current stop recursively.
  // We temporarily take them out of the mapping once we use them.    
  let potentialItineraries = [];
  flightsMap[lastStop].forEach((flight, i) => {
    flightsMap[lastStop].splice(i, 1);
    currentItinerary.push(flight);
    const toExtend = visit(flightsMap, totalFlights, currentItinerary);
    if (toExtend.length > 0) {
      potentialItineraries.push(...toExtend);
    }
    flightsMap[lastStop].splice(i, 0, flight);
    currentItinerary.pop();
  });
  
  return potentialItineraries;
}

// we solve this problem using Backtracking (the same kind of solution used in the N-queens problem)
function findItinerary(flights = [], start) {
  // store all the flights into a dictionary key:origin -> val:list of destinations
  const flightsMap = {};
  for (let i = 0; i < flights.length; i++) {
    const flight = flights[i];
    if (!flightsMap[flight.origin]) {
      flightsMap[flight.origin] = [];
    }
    flightsMap[flight.origin].push(flight.destination); 
  }

  const validItineraries = visit(flightsMap, flights.length, [start]);
  if (!!validItineraries && validItineraries.length > 0) {
    const sorted = validItineraries.sort();
    return sorted[0];
  }
  return null;
}

const flights = [
  { origin: "YYZ", destination: "SFO" },
  { origin: "YUL", destination: "YYZ" },
  { origin: "HKO", destination: "ORD" },
  { origin: "SFO", destination: "HKO" }
];

console.log(findItinerary(flights, "YUL"));

const flightsNull = [
  { origin: "COM", destination: "YVZ" },
  { origin: "SFO", destination: "COM" }
];
console.log(findItinerary(flightsNull, "COM"));
console.log(findItinerary(flightsNull, "SFO"));

const flightsCircular = [
  { origin: "A", destination: "B" },
  { origin: "A", destination: "C" },
  { origin: "B", destination: "C" },
  { origin: "C", destination: "A" }
];

console.log(findItinerary(flightsCircular, "A"));