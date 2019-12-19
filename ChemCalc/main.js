const form = document.querySelector("form")
const tsz = document.querySelector("#tsz");
const oa = document.querySelector("#oa");
const osz = document.querySelector("#osz");
const o = document.querySelector("#o");
const resultHeader = document.querySelector("#result-header");
const result = document.querySelector("#result");

const enableAll = () => {
    tsz.disabled = false;
    oa.disabled = false;
    osz.disabled = false;
    o.disabled = false;
    tsz.value = null;
    oa.value = null;
    osz.value = null;
    o.value = null;
    result.innerHTML = null;
}

const calcTsz = (event) => {
    event.preventDefault();
    let oaErtek = oa.value;
    let oErtek = o.value;
    let ertek = (oaErtek / oErtek) * 100;
    result.innerHTML = ertek + "%";
}

const selectTsz = () => {
    enableAll();
    osz.disabled = true;
    tsz.disabled = true;
    resultHeader.innerHTML = "Tömegszázalék: "
    form.onsubmit = () => {calcTsz(event);}
}

const calcOa = (event) => {
    event.preventDefault();
    let oErtek = o.value;
    let oszErtek = osz.value;
    let ertek = oErtek - oszErtek;
    result.innerHTML = ertek;
}

const selectOa = () => {
    enableAll();
    oa.disabled = true;
    tsz.disabled = true;
    resultHeader.innerHTML = "Oldott anyag: "
    form.onsubmit = () => {calcOa(event);}
}

const calcOsz = (event) => {
    event.preventDefault();
    let oErtek = o.value;
    let oaErtek = oa.value;
    let ertek = oErtek - oaErtek;
    result.innerHTML = ertek;
}

const selectOsz = () => {
    enableAll();
    osz.disabled = true;
    tsz.disabled = true;
    resultHeader.innerHTML = "Oldószer: "
    form.onsubmit = () => {calcOsz(event);}
}

const calcO = (event) => {
    event.preventDefault();
    let oaErtek = oa.value;
    let oszErtek = osz.value;
    let ertek = oaErtek*1 + oszErtek*1;
    result.innerHTML = ertek;
}

const selectO = () => {
    enableAll();
    o.disabled = true;
    tsz.disabled = true;
    resultHeader.innerHTML = "Oldat: "
    form.onsubmit = () => {calcO(event);}
}