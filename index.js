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
const COHORT= "/2608";
const RESOURCE="/events"


//====State========
let parties = [];
let selectedParties;


/** */