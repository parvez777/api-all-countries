document.getElementById('showCountries').addEventListener('click', async function(){

   await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => allCountriesData(data))
    
    function allCountriesData(countries){
        
        countries.map( country => {
            const container = document.getElementById('container');
            const div = document.createElement('div')
            div.innerHTML = `
            <h1> ${country.name.common} </h1>
            <h3><span>Capital:</span> ${country.capital} </h3>
            <h4><span>Population:</span> ${country.population} </h4>
            <img src=${country.flags.png} />
            
            `


            container.appendChild(div)
        })
    }
})


