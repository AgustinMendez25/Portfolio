// import {getProjects} from './data.js';

// Language Change Click Event
document.getElementById("languages").addEventListener("click", (e)=>{
    changeLanguage(e.target.dataset.language);
});
document.getElementById("languagesMobile").addEventListener("click", (e)=>{
    changeLanguage(e.target.dataset.language);
});

// Change language function
const sections = document.querySelectorAll('[data-section]');
const changeLanguage = async lang=>{
    const inputData = await fetch(`assets/languages/${lang}.json`);
    const jsonData = await inputData.json();
    
    // Change page labels language
    sections.forEach(section => {
        section.querySelectorAll('[data-value]').forEach(value =>{
            const sectionName = section.dataset.section;
            const valueName = value.dataset.value;
            value.innerHTML = jsonData[sectionName][valueName];
        });
    }); 

    // Change projects section language
    const projectsContainer = document.getElementById('projectsContainer');
    let projectsToUse = lang == 'es' ? projectsES : projectsEN;
    projectsContainer.innerHTML = getProjectsTemplate(projectsToUse);
} 

// Projects section function
function getProjectsTemplate(data) {
    let template = '';
    data.forEach((project, i) => {
        
        // add initial template
        template += `
        <div class="row project">
          <div class="col-md-12 col-lg-5 col-xl-4" style="margin: auto">
            <img class="project-image" src="${project.img}" alt="" style="border:solid 1px #bab7b7">
          </div>
          <div class="col-md-12 col-lg-7 col-xl-8 project-data">
            <div class="row project-header">
              <div>
                <h4>${project.title} <img class="projectIcon" src="${project.titleIcon}" alt=""></h4>
                <h6>${project.subtitle}</h6>
              </div>
              <div>
                <p class="year-text">${project.year}</p>
              </div>
            </div>
            <div class="row">
              <p>${project.description}</p>
            </div>
            <div class="row" style="justify-content:space-between">
              <div class="col-md-12 col-lg-5 col-xl-6 techsProject">`;
        
        // add technologies
        let technologiesList = '';
        project.technologiesList.forEach(elem => {
            technologiesList += `<span class="tech-span"><img src="${elem.img}" alt="">${elem.nombre}</span>`;
        });

        // add end
        template += technologiesList + `
                        </div>
              <div class="col-md-12 col-lg-7 col-xl-6 projectButtons">
                ` + (project.openCode ? `<a href="${project.codeUrl}" target="_blank">` : `<div class="a-noref">`) + `
                    <button class="cssbuttons-io ${project.openCode ? 'open-code' : 'close-code'}">
                        <span>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path><path d="${project.codeIcon}" fill="currentColor"></path>
                            </svg>
                            Code
                        </span>
                    </button>
                ` + (project.openCode ? `</a>` : `</div>`) + `
                <a href="${project.projectUrl}" target="${project.projectUrlTarget}">
                    <button class="cssbuttons-io">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="568" height="568"><path fill="white" d="m16.395,10.122l-5.192-2.843c-.673-.379-1.473-.372-2.138.017-.667.39-1.064,1.083-1.064,1.855v5.699c0,.772.397,1.465,1.064,1.855.34.199.714.297,1.087.297.358,0,.716-.091,1.041-.274l5.212-2.854c.687-.386,1.096-1.086,1.096-1.873s-.409-1.487-1.105-1.878Zm-.961,2.003l-5.212,2.855c-.019.01-.077.042-.147-.001-.074-.043-.074-.107-.074-.128v-5.699c0-.021,0-.085.074-.128.027-.016.052-.021.074-.021.036,0,.065.016.083.026l5.192,2.844c.019.011.076.043.076.13s-.058.119-.066.125ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"/></svg>
                        ${project.buttonLabel}
                    </span>
                    </button>
                </a>
              </div>
            </div>
          </div>
        </div>`;

        // add separator
        if (i!=data.length-1) {
            template += `<div class="project-line-separator"></div>`;
        }
    });

    return template;
}

// Projects section call
const projectsContainer = document.getElementById('projectsContainer');
projectsContainer.innerHTML = getProjectsTemplate(projectsEN);

// Tables function
function getTableTemplate(data) {
    let skillsTemplate = `<div class="flex three-column-container"><div class="column">`;

    const elementsPerColumn = Math.round( data.length / 3 + 0.49 );
    let count = 0;
    data.forEach((skill, i) => {
        // add new column if needed
        if (count%elementsPerColumn == 0 && count != 0) {
            skillsTemplate += `</div>
            <div class="column">`;
        }

        // add skill block
        skillsTemplate += `
            <div class="skillBox">
                <div class="imagewithtext-block" data-index="${i}">
                    <a href="${skill.url}" target="_blank">
                        <img src="${skill.image}" alt="">
                    </a>
                    <span>${skill.name}</span>
                </div>
            </div>`;

        // increment counter
        count++;
    });
    skillsTemplate += '</div></div>';

    return skillsTemplate;
}

// Tables calls

const skillsContainer = document.getElementById('skillsContainer');
skillsContainer.innerHTML += getTableTemplate(skills);

const releaseSkillsContainer = document.getElementById('releaseSkillsContainer');
releaseSkillsContainer.innerHTML += getTableTemplate(releaseSkills);

const languagesContainer = document.getElementById('languagesContainer');
languagesContainer.innerHTML += getTableTemplate(languages);