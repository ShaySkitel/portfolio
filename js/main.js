'use strict'

$(document).ready(onInit)

function onInit() {
    console.log('Starting up');
    renderProjects()
}

function renderProjects() {
    const projects = getProjects()
    const $elProjContainer = $('.projects-container')

    $elProjContainer[0].innerHTML = projects.map(project => {
        return `
        <div data-proj-id="${project.id}" class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img onerror="this.src='img/portfolio/minesweeper.jpg'" class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="${project.name}">
          </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
      `
    }).join('')

    $('.portfolio-item').each(function () {
        console.log('this:', this)
        const el = this
        el.addEventListener('click', () => {
            const project = getProjectById(el.dataset.projId)
            setModalDetails(project)
        })
    })
}

function setModalDetails(project) {
    console.log('$("modal-body"):', $('modal-body'))
    $('.modal-body').html(`
    <h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="${project.name}">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: ${new Date(project.publishedAt*1000)}</li>
      <li>Categories: ${project.labels.join(', ')}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project
    </button>
        `)
}