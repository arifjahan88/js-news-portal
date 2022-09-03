const loadcatagories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displaycatagories(data.data.news_category);
}

const displaycatagories = catagories =>{
    const catagorysection = document.getElementById('catagory-section');
    catagories.forEach(catagory => {
        // console.log(catagory);
        const catagorypera = document.createElement('a');
        catagorypera.innerHTML = `
            <a onclick="Loadnewsdetails('${catagory.category_id}')" class="navbar-brand fw-bold" href="#">${catagory.category_name}</a>
        `
        catagorysection.appendChild(catagorypera);
    });
}

const Loadnewsdetails = (cat_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${cat_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaycatagorydetails(data.data))
    // console.log(url);
}

const displaycatagorydetails = catagories =>{
    const detailscontainer = document.getElementById('details-container')
    detailscontainer.textContent = '';

    catagories.forEach(catagory => {
        console.log(catagory);
        const catagorydiv = document.createElement('div');
        catagorydiv.classList.add('row','g-2');
        catagorydiv.innerHTML = `
    <div class="col-md-4 h-100">
        <img src="${catagory.thumbnail_url}" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
    <div class="card-body">
        <h5 class="card-title">${catagory.title}</h5>
        <p class="card-text">
            ${catagory.details}
        </p>
        <p class="card-text">
            <small class="text-muted pe-5">Auther : ${catagory.author.name}</small>
            <small class="text-muted">Rating : ${catagory.rating.number}</small>
        </p>
        </div>
    </div>
        `
    detailscontainer.appendChild(catagorydiv);
    })

    console.log(catagories);
}

// const loadcatagorydetails = async() =>{
//     const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displaycatagorydetails(data.data[0]);
// }


loadcatagories();
//loadcatagorydetails();
