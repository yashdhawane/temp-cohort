function busyWait(ms) {
    return new Promise((resolve) => {
      const start = Date.now();
      let now = start;
      while (now - start < ms) {
        now = Date.now();
      }
      resolve();
    });
  }
  
  // Usage example:
  busyWait(2000).then(() => {
    console.log("2 seconds passed with a busy-wait.");
  });
  