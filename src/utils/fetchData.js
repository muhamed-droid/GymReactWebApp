
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc18ec98e7msh3c5f4b56b80bfc4p1fa170jsnfa84640ce666',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();
    return data;
}