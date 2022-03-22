import generatejoke from "./generateJoke";
import './styles/styles.scss'
import laughing from "./assets/laughing-emoji.svg"

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generatejoke);

generatejoke();
