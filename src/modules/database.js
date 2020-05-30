export function fetchBar(callbackBeers, callbackStorage, callbackServing, callbackQueue, callbackBartenders) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      //   console.log(data);
      callbackBeers(data.taps);
      callbackStorage(data.storage);
      callbackServing(data.serving);
      callbackQueue(data.queue);
      callbackBartenders(data.bartenders);
    });
}
// export function fetchWholeBar(callbackBar) {
//   fetch("https://foobar-squad.herokuapp.com/")
//     .then((e) => e.json())
//     .then((data) => {
//       //   console.log(data);
//       callbackBar(data);
//     });
// }
export function getTaps(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      //   console.log(data);
      callback(data.taps);
    });
}
export function getBeersStorage(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      //   console.log(data);
      callback(data.storage);
    });
}

export function getServing(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      //   console.log(data);
      callback(data.serving);
    });
}
export function getQueue(callback) {
  fetch("https://foobar-squad.herokuapp.com/")
    .then((e) => e.json())
    .then((data) => {
      //   console.log(data);
      callback(data.queue);
    });
}

export async function beerSVG() {
  let response = await fetch("images/svgs/keg.svg");
  let mySVGData = await response.text();

  return mySVGData;
}

export const fetching = {
  fetchBar,
  getTaps,
  getBeersStorage,
  getServing,
  getQueue,
  beerSVG,
};
