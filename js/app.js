const loadcatagories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displaycatagories(data.data.news_category);
}

const displaycatagories = catagories =>{
    const catagorysection = document.getElementById('catagory-section');
    catagories.forEach(catagory => {
        console.log(catagory);
        const catagorypera = document.createElement('a');
        catagorypera.innerHTML = `
            <a class="navbar-brand fw-bold" href="#">${catagory.category_name}</a>
        `
        catagorysection.appendChild(catagorypera);
    });
}

const loadcatagorydetails = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`;
    const res = await fetch(url);
    const data = await res.json();
    displaycatagorydetails(data.data[0]);
}

const displaycatagorydetails = catagories =>{
    const detailscontainer = document.getElementById('details-container')
    const catagorydiv = document.createElement('div');
    catagorydiv.classList.add('row','g-0');
    catagorydiv.innerHTML = `
    <div class="col-md-4 h-100">
    <img src="${catagories.thumbnail_url}" class="img-fluid rounded-start" alt="..." />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${catagories.title}</h5>
      <p class="card-text">
        ${catagories.details}
      </p>
      <p class="card-text">
        <small class="text-muted pe-5">Auther : ${catagories.author.name}</small>
        <small class="text-muted">Rating : ${catagories.rating.number}</small>
      </p>
    </div>
  </div>
    `
    detailscontainer.appendChild(catagorydiv);
    console.log(catagories);
}


loadcatagories();
loadcatagorydetails();
