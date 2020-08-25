const spinSpinner = function(spinner) {
  let time = 1000;
  spinner.push("\n");
  const type = () => {
    for (const spinState in spinner) {
      setTimeout(() => {
        process.stdout.write(spinner[spinState]);
      }, time);
      time += 100;
    }
  };
  type();
};

const spinner = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|  ','\r/   ','\r-   ','\r\\   ','\r|   '];

spinSpinner(spinner);