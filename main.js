const arrTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        Image: "img/wayne-barnett-founder-ceo.jpg"

    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        Image: "img/angela-caroll-chief-editor.jpg"

    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        Image: "img/walter-gordon-office-manager.jpg"

    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        Image: "img/angela-lopez-social-media-manager.jpg"

    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        Image: "img/scott-estrada-developer.jpg"

    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        Image: "img/barbara-ramos-graphic-designer.jpg"

    }
]

for (let times = 0; times < arrTeam.length; times++) {
    const arrMember = GetDataMember(arrTeam[times]);
    console.log(arrMember);
    const teamContainer = GetCardCreation(arrMember[0], arrMember[1], arrMember[2]);
}


// Data Extraction
function GetDataMember(member) {
    const arrInfo = []
    for (let key in member) {
        arrInfo.push(member[key]);
    }
    return arrInfo;
}

//Card Creation
function GetCardCreation(name, role, image) {
    let container = document.querySelector(".team-container");

    let card = `<div class="team-card">
            <div class="card-image">
              <img
                src="${image}"
                alt="${name}"
              />
            </div>
            <div class="card-text">
              <h3>${name}</h3>
              <p>${role}</p>
            </div>
          </div>`;

    container.innerHTML += card;
}