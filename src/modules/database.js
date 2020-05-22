export function getData(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
      callback(data.taps);
    });
}

export const fetching = {
  getData,
};
