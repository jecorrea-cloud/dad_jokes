const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", getAJoke);

//USING async/await
async function getAJoke() {
  //Dad jokes needs a header formatted like config to GET a joke.
  //Otherwise it'll give back HTML as a response
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  //   console.log(data);
  jokeEl.innerHTML = data.joke;
}

//USING .then()
// function getAJoke() {
//Dad jokes needs a header formatted like config to access a joke.
//Otherwise it'll give back HTML
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//console.log(data)
//       jokeEl.innerHTML = data.joke;
//     });
// }
