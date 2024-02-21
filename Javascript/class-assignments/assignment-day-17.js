// Assignment - 17 (Promises)

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesPromise = new Promise((resolve, reject) => {
    fetch(countriesAPI)
    .then((response) =>{
        if(!response.ok)
        throw new Error('API is not giving response');
       return response.json();
     })
     .then((data)=> resolve(data))
     .catch(error => reject(error))
})
countriesPromise
.then( data => {
    data.)
.catch( error => console.log("Fetching of countries data failed", error))

// Print out all the cat names in to catNames variable.
const catPromise = new Promise((resolve, reject) => {
    fetch(url)
    .then((response) =>{
        if(!response.ok)
        throw new Error('API is not giving response');
       return response.json();
     })
     .then((data)=> resolve(data))
     .catch(error => reject(error))
})
catPromise
.then( data => console.log(data))
.catch( error => console.log(error))

// Read the cats api and find the average weight of cat in metric unit.


// Read the countries api and find out the 10 largest countries


// Read the countries api and count total number of languages in the world used as officials.