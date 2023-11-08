// =============================
//       Objekte-Level-2_1
// =============================
console.log("%c=====Objekte-Level-2_1=====", "color:yellowgreen");
let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" },
];
const edelMetalName1 = [];
edelMetallPreise.forEach((jedeEdelMetal) => {
  edelMetalName1.push(jedeEdelMetal.name);
});
console.log(edelMetalName1);

const edelMetalName2 = edelMetallPreise.map((jedeEdelMetal) => {
  return jedeEdelMetal.name;
});
console.log(edelMetalName2);

const edelMetalPreiseGramEuro1 = [];
edelMetallPreise.forEach((jedeEdelMetal) =>
  edelMetalPreiseGramEuro1.push(jedeEdelMetal.preiseGramEuro)
);
console.log(edelMetalPreiseGramEuro1);

const edelMetalPreiseGramEuro2 = edelMetallPreise.map(
  (jedeEdelMetal) => jedeEdelMetal.preiseGramEuro
);
console.log(edelMetalPreiseGramEuro2);

const edelMetalChange1 = [];
edelMetallPreise.forEach((jedeEdelMetal) =>
  edelMetalChange1.push(jedeEdelMetal.veranderung)
);
console.log(edelMetalChange1);
const edelMetalChange2 = edelMetallPreise.map(
  (jedeEdelMetal) => jedeEdelMetal.veranderung
);
console.log(edelMetalChange2);

const edelMetallPreiseFilter = edelMetallPreise.filter(
  (jedeEdelMetal) => jedeEdelMetal.preiseGramEuro > 50
);
console.log(edelMetallPreiseFilter);

const table = document.body.querySelector("#table");

let i = 0;

table.innerHTML = `<div><p><b>Name</b></p><p><b>PreiseGramEuro</b></p><p><b>Veranderung</b></p></div>`;
while (i < edelMetallPreise.length) {
  table.innerHTML += `<div><p>${edelMetalName2[i]}</p><p>${edelMetalPreiseGramEuro2[i]}</p><p>${edelMetalChange2[i]}</p></div>`;
  i++;
}

// =============================
//       Objekte-Level-2_2
// =============================
console.log("%c=====Objekte-Level-2_2=====", "color:yellowgreen");

const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

singers.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
});
console.log(singers);

// =============================
//       Objekte-Level-2_3
// =============================
console.log("%c=====Objekte-Level-2_3=====", "color:yellowgreen");

const singers1 = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
const tableContainer = document.body.querySelector("#table-container");
const tableDraw = () => {
  tableContainer.innerHTML = `<div><button onclick="nameOrder()"><b>Name</b></button><button onclick="countryOrder()"><b>Country</b></button><button onclick="periodOrder()"><b>Period Active</b></button><button onclick="gerneOrder()"><b>Gerne</b></button></div>`;
  singers1.forEach((elt) => {
    tableContainer.innerHTML += `<div><p>${elt.name}</p><p>${elt.country}</p><p>${elt.period_active.start}-${elt.period_active.end}</p><p>${elt.genre}</p></div>`;
  });
};
tableDraw();
const tableReset = () => {
  tableContainer.innerHTML = "";
};

// =============================
//       Objekte-Level-2_4
// =============================
console.log("%c=====Objekte-Level-2_4=====", "color:yellowgreen");
const nameOrder = () => {
  tableReset();
  singers1.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  tableDraw();
};
const countryOrder = () => {
  tableReset();
  singers1.sort((a, b) => {
    if (a.country > b.country) {
      return 1;
    } else {
      return -1;
    }
  });
  tableDraw();
};

const periodOrder = () => {
  tableReset();
  singers1.sort((a, b) => {
    if (a.period_active.start > b.period_active.start) {
      return 1;
    } else {
      return -1;
    }
  });
  tableDraw();
};

const gerneOrder = () => {
  tableReset();
  singers1.sort((a, b) => {
    if (a.genre > b.genre) {
      return 1;
    } else {
      return -1;
    }
  });
  tableDraw();
};

// =============================
//       Objekte-Level-2_5
// =============================
console.log("%c=====Objekte-Level-2_5=====", "color:yellowgreen");
const textInput = document.body.querySelector("#textInput");
const output = document.body.querySelector("#output");

const singerSearch = () => {
  const nameInput = textInput.value;
  tableReset();
  console.log(nameInput);

  const singerFounden = singers1.map((elt) => {
    console.log(elt.name);
    if (elt.name === nameInput) {
      tableContainer.innerHTML = `<div><button onclick="nameOrder()"><b>Name</b></button><button onclick="countryOrder()"><b>Country</b></button><button onclick="periodOrder()"><b>Period Active</b></button><button onclick="gerneOrder()"><b>Gerne</b></button></div>`;

      tableContainer.innerHTML += `<div><p>${elt.name}</p><p>${elt.country}</p><p>${elt.period_active.start}-${elt.period_active.end}</p><p>${elt.genre}</p></div>`;
    }
  });
};
