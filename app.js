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
