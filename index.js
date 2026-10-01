/**
 * @typedef Party
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} date
 * @property {string} location
 *
 */
//=========Constants============
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2608";
const RESOURCE = "/events";
const API = BASE + COHORT + RESOURCE;
// const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608/events";
//====State========
let parties = [];
let selectedParties;

/** */

async function getParties() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    parties = result.data;
  } catch (error) {
    console.error(error);
    alert("Sorry! couldn't get parties");
  }
}

async function getParty(id) {
  try {
    const response = await fetch(API + "/" + id);
    const result = await response.json();
    selectedParties = result.data;
    render();
  } catch (error) {
    console.error(error);
    alert("Sorry! couldn't get party");
  }
}
//==== Component====
function PartyListItem(party) {
  const $li = document.createElement("li");
  $li.innerHTML = `
  <a href="#selected">${party.name}</a>
  `;
  $li.addEventListener("click", () => getParties(party.id));
  return $li;
}

function PartyList() {
  const $ul = document.createElement("ul");
  const $party = parties.map(PartyListItem);
  $ul.replaceChildren(...$party);

  return $ul;
}
//=====render=====
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>FullStack Events</h1>
  <PartyList></PartyList>
  `;
  $app.querySelector("PartyList").replaceWith(PartyList());
}
async function init() {
  await getParties();
  render();
}
init();
