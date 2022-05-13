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
    place: 'CANOPY',
    title: 'Back End Dev',
    year: '2015',
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'javascript', 'Ruby', 'github', 'Boostrap'],
    image: {
      link: 'logos/tonic-project-desktop.svg',
      alt: 'Project Screenshot',
    },

    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    place: 'Facebook',
    title: 'Full Stack Dev',
    year: '2015',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'logos/multi-post-stories-project.svg',
      alt: 'Multi-Post Stories screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 2,
    name: 'Facebook 360',
    place: 'Facebook',
    title: 'Full Stack Dev',
    year: '2015',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'logos/facebook-360-project.svg',
      alt: 'Facebook 360screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Uber',
    place: 'Uber',
    title: 'Lead Developer',
    year: '2018',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'logos/uber-navigation-project.svg',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
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
    return projects[projectIndex].technologies
      .map((tech) => `<li class="language">${tech}</li>`)
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
              <img src="./logos/tonicd.png" alt="tonic project" />
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
                A daily selection of privately personalized reads; no accounts
                or sign-ups required.
              </p>
              <div class="works__card__topics flex">
                <p class="works__card__topics__text p2 w1">html</p>
                <p class="works__card__topics__text p2 w1">css</p>
                <p class="works__card__topics__text p2 w1">javascript</p>
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