function coursesToTake(courseToPreReqs = {}) {
  // Copy list values into a set for faster removal.
  const todo = [];
  
  // Used to find courses D which have C as a prerequiste
  const preReqToCoures = {};

  Object.keys(courseToPreReqs).map(course => {
    const preReqs = courseToPreReqs[course];
    if (!preReqs || preReqs.length === 0) {
      todo.push(course);
    } else {
      for (let i = 0; i < preReqs.length; i++) {
        const preReq = preReqs[i];
        if (typeof preReqToCoures[preReq] === "undefined") {
          preReqToCoures[preReq] = [];
        }
        preReqToCoures[preReq].push(course);
      }
    }
  });

  const result = []; // courses we need to take in order

  while (todo.length > 0) {
    const preReq = todo.pop();
    result.push(preReq);

    // Find which courses are now free to take
    const courses = (preReqToCoures[preReq] || []);
    for (let i = 0; i < courses.length; i++) {
      const coursePreReq = courses[i];
      const idx = courseToPreReqs[coursePreReq].findIndex(p => p === preReq);
      if (idx >= 0) {
        courseToPreReqs[coursePreReq].splice(idx, 1);
        if (courseToPreReqs[coursePreReq].length === 0) {
          todo.push(coursePreReq);
        }
      }
    }
  }

  // Circular dependency
  if (result.length < courseToPreReqs.length) {
    return null;
  }
  return result; 
}

console.log(coursesToTake({'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}));