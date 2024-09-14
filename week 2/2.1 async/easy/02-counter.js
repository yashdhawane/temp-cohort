let counter = 0; 

const updateCounter = () => {
  counter++; 
  console.log(counter); 

  setTimeout(updateCounter, 1000);
};

updateCounter();


//Counter without using setInterval i.e with setTimeout