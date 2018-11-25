/* 
Créez une classe Panier avec :

une méthode ajoute( produit )
une méthode retire( produit )
une proprieté totalHT
une proprieté totalTTC */

var Produit = {
    init:function(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
}

var Panier = {
    init:function(produit, prixHT){
        this.produit = this.nom;
        this.prixHT = prixHT;
    },
    ajoute:function(produit){
        // push ?
        
    },
    retire:function(produit){

    },

    
    totalHT: "",
    totalTTC: ""

}



var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC);