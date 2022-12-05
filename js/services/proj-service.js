'use strict'

const gProjects = [
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
        id: "todo",
        name: "Todo App",
        title: "Never forget your daily tasks",
        desc: "placeholder",
        url: "https://shayskitel.github.io/Todos/",
        publishedAt: 1669315611,
        labels: ["LocalStorage", "MVC"]
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
        id: "bookshop",
        name: "Bookshop",
        title: "Dashboard for a bookstore",
        desc: "placeholder",
        url: "https://shayskitel.github.io/bookshop/",
        publishedAt: 1669315611,
        labels: ["LocalStorage", "MVC"]
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

function getProjects(){
    return gProjects
}

function getProjectById(id){
    return gProjects.find(project => project.id === id)
}