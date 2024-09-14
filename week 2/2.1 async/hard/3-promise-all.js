// wait1, wait2, and wait3 functions that return promises resolved after t1, t2, and t3 seconds respectively
function wait1(t) {
    return new Promise((resolve) => setTimeout(resolve, t * 1000)); // convert seconds to milliseconds
  }
  
  function wait2(t) {
    return new Promise((resolve) => setTimeout(resolve, t * 1000));
  }
  
  function wait3(t) {
    return new Promise((resolve) => setTimeout(resolve, t * 1000));
  }
  
  // Function that uses Promise.all to wait for all promises to resolve and returns the total time in milliseconds
  function calculateTime(t1, t2, t3) {
    const start = Date.now(); // Record the start time
  
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
      const end = Date.now(); // Record the end time
      return end - start; // Return the total time taken in milliseconds
    });
  }
  
  module.exports = calculateTime;
  