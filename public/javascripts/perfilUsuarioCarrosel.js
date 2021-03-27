var slider = new KeenSlider("#my-keen-slider", {
  spacing: 25,
  slidesPerView: 1,
  centered: true,
  loop: true,
  mode: "snap",
  breakpoints: {
    "(min-width: 455px)": {
      slidesPerView: 2,
      mode: "free-snap",
    },
    "(min-width: 768px)": {
      slidesPerView: 3,
      mode: "free-snap",
    },
    "(min-width: 1200px)": {
      slidesPerView: 4,
      mode: "free-snap",
    },
  },
})