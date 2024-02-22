// RandomTextService.js
async function fetchRandomText() {
    try {
        const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1');
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error('Error fetching random text:', error);
        return null;
    }
}

export default fetchRandomText;
