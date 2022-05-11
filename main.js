let isClicked = false;

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
    name: 'Tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'logos/popup.png',
      alt: 'Facebook 360screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 3,
    name: 'Uber',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'logos/popup.png',
      alt: 'Uber Navigation screenshot',
    },
    liveSource: '#',
    sourceCode: '#',
  },
  {
    id: 4,
    name: 'Uber',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    image: {
      link: 'logos/popup.png',
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
    <div class= "headtitle">${projects[projectIndex].name}</div>
    <div class="closeDetails" id="closeDetails">&times;</div>
    </div>
     
      <img class="project-image" src="${
        projects[projectIndex].image.link
      }" alt="${projects[projectIndex].image.alt}" />
      <div class="project-info">
        </div>
      <div class="tech-and-buttons">
        <div>
        <p class="description">
         ${projects[projectIndex].description}
        </p>
        </div>
        <div>
        <div>  
          <ul class="card-languages">
            ${(function usedTech() {
              return projects[projectIndex].technologies
                .map((tech) => `<li class="language">${tech}</li>`)
                .join('');
            })()}
          </ul>
        </div>
        <div class="">
          <a  href="${
            projects[projectIndex].liveSource
          }" class="btn green-button b1">See Live <i class="fa fa-external-link"></i></a>
           <a href="${
             projects[projectIndex].sourceCode
           }" class="btn green-button">See Source <i class="fa fa-github"></i></a>
        </div>

        </div>
          </div>

          
      
  </div>`;

  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
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
                <p class="works__card__subtitle-1">CANOPY</p>
                <ul class="works__card__subtitle-ul flex">
                  <li class="works__card__subtitle-li">Back End Dev</li>
                  <li class="works__card__subtitle-li">2015</li>
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
                <button type="button" class="btn b1 details-btn " type="button" data-id="${projects[j].id}">See Project</button>
              </div>
            </div>
          </li>`;
}
projectList.innerHTML = projectsCard;

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
  });
});
