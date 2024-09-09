function calculateTime(n) {
    const starttime=Date.now();
    const sum = (n * (n + 1)) / 2;
    const endtime=Date.now();

    const timeTaken = (endtime - starttime) / 1000;

    console.log(`Sum from 1 to ${n} is ${sum}`);
     console.log(`Time taken: ${timeTaken} seconds`);

}

measureTime(100);        // Sum from 1 to 100
measureTime(100000);     // Sum from 1 to 100000
measureTime(1000000000);