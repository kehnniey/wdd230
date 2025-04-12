//   Meet banner
const today = new Date().getDay(); 
const banner = document.getElementById("meetGreetBanner");
const closeBtn = document.getElementById("closeBannerBtn");

const isDismissed = sessionStorage.getItem("bannerDismissed");

if ([1, 2, 3].includes(today) && !isDismissed) {
  banner.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  banner.style.display = "none";
  sessionStorage.setItem("bannerDismissed", "true");
});
