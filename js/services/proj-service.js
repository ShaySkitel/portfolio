'use strict'

const gProjects = [
    {
        id: "trellofy",
        name: "Trellofy",
        title: "Trello clone with extra features",
        desc: "My fullstack Trello clone with extra features, using the MERN stack",
        url: "https://trellofy.onrender.com/",
        publishedAt: 1675078459,
        labels: ["Fullstack", "MVC", "MERN", "Authentication", "Authorization", "State management"]
    },
    {
        id: "meem",
        name: "Meem",
        title: "My meme generation tool",
        desc: "A meme generator which allows you to even upload your own pictures",
        url: "https://shayskitel.github.io/Meem/",
        publishedAt: 1671363259,
        labels: ["LocalStorage", "MVC", "Frontend"]
    },
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Don't click the mines!",
        desc: "placeholder",
        url: "https://shayskitel.github.io/proj-minesweeper/",
        publishedAt: 1669315611,
        labels: ["Matrixes", "Mouse events"]
    },
    {
        id: "ballboard",
        name: "Ballboard",
        title: "Can you collect all the balls?",
        desc: "placeholder",
        url: "https://shayskitel.github.io/Ballboard/",
        publishedAt: 1669315611,
        labels: ["Matrixes", "Keyboard events", "Mouse events"]
    },
    {
        id: "guessme",
        name: "Guess Me",
        title: "Will i guess who you're thinking of?",
        desc: "placeholder",
        url: "https://shayskitel.github.io/GuessMe/",
        publishedAt: 1669315611,
        labels: ["LocalStorage", "MVC"]
    },
    {
        id: "touchnums",
        name: "Touch Nums",
        title: "How fast can you click the numbers?",
        desc: "placeholder",
        url: "https://shayskitel.github.io/touch-nums/",
        publishedAt: 1669315611,
        labels: ["Learning JS"]
    }
]

function getProjects() {
    return gProjects
}

function getProjectById(id) {
    return gProjects.find(project => project.id === id)
}