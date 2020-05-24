export function getTaps(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
      callback(data.taps);
    });
}
export function getBeersStorage(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
      callback(data.storage);
    });
}

export const fetching = {
  getTaps,
  getBeersStorage,
};
