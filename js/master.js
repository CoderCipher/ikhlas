// Contact Rive
new rive.Rive({
  src: "https://raw.githubusercontent.com/CoderCipher/cdn/main/uploads/contact_no_loop.riv",
  canvas: document.getElementById("canvas"),
  autoplay: false,
  stateMachines: "State Machine 1",
});

submit.onclick = function () {
  new rive.Rive({
    src: "https://raw.githubusercontent.com/CoderCipher/cdn/main/uploads/contact_no_loop.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: "State Machine 1",
  });
};

// https://rive.app/community/4501-9160-mail-send/


// loader js

const divs = document.querySelectorAll('.item');
divs.forEach(div => {
  const iframe = div.querySelector("iframe");
  const loader = div.querySelector('.loaderdiv');
  iframe.addEventListener('load', () => {
    loader.style="display :none";

    console.log("hello")
  });
});
