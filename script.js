// Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

// Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. 
// Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například
//      Catering od Flavour Haven pro 100 lidí za 300000 Kč  (Vyzkoušjte si vaše funkce v konzoli.)

// Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
// Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Fce createEvent pak vrátí napr. zprávu:
//      Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč

const justFood = (visitors) => `cateringem od Just Food pro ${visitors} lidi za ${visitors * 100} Kc`

const yourMama = (visitors) => `cateringem od Your Mama pro ${visitors} lidi za ${visitors * 500} Kc`

const flavourHaven = (visitors) => `cateringem od Flavour Haven pro ${visitors} lidi za ${visitors * 1000} Kc`

console.log(justFood(20))
console.log(yourMama(20))
console.log(flavourHaven(20))

const createEvent = (nazev, visitors, cateringCompany) => {
    return `Udalost ${nazev} s ${cateringCompany(visitors)} `
}

console.log(createEvent("Party doma", 30, justFood))
console.log(createEvent("Oslava narozenin", 20, yourMama))
console.log(createEvent("Svatba", 30, flavourHaven))
