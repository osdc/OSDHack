let faqLabel = document.querySelectorAll(".faq-label");

faqLabel.forEach(
  (item) =>
    (item.onclick = () => {
      //selektuje Answer
      item.nextElementSibling.classList.toggle("active");

      let labelIcon = item.lastElementChild;
      let icons = labelIcon.lastElementChild;
      icons.classList.toggle("rotate");
    })
);

// Mobile nav toggle
$(".navbar-toggle").on("click", function () {
   $(".main-nav").toggleClass("open");
 });
 