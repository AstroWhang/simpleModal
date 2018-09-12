const openModalTriggerEl = document.querySelector(".trigger");
const closeModalTrigger = document.querySelector(".close");
const modalEl = document.querySelector(".modal");


function main() {
  openModalTriggerEl.addEventListener("click", function() {
    modalEl.classList.add("open");
  })

  closeModalTrigger.addEventListener("click", function() {
    modalEl.classList.remove("open");
  })
};

main();


