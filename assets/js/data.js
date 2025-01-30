let skills = [
    {
        'image':'assets/icons/code.png',
        'name':'HTML',
        'url':'https://www.flaticon.com/free-assets/icons/code'
    },
    {
        'image':'assets/icons/css.png',
        'name':'CSS',
        'url':'https://www.flaticon.com/free-assets/icons/css'
    },
    {
        'image':'assets/icons/java-script.png',
        'name':'Javascript',
        'url':'https://www.flaticon.com/free-assets/icons/java'
    },
    {
        'image':'assets/icons/python.png',
        'name':'Python',
        'url':'https://www.flaticon.com/free-assets/icons/python'
    },
    {
        'image':'assets/icons/salesforce.png',
        'name':'Salesforce',
        'url':'https://www.flaticon.com/free-assets/icons/salesforce'
    },
    {
        'image':'assets/icons/apex.png',
        'name':'Apex',
        'url':''
    },
    {
        'image':'assets/icons/letter-c.png',
        'name':'C',
        'url':'https://www.flaticon.com/free-assets/icons/letter-c'
    },
    {
        'image':'assets/icons/c++.png',
        'name':'C++',
        'url':'https://www.flaticon.com/free-assets/icons/coding'
    },
    {
        'image':'assets/icons/java-original.svg',
        'name':'Java',
        'url':''
    },
    {
        'image':'assets/icons/php.png',
        'name':'PHP',
        'url':'https://www.flaticon.com/free-assets/icons/php'
    },
    {
        'image':'assets/icons/mysql.png',
        'name':'SQL',
        'url':'https://www.flaticon.com/free-assets/icons/mysql'
    }
];
let releaseSkills = [
    {
        'image':'assets/icons/git.png',
        'name':'Git / Github',
        'url':'https://www.flaticon.com/free-assets/icons/git'
    },
    {
        'image':'assets/icons/jira.png',
        'name':'Jira',
        'url':'https://www.flaticon.com/free-assets/icons/jira'
    },
    {
        'image':'assets/icons/trello.png',
        'name':'Trello',
        'url':'https://www.flaticon.com/free-assets/icons/trello'
    }
];
let languages = [
    {
        'image':'assets/icons/spanish.png',
        'name':'Spanish Native',
        'url':'https://www.flaticon.com/free-assets/icons/spanish'
    },
    {
        'image':'assets/icons/eng.png',
        'name':'English Advanced',
        'url':'https://www.flaticon.com/free-assets/icons/english-language'
    }
];

let projectsES = [
    {
        'img':'assets/img/projects/Salesforce.png',
        'title':'Proyectos varios',
        'subtitle': 'Salesforce',
        'year':'2023',
        'titleIcon': './assets/icons/salesforce.png',
        'openCode' : false,
        'buttonLabel' : 'Information',
        'codeIcon' : 'M19,8V7A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM7,7A5,5,0,0,1,17,7V8H7ZM20,21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20Z',
        'description':'Recopilado de porciones de código utilizadas en diversos proyectos en Salesforce. La mayoría de ellos se relacionan con tareas de backend empleando apex, junto con su conexión con el front-end mediante JavaScript, aunque también trabajé en la parte visual utilizando LWCs y herramientas de Omnistudio y Vlocity.',
        'projectUrl': 'salesforce_projects.html',
        'projectUrlTarget': '_blank',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'Salesforce', 'img': './assets/icons/salesforce.png'},
            {'nombre': 'Apex', 'img': './assets/icons/apex.png'},
            {'nombre': 'Vlocity', 'img': './assets/icons/vlocity.png'},
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'}
        ]
    },
    {
        'img':'assets/img/projects/AyL_Reservas_Page.png',
        'title':'A&L Eventos Reservas',
        'subtitle': 'Events Web Administrator',
        'year':'2022',
        'titleIcon': './assets/icons/ayl.png',
        'openCode' : true,
        'buttonLabel' : 'Demo',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Proyecto para la empresa A&L Eventos, dedicada a servicios de catering y pizza party para eventos. Esta web permite gestionar los eventos del usuario mediante una interfaz sencilla que muestra una tarjeta por cada evento, permitiendo hacer altas, bajas y modificaciones. Se requirió realizar modificaciones en la base de datos existente utilizada en su página web, así como los diseños y funcionamiento correspondiente.',
        'projectUrl': 'https://ayleventosreservaswebdemo.vercel.app/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/AyL_Eventos_Reservas_Web_Demo_Publico',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'},
            {'nombre': 'PHP', 'img': './assets/icons/php.png'},
            {'nombre': 'SQL', 'img': './assets/icons/mysql.png'}
        ]
    },
    {
        'img':'assets/img/projects/AyL_Page.png',
        'title':'A&L Eventos',
        'subtitle': 'Business Page',
        'year':'2021',
        'titleIcon': './assets/icons/ayl.png',
        'openCode' : true,
        'buttonLabel' : 'Project',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Página web de la empresa A&L Eventos, dedicada a servicios de catering y pizza party para eventos. La web cuenta con diversas secciones de información relevante para el cliente, como lo son la sección de novedades, combos, galería y contacto, que permiten conocer perfectamente lo qué brinda la empresa navegando por la página.',
        'projectUrl': 'https://ayl-eventos.vercel.app/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/AyL_Eventos_Publico',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'},
            {'nombre': 'PHP', 'img': './assets/icons/php.png'},
            {'nombre': 'SQL', 'img': './assets/icons/mysql.png'}
        ]
    },
    {
        'img':'assets/img/projects/RPMotos_Page.png',
        'title':'RPMotos',
        'subtitle': 'Business Page',
        'year':'2021',
        'titleIcon': './assets/icons/RPMotos.png',
        'openCode' : true,
        'buttonLabel' : 'Project',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Landing page de contacto de la empresa RPMotos, dedicada a la venta de repuestos de motocicletas. Muestra información breve de contacto.',
        'projectUrl': 'https://agustinmendez25.github.io/Rpmotos/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/Rpmotos',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
        ]
    },
    {
        'img':'assets/img/projects/RPMotosCompleta_Page.png',
        'title':'RPMotos E-Commerce',
        'subtitle': 'E-Commerce',
        'year':'2021',
        'titleIcon': './assets/icons/RPMotos.png',
        'openCode' : true,
        'buttonLabel' : 'Demo',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Proyecto personal de e-commerce para la empresa RPMotos. Este sitio cuenta con un catalogo de productos desarrollado desde cero que permite filtrar por categorías, orden y nombre de producto. Además, incluye un sistema de inicio de sesión y carrito de compras con el cual se puede navegar y guardar distintos productos para solicitar un presupuesto completo de los mismos.',
        'projectUrl': 'https://rpmotos-completa.vercel.app/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/RpmotosCompleta',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'},
            {'nombre': 'PHP', 'img': './assets/icons/php.png'},
            {'nombre': 'SQL', 'img': './assets/icons/mysql.png'}
        ]
    }
]

let projectsEN = [
    {
        'img':'assets/img/projects/Portfolio_Page.png',
        'title':'Mi Portfolio',
        'subtitle': 'Proyecto personal',
        'year':'2025',
        'titleIcon': './assets/icons/portfolio.png',
        'openCode' : true,
        'buttonLabel' : 'Project',
        'codeIcon' : 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Portofolio personal con el objetivo de mostrar los proyectos en los que trabajé y brindar mayores detalles acerca de mis habilidades.',
        'projectUrl': 'index.html',
        'projectUrlTarget': '',
        'codeUrl': 'https://github.com/AgustinMendez25/Portfolio',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'}
        ]
    },
    {
        'img':'assets/img/projects/Salesforce.png',
        'title':'Proyectos varios',
        'subtitle': 'En Salesforce',
        'year':'2023-2025',
        'titleIcon': './assets/icons/salesforce.png',
        'openCode' : false,
        'buttonLabel' : 'Demo',
        'codeIcon' : 'M19,8V7A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM7,7A5,5,0,0,1,17,7V8H7ZM20,21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20Z',
        'description':'Recopilado de porciones de código utilizadas en diversos proyectos en Salesforce. La mayoría de ellos se relacionan con tareas de backend empleando apex, junto con su conexión con el front-end mediante JavaScript, aunque también trabajé en la parte visual utilizando LWCs y herramientas de Omnistudio y Vlocity.',
        'projectUrl': 'salesforce_projects.html',
        'projectUrlTarget': '',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'Salesforce', 'img': './assets/icons/salesforce.png'},
            {'nombre': 'Apex', 'img': './assets/icons/apex.png'},
            {'nombre': 'Vlocity', 'img': './assets/icons/vlocity.png'},
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'}
        ]
    },
    {
        'img':'assets/img/projects/AyL_Reservas_Page.png',
        'title':'A&L Eventos Reservas',
        'subtitle': 'Events Web Administrator',
        'year':'2022',
        'titleIcon': './assets/icons/ayl.png',
        'openCode' : true,
        'buttonLabel' : 'Demo',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Proyecto para la empresa A&L Eventos, dedicada a servicios de catering y pizza party para eventos. Esta web permite gestionar los eventos del usuario mediante una interfaz sencilla que muestra una tarjeta por cada evento, permitiendo hacer altas, bajas y modificaciones. Se requirió realizar modificaciones en la base de datos existente utilizada en su página web, así como los diseños y funcionamiento correspondiente.',
        'projectUrl': 'https://ayleventosreservaswebdemo.vercel.app/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/AyL_Eventos_Reservas_Web_Demo_Publico',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'},
            {'nombre': 'PHP', 'img': './assets/icons/php.png'},
            {'nombre': 'SQL', 'img': './assets/icons/mysql.png'}
        ]
    },
    {
        'img':'assets/img/projects/AyL_Page.png',
        'title':'A&L Eventos',
        'subtitle': 'Business Page',
        'year':'2021',
        'titleIcon': './assets/icons/ayl.png',
        'openCode' : true,
        'buttonLabel' : 'Project',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Página web de la empresa A&L Eventos, dedicada a servicios de catering y pizza party para eventos. La web cuenta con diversas secciones de información relevante para el cliente, como lo son la sección de novedades, combos, galería y contacto, que permiten conocer perfectamente lo qué brinda la empresa navegando por la página.',
        'projectUrl': 'https://ayl-eventos.vercel.app/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/AyL_Eventos_Publico',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'},
            {'nombre': 'PHP', 'img': './assets/icons/php.png'},
            {'nombre': 'SQL', 'img': './assets/icons/mysql.png'}
        ]
    },
    {
        'img':'assets/img/projects/RPMotos_Page.png',
        'title':'RPMotos',
        'subtitle': 'Business Page',
        'year':'2021',
        'titleIcon': './assets/icons/RPMotos.png',
        'openCode' : true,
        'buttonLabel' : 'Project',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Landing page de contacto de la empresa RPMotos, dedicada a la venta de repuestos de motocicletas. Muestra información breve de contacto.',
        'projectUrl': 'https://agustinmendez25.github.io/Rpmotos/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/Rpmotos',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
        ]
    },
    {
        'img':'assets/img/projects/RPMotosCompleta_Page.png',
        'title':'RPMotos E-Commerce',
        'subtitle': 'E-Commerce',
        'year':'2021',
        'titleIcon': './assets/icons/RPMotos.png',
        'openCode' : true,
        'buttonLabel' : 'Demo',
        'codeIcon': 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
        'description':'Proyecto personal de e-commerce para la empresa RPMotos. Este sitio cuenta con un catalogo de productos desarrollado desde cero que permite filtrar por categorías, orden y nombre de producto. Además, incluye un sistema de inicio de sesión y carrito de compras con el cual se puede navegar y guardar distintos productos para solicitar un presupuesto completo de los mismos.',
        'projectUrl': 'https://rpmotos-completa.vercel.app/',
        'projectUrlTarget': '_blank',
        'codeUrl': 'https://github.com/AgustinMendez25/RpmotosCompleta',
        'participationList':[
            'Análisis Funcional',
            'Análisis Técnico',
            'Desarrollo Backend'
        ],
        'technologiesList':[
            {'nombre': 'HTML', 'img': './assets/icons/code.png'},
            {'nombre': 'CSS', 'img': './assets/icons/css.png'},
            {'nombre': 'JS', 'img': './assets/icons/java-script.png'},
            {'nombre': 'PHP', 'img': './assets/icons/php.png'},
            {'nombre': 'SQL', 'img': './assets/icons/mysql.png'}
        ]
    }
]

// function getProjectsTemplate(data) {
//     let template = '';
//     data.forEach((project, i) => {
        
//         // add initial template
//         template += `
//         <div class="row project">
//           <div class="col-md-12 col-lg-4" style="margin: auto">
//             <img src="${project.img}" alt="" style="border:solid 1px #bab7b7">
//           </div>
//           <div class="col-md-12 col-lg-8 project-data">
//             <div class="row project-header">
//               <div>
//                 <h4>${project.title} <img class="projectIcon" src="${project.titleIcon}" alt=""></h4>
//                 <h6>${project.subtitle}</h6>
//               </div>
//               <div>
//                 <p class="year-text">${project.year}</p>
//               </div>
//             </div>
//             <div class="row">
//               <p>${project.description}</p>
//             </div>
//             <div class="row" style="justify-content:space-between">
//               <div class="col-md-12 col-lg-6 techsProject">`;
        
//         // add technologies
//         let technologiesList = '';
//         project.technologiesList.forEach(elem => {
//             technologiesList += `<span class="tech-span"><img src="${elem.img}" alt="">${elem.nombre}</span>`;
//         });

//         // add end
//         template += technologiesList + `
//                         </div>
//               <div class="col-md-12 col-lg-6 projectButtons">
//                 ` + (project.openCode ? `<a href="${project.codeUrl}" target="_blank">` : ``) + `
//                     <button class="cssbuttons-io ${project.openCode ? 'open-code' : 'close-code'}">
//                         <span>
//                             <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M0 0h24v24H0z" fill="none"></path><path d="${project.codeIcon}" fill="currentColor"></path>
//                             </svg>
//                             Code
//                         </span>
//                     </button>
//                 ` + (project.openCode ? `</a>` : ``) + `
//                 <a href="${project.projectUrl}" target="${project.projectUrlTarget}">
//                     <button class="cssbuttons-io">
//                     <span>
//                         <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="568" height="568"><path fill="white" d="m16.395,10.122l-5.192-2.843c-.673-.379-1.473-.372-2.138.017-.667.39-1.064,1.083-1.064,1.855v5.699c0,.772.397,1.465,1.064,1.855.34.199.714.297,1.087.297.358,0,.716-.091,1.041-.274l5.212-2.854c.687-.386,1.096-1.086,1.096-1.873s-.409-1.487-1.105-1.878Zm-.961,2.003l-5.212,2.855c-.019.01-.077.042-.147-.001-.074-.043-.074-.107-.074-.128v-5.699c0-.021,0-.085.074-.128.027-.016.052-.021.074-.021.036,0,.065.016.083.026l5.192,2.844c.019.011.076.043.076.13s-.058.119-.066.125ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"/></svg>
//                         ${project.buttonLabel}
//                     </span>
//                     </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>`;

//         // add separator
//         if (i!=data.length-1) {
//             template += `<div class="project-line-separator"></div>`;
//         }
//     });

//     return template;
// }

// const projectsContainer = document.getElementById('projectsContainer');
// projectsContainer.innerHTML += getProjectsTemplate(projects);