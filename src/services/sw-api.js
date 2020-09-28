export function getAllStarships() {
    const endpoint = 'https://swapi.dev/api/';
    return fetch(`${endpoint}starships`, {mode: 'cors'}).then(res => res.json());
};