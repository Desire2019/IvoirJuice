    // Liste des jus avec leurs détails
    let juices = [
        { name: "Ananas", image: "images/ananas.jpg", description: "Jus d'ananas rafraîchissant", price: "1500 F" },
        { name: "Bissap", image: "images/bissap.jpg", description: "Jus de bissap exotique", price: "1500 F" },
        { name: "Tomydji", image: "images/tomy.jpg", description: "Jus de Tomydji délicieux", price: "1500 F" },
        { name: "Orange", image: "images/orange.jpg", description: "Jus d'orange fraîchement pressé", price: "1500 F" },
        { name: "Passion", image: "images/passion.jpg", description: "Jus de fruit de la passion tropical", price: "1500 F" },
        { name: "Lait caille", image: "images/laitcaille.jpg", description: "Jus de lait caillé traditionnel", price: "1500 F" },
        // Ajouter deux jus supplémentaires
        { name: "Mangue", image: "images/mangue.jpg", description: "Jus de mangue sucré et rafraîchissant", price: "1500 F" },
        { name: "Goyave", image: "images/goyave.jpg", description: "Jus de goyave riche en vitamines", price: "1500 F" }
    ];

    // Sélectionner l'élément contenant les jus
    let juicesContainer = document.getElementById("juices");

    // Générer dynamiquement une carte pour chaque jus
    juices.forEach(juice => {
        // Créer les éléments HTML pour la carte du jus
        let card = document.createElement("div");
        card.classList.add("col-md-3", "mt-3"); // Changer la classe pour ajuster la taille
        card.innerHTML = `
            <div class="card border-0">
                <div class="card-body text-center">
                    <img src="${juice.image}" alt="${juice.name}" class="img-fluid">
                    <h5 class="card-title">${juice.name}</h5>
                    <p class="card-text text-muted">${juice.description}</p>
                    <p class="display-8 fw-bold">${juice.price}</p>
                    <button class="btn btn-outline-success btn-sm mt-3" onclick="addToCart('${juice.name}', '${juice.price}')">Ajouter au Panier</button>
                </div>
            </div>
        `;
        // Ajouter la carte au conteneur des jus
        juicesContainer.appendChild(card);
    });



//validation fornmulaire
document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    
    if (name.trim() !== "" && address.trim() !== "" && phone.trim() !== "") {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModalCenter'));
        myModal.show();
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});
  