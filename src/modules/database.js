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

export async function beerSVG() {
  let response = await fetch("images/svgs/keg.svg");
  let mySVGData = await response.text();

  return mySVGData;
}

export const fetching = {
  getTaps,
  getBeersStorage,
  beerSVG,
};
