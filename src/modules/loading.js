import { gsap } from "gsap";

function growCircles() {
  gsap.fromTo("#loading-c1", 1, { scale: 0, backgroundColor: "black" }, { scale: 1, backgroundColor: "white", repeat: -1, yoyo: true });
  gsap.fromTo("#loading-c2", 1, { scale: 0, backgroundColor: "blue" }, { scale: 1, backgroundColor: "orange", repeat: -1, yoyo: true, delay: 1 });
  gsap.fromTo("#load_Text ", { color: "white", scaleX: 1.2, duration: 0.8 }, { color: "black", repeat: -1, yoyo: true, scaleX: 1, duration: 1 });
}

export const loadingAnim = {
  growCircles,
};
