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
        id: "test",
        name: "JUST A TEST",
        title: "JUST A TEST",
        desc: "JUST A TEST",
        url: "https://shayskitel.github.io/proj-minesweeper/",
        publishedAt: 1669315611,
        labels: ["JUST A TEST"]
    }
]

function getProjects(){
    return gProjects
}

function getProjectById(id){
    return gProjects.find(project => project.id === id)
}