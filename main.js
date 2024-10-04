
const PI = 3.14;

function obim(poluprecnik) {
    const obimKruga = 2 * PI * poluprecnik;
    console.log(`Obim kruga: ${obimKruga}`);
}


obim(5); 


const povrsinaPravougaonika = function(a, b) {
    const povrsina = a * b;
    console.log(`Površina pravougaonika: ${povrsina}`);
};

povrsinaPravougaonika(4, 6); 


function kvadrat(a) {
    const obimKvadrata = function() {
        return 4 * a;
    };
    
    const povrsinaKvadrata = function() {
        return a * a;
    };
    
    console.log(`Obim kvadrata: ${obimKvadrata()}`);
    console.log(`Površina kvadrata: ${povrsinaKvadrata()}`);
}

kvadrat(3); 

const obimPravougaonika = (a, b) => {
    const obim = 2 * (a + b);
    console.log(`Obim pravougaonika: ${obim}`);
};

obimPravougaonika(4, 6); 

(function(ime) {
    console.log(`Pozdrav, ${ime}!`);
})('Marko'); 
