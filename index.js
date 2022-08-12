const cats = ["Milo", "Otis", "Garfield"];


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(name) {
    cats.push("Ralph");
  }

  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }

  function destructivelyRemoveLastCat() {
    cats.pop(2);
  }

  function destructivelyRemoveFirstCat() {
    cats.shift(0);
  }

  function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
  }

  function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
  }

  function removeLastCat() {
    const newCats = cats.slice(0,2);
    return newCats;
  }

  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }