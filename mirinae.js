import ScrollMagic from "scrollmagic";
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0.9,
  duration: "110%",
  offset: 10
})
  .setClassToggle("#revealbox1", "visible")
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  triggerHook: 0.9,
  duration: "110%",
  offset: 10
})
  .setClassToggle("#revealbox2", "visible")
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: "#trigger3",
  triggerHook: 0.9,
  duration: "110%",
  offset: 10
})
  .setClassToggle("#revealbox3", "visible")
  .addTo(controller);
