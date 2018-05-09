const colors = {
    greenish: '#5fc35f', 
    blackish: 'rgb(38, 41, 52)', 
    grayish: '#e6e6e6'
}

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1234/api/' : 'http://178.62.116.27/api/';
const API_SKILLS = API_URL + 'skills'

export {
    colors,
    API_SKILLS
}; 