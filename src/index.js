import testGenerate from './generate'
import './styles/main.scss'
import testIcon from './assets/icon.svg'

const laughImg = document.getElementById('laughImg')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', testGenerate)

laughImg.src = testIcon

testGenerate()

