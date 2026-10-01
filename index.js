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
// const API = BASE + COHORT + RESOURCE;
const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608/events";
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
function render() {}
async function init() {
  await getParties();
  render();
}
init();
