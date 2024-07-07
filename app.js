let tblCountries = document.getElementById("tblCountries");

let tableBody = `      <tr>
            <th>Name</th>
            <th>Flag</th>
        </tr>` ;



fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        tableBody+=`<tr>
                        <td><h1>${element.name.common}</h1>
                        <p>Official Name :${element.name.official}</br>
                        Region : ${element.region}</br>
                        Capital :${element.capital}</br>
                        Population :${element.population}</br>
                        </p>
                        <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>

                        
                        
                        </td>
                        
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
        
    });

    tblCountries.innerHTML=tableBody;
})

function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            capital.innerHTML=obj.capital;
            population.innerText=obj.population
        })
    })
}