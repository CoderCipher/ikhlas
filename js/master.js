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

// const divs = document.querySelectorAll('.item');
// divs.forEach(div => {
//   const iframe = div.querySelector("iframe");
//   const loader = div.querySelector('.loaderdiv');
//   iframe.addEventListener('load', () => {
//     loader.style="display :none";


//   });
// });

// price
btn30 = document.getElementById("btn30");
btn60 = document.getElementById("btn60");


duv30 = document.getElementById("div30");
div60 = document.getElementById("div60");

btn30.addEventListener('click', () => {
  div60.style = "display :none";
  btn60.classList.remove("btn-blue");
  btn60.classList.add("btn-rounded");
  div30.style = "display:grid";
  btn30.classList.add("btn-blue");
  btn30.classList.remove("btn-rounded");
});

btn60.addEventListener('click', () => {
  div30.style = "display :none";

  btn30.classList.remove("btn-blue");

  btn30.classList.add("btn-rounded");
  div60.style = "display:grid";
  btn60.classList.add("btn-blue");

  btn60.classList.remove("btn-rounded");
});