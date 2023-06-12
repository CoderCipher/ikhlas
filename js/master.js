// Contact Rive
new rive.Rive({
  src: "/assets/contact.riv",
  canvas: document.getElementById("canvas"),
  autoplay: false,
  stateMachines: "State Machine 1",
});

submit.onclick = function () {
  new rive.Rive({
    src: "/assets/contact_no_loop.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
  });
};

// https://rive.app/community/4501-9160-mail-send/
