// home page business spotlight
function getRandomItems(arr, n) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  fetch('https://kehnniey.github.io/wdd230/chamber/data/members.json') // update path if needed
    .then(res => res.json())
    .then(data => {
      const members = data.members;
      const selected = getRandomItems(members, 3); // get 3 random businesses

      const spotlightGrid = document.getElementById("spotlightGrid");

      selected.forEach(biz => {
        const div = document.createElement("div");
        div.className = "spotlight";

        div.innerHTML = `
            <img src="images/${biz.image}" alt="${biz.name}" style="max-width: 100px; border-radius: 8px;">
            <h4>${biz.name}</h4>
            <p>${biz.description}</p>
            <p><a href="${biz.website}" target="_blank">Visit Website</a></p>
            `;

        spotlightGrid.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Failed to load businesses:", error);
    });






