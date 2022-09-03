const loadcatagories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displaycatagories(data.data.news_category);
}

const displaycatagories = catagories =>{
    const catagorysection = document.getElementById('catagory-section');
    catagories.forEach(catagory => {
        const catagorypera = document.createElement('a');
        catagorypera.innerHTML = `
            <a class="navbar-brand fw-bold" href="#">${catagory.category_name}</a>
        `
        catagorysection.appendChild(catagorypera);
    });
}




loadcatagories();

