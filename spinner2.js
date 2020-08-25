const spinSpinner = function(spinner) {
  let time = 1000;
  spinner.push("\n");
  for (const spinState in spinner) {
    setTimeout(() => {
      process.stdout.write(spinner[spinState]);
    }, time);
    time += 100;
  }
};

const spinner = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|  ','\r/   ','\r-   ','\r\\   ','\r|   '];

spinSpinner(spinner);