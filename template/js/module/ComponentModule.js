export default function ComponentModule() {
  const checkPaym = document.querySelectorAll(
    '.paymItemJs input[type="radio"]'
  );
  if (checkPaym) {
    checkPaym.forEach(function (radio) {
      radio.addEventListener("change", function () {
        document.querySelectorAll(".paymItemJs").forEach(function (item) {
          item.classList.remove("active");
        });

        if (this.checked) {
          this.closest(".paymItemJs").classList.add("active");
        }
      });
    });
  }
}
