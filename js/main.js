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
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="${project.name}">
          </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
      `
    }).join('')
}