let isClicked = false;
const form = document.getElementById('form');
const error = document.getElementById('error');

function openNav() {
  if (!isClicked) {
    document.getElementById('Mynav').style.display = 'block';
    document.getElementById('head').style.filter = 'blur(0.9rem)';
    document.getElementById('logo').style.filter = 'blur(0.9rem)';
    document.getElementById('hamb').style.display = 'none';
    isClicked = true;
  } else {
    document.getElementById('Mynav').style.display = 'none';
    document.getElementById('head').style.filter = 'none';
    document.getElementById('hamb').style.display = 'block';
    document.getElementById('logo').style.filter = 'none';
    isClicked = false;
  }
}

// eslint-disable-next-line no-unused-vars
function menuClicked() {
  openNav();
}

const projects = [
  {
    id: 0,
    place: 'Microverse',
    title: 'Fontend End Project',
    year: '2022',
    name: 'Metrics App',
    description:
      "This is a Metrics app that fetches metrics data (air-pollution) of countries in the world",
    technologies: ['html', 'css', 'react', 'github', 'Boostrap'],
    image: {
      link: 'logos/metric.png',
      alt: 'metric app picture',
    },

    liveSource: 'https://metric-app-rich.netlify.app/',
    sourceCode: 'https://github.com/assadounto/wiki-app/',
  },
  {
    id: 1,
    name: 'Tv Maze',
    place: 'Microverse',
    title: 'Frontend Dev Project',
    year: '2022',
    description:
      "In this project we created a fully functional web app that fetches tv shows from an api TV-maze Users can also comment and like movies and shows.",
    technologies: [ 'css', 'javascript', 'html'],
    image: {
      link: 'logos/tvmaze.png',
      alt: 'Tv maze',
    },
    liveSource: 'https://teckim.github.io/tv-maze/',
    sourceCode: 'https://github.com/assadounto/tv-maze',
  },
  {
    id: 2,
    name: 'My Conference',
    place: 'Microverse',
    title: 'Frontend Dev Project',
    year: '2022',
    description:
      "This a professional website based on Behance design . It is a project that uses Javascript objects to dynamically render DOM elements",
    technologies: ['css', 'javascript', 'html'],
    image: {
      link: 'logos/conf.png',
      alt: 'My conference',
    },
    liveSource: 'https://assadounto.github.io/Final-Capstone1/',
    sourceCode: 'https://github.com/assadounto/Final-Capstone1',
  },
  {
    id: 3,
    name: 'Book A Developer',
    place: 'Micoverse',
    title: 'Full-Stack App Project',
    year: '2022',
    description:
      "Full stack website for users to book developers for a project.",
    technologies: ['Ruby on rails', 'css', 'React', 'html'],
    image: {
      link: 'logos/dev.png',
      alt: 'Book a Dev',
    },
    liveSource: 'https://github.com/assadounto/Book-a-dev',
    sourceCode: 'https://github.com/assadounto/Book-a-dev',
  },
];

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
    <div class="details-container-content">
    <div class="headc">
    <h1 class= "headtitle">${projects[projectIndex].name}</h1>
    <div class="works__card__subtitle flex">
              <p class="works__card__subtitle-1 c1">
              <b>${projects[projectIndex].place}</b>
              </p>
              <ul class="works__card__subtitle-ul flex">
                <li class="works__card__subtitle-li c2">
                ${projects[projectIndex].title}
                </li>
                <li class="works__card__subtitle-li c2"> 
                ${projects[projectIndex].year}
                </li>
              </ul>
            </div>
    <div class="closeDetails" id="closeDetails">&times;</div>
    </div>
      <img class="project-image" src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
       <div class="s1"> 
      <p class="description">
        ${projects[projectIndex].description}
       </p>

        <div class="tech-and-buttons">
          <div class="card-languages">
            ${(function usedTech() {
    return projects[projectIndex].technologies.map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}
          </div>
          <div class="buttons">
            <a href="${
  projects[projectIndex].liveSource
}" class="btn green-button">
<div class ="it">See Live</div>
<div class="image"><img src="logos/Icon.png"></div>
 </a>

             <a href="${
  projects[projectIndex].sourceCode
}" class="btn green-button"><div class ="it">See source</div>
<div class="image"><img src="logos/Vector.png"></div>
 </a>
          </div>
          </div>
    </div>
  </div>`;

  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
    document.getElementById('hero').style.filter = 'none';
  });
}

const portfolioDynamic = document.getElementById('portfolio-section');
const projectList = document.createElement('ul');
projectList.className = 'works__cards ul grid';
portfolioDynamic.appendChild(projectList);

let projectsCard = '';
for (let j = 0; j < projects.length; j += 1) {
  projectsCard += `
  <li class="works__card flex bg-white">
            <div class="works__card__img">
              <img src="${projects[j].image.link}" alt="tonic project" />
            </div>
            <div class="works__card__text">
              <h2 class="works__card__title">${projects[j].name}</h2>
              <div class="works__card__subtitle flex">
                <p class="works__card__subtitle-1">${projects[j].place}</p>
                <ul class="works__card__subtitle-ul flex">
                  <li class="works__card__subtitle-li">${projects[j].title}</li>
                  <li class="works__card__subtitle-li">${projects[j].year}</li>
                </ul>
              </div>
              <p class="works__card__dsc p1">
              ${projects[j]. description}
              </p>
              <div class="works__card__topics flex">
              ${(function usedTech() {
                return projects[j].technologies
                  .map((tech) => `<p class="works__card__topics__text p2 w1">${tech}</p>`)
                  .join('');
              }())}
              </div>
              <div class="works__card__btn">
                <button type="button" class="btn b1 details-btn " type="button" data-id="${
  projects[j].id
}">See Project</button>
              </div>
            </div>
          </li>`;
}
projectList.innerHTML = projectsCard;

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    document.getElementById('hero').style.filter = 'blur(1.9rem)';
  });
});

form.addEventListener('submit', (event) => {
  let check = false;
  const emailInput = document.getElementById('user_email');
  if (emailInput.value.toLowerCase() === emailInput.value) {
    check = true;
  }
  if (check === false) {
    event.preventDefault();
    error.innerText = 'Please Your Email Must be in Lower Case';
    error.style.color = 'red';
  }
});