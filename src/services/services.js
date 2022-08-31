const LOCAL = null //'http://localhost:9000/api';
const API_URL = LOCAL || 'https://fpl-fetch.netlify.app/api';

export async function bootstrapStatic() {
    return fetch(`${API_URL}/bootstrap-static`).then(_ => _.ok ? _.json() : null)
}

export async function getRecomendation() {
    return fetch(`${API_URL}/recomendation`).then(_ => _.ok ? _.json() : null)
}

export async function getPlayerSurpluses(id) {
    return fetch(`${API_URL}/player-surpluses/${id}`).then(_ => _.ok ? _.json() : null)
}