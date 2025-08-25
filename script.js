//Nouveauté
const news = [
    {id : 1, nom : "Costume noir", prix : 150000, image : "images/new_1.png"},
    {id : 2, nom : "Costume beige", prix : 200000, image : "images/new_2.png"},
    {id : 3, nom : "Menteau", prix : 60000, image : "images/new_3.png"},  
    {id : 4, nom : "T-short", prix : 15000, image : "images/new_4.png"}
];

function afficherNauveaute(){
    const conteneur = document.getElementById("news-container");
    news.forEach(n =>{
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${n.image}" width="100"/><br>
            <strong class="nom">${n.nom}</strong><br>
            <span class="prix">prix : ${n.prix}FCFA</span><br>
            <button onclick="afficherPanier('${n.id}')">Ajouter</button>
            `;
        conteneur.appendChild(div)
    })
}

afficherNauveaute();

//function ajouté au panierNouveauté
function ajouterAuPanier(id) {
    const produit = news.find(p => p.id === id);
    panier.push(produit);
    document.getElementById("cart-count").textContent = panier.length;
}

document.getElementById("container-panier").onclick = function() {
    const data = encodeURIComponent(JSON.stringify(panier));
    window.location.href = "panier.html?data=" + data;
}

afficherProduits();

//Navigation responsive
const navBar = document.querySelector('.navbar');
const BtnMenu = document.querySelector('#burger-menu');

BtnMenu.addEventListener('click', ()=>{
    navBar.classList.toggle('active');
    BtnMenu.classList.toggle('bx-x');
    searchContainer.classList.remove('active');
    userContainer.classList.remove('active');
})

//Disparition de navbar en responsive lorsqu'on clique sur un lien

const  linkNav = document.querySelectorAll('.navbar a');

linkNav.forEach(link => {
    link.addEventListener('click', ()=>{

        //Retirer la classe active de tous les liens
        linkNav.forEach(l => l.classList.remove('active'));

        link.classList.add('active');



        navBar.classList.remove('active');
        BtnMenu.classList.remove('bx-x');
    })
 });

 //changement de la couleur du lien lorsqu'on scroll : ScrollSpy (surveillance de section via le scroll)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let accutuelsectionid = '';

    // Trouver la section visible
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            accutuelsectionid = section.getAttribute('id');
        }
    });

    // D'abord, on retire 'active' de tous les liens
    linkNav.forEach(link => {
        link.classList.remove('active');

        // Ensuite, on ajoute 'active' au lien correspondant
        if (link.getAttribute('href') === '#' + accutuelsectionid) {
            link.classList.add('active');
        }
    });
});

