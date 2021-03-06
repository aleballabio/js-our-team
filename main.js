const arrTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        Image: "wayne-barnett-founder-ceo.jpg"

    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        Image: "angela-caroll-chief-editor.jpg"

    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        Image: "walter-gordon-office-manager.jpg"

    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        Image: "angela-lopez-social-media-manager.jpg"

    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        Image: "scott-estrada-developer.jpg"

    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        Image: "barbara-ramos-graphic-designer.jpg"

    }
]

for (let times = 0; times < arrTeam.length; times++) {
    const arrMember = arrTeam[times];
    GetCardCreation(arrMember.nome, arrMember.ruolo, arrMember.Image);
}

//Card Creation
function GetCardCreation(name, role, image) {
    let container = document.querySelector(".team-container");

    let card = `<div class="team-card">
            <div class="card-image">
              <img
                src="img/${image}"
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

// Bonus

let btn = document.getElementById("addMemberButton");

btn.addEventListener("click", addNewMemberCard);

function addNewMemberCard() {
    let inputName = document.getElementById("name").value;
    let inputRole = document.getElementById("role").value;
    let inputImage = document.getElementById("image").value;

    GetCardCreation(inputName, inputRole, inputImage);

}