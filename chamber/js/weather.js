
const apiKey = '4d8fb5b93d4af21d66a2948710284366'
const inputVal = 'Chilpancingo'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
const list = document.querySelector(".cities");

fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
      weather[0]["icon"]
    }.svg`;

    const li = document.createElement("li");
    li.classList.add("city");
    const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
        <img class="city-icon" src="${icon}" alt="${
    weather[0]["description"]
    }">
        <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
    `;
    li.innerHTML = markup;
    list.appendChild(li);
  })
  .catch((msg) => {
      console.log("Error")
    console.log(msg)
  });
