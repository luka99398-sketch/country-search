let countries = [
    { name: "germany", img: "germany.png", population: "81,770,900", capital: "berlin" },
    { name: "america", img: "america.png", population: "323,947,000", capital: "washington" },
    { name: "algeria", img: "download.png", population: "40,400,000", capital: "algiers" },
    { name: "iceland", img: "iceland.png", population: "334,300", capital: "reykjavik" }
];

const search = document.getElementById("input");
const result = document.getElementById("rslt");
const cardBox = document.getElementById("cardBox");
const grids = document.querySelector(".grids");

search.onkeyup = function(){
    let filtered = [];
    let txt = search.value.trim().toLowerCase();

    cardBox.innerHTML = "";

    if(txt.length){
        grids.style.display = "none";
        filtered = countries.filter((country)=>{
            return country.name.includes(txt);
        });
    } else {
        grids.style.display = "grid";
    }

    display(filtered);
};

function display(filtered){
    const content = filtered.map((item)=>{
        return "<li onclick='selectCountry(this)'>" + item.name + "</li>";
    });
    result.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectCountry(li){
    grids.style.display = "none";

    let name = li.textContent;
    search.value = name;
    result.innerHTML = "";

    let country = countries.find((c)=>{
        return c.name === name;
    });

    cardBox.innerHTML =
        "<div class='card'>" +
            "<img src='" + country.img + "' alt=''>" +
            "<h3>" + country.name + "</h3>" +
            "<p>population: <span>" + country.population + "</span></p>" +
            "<p>capital: <span>" + country.capital + "</span></p>" +
        "</div>";
}