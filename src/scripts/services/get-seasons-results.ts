import axios from 'axios';

export default function getSeasonsResults(season: string, round: string): Promise<any> {
    return axios.get(`https://ergast.com/api/f1/${season}/${round}/results.json`);
}
