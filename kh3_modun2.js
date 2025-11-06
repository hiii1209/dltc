const previews = document.querySelectorAll(".preview");
const hero = document.getElementById("hero");
const caption = document.getElementById("caption");

previews.forEach(img => {
  img.addEventListener("mouseover", function() {
    hero.style.opacity = 0;
    setTimeout(() => {
      hero.src = this.src;
      caption.textContent = this.alt;
      hero.style.opacity = 1;
    }, 200);
  });

  img.addEventListener("mouseout", function() {
    hero.style.opacity = 0;
    setTimeout(() => {
      hero.src = "https://cdn-media.sforum.vn/storage/app/media/danh%20lam%20th%E1%BA%AFng%20c%E1%BA%A3nh%20vi%E1%BB%87t%20nam/danh-lam-thang-canh-viet-nam-thumbnail.jpg";
      caption.textContent = "⭐Khám phá vẻ đẹp thiên nhiên hùng vĩ đất nước Việt⭐";
      hero.style.opacity = 1;
    }, 200);
  });
});
