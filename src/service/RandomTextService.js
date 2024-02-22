// RandomTextService.js
import axios from 'axios';

async function fetchRandomText() {
    try {
        const response = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1');
        return response.data[0];
    } catch (error) {
        console.error('Error fetching random text:', error);
        return null;
    }
}

export default fetchRandomText;
