const loadcatagories = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displaycatagories(data.data.news_category);
}

const displaycatagories = catagories =>{
    const catagorysection = document.getElementById('catagory-section');
    togglespinner(true);
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
        //console.log(catagory);
        const catagorydiv = document.createElement('div');
        catagorydiv.classList.add('row', 'shadow', 'p-3', 'mb-5', 'bg-body', 'rounded');
        catagorydiv.innerHTML = `
    <div class="col-md-4 h-100">
        <img src="${catagory.thumbnail_url}" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
    <div class="card-body">
        <h5 class="card-title">${catagory.title}</h5>
        <p class="card-text">
            ${catagory.details.slice(0,500)}....
        </p>
        <p class="card-text">
        <div class="d-flex justify-content-between">
        <div>
        <img style="width:30px"; class="rounded-circle" src="${catagory.author.img}" class="img-fluid rounded-start" alt="..." />
        <small class="text-muted pe-5"> ${catagory.author.name}</small>
        <small class="text-muted">Rating : ${catagory.total_view}</small>
        
    </p>
    </div>
    <div>
    <!-- Button trigger modal -->
    <a onclick="loadmodaldata('${catagory._id}')"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsmodal">Details</a>    
    </div>
        </div>
        </>
    </div>
        `
    detailscontainer.appendChild(catagorydiv);
    // console.log(catagory);
    })
    // Spinner Stop
    togglespinner(false);

}

const loadmodaldata = (news_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaymodaldata(data.data[0]))
}

const displaymodaldata = (data) =>{
     // Modal Part
    const modaltitle = document.getElementById('detailsmodalLabel');
    modaltitle.innerText =data.title;
    const modaldetails = document.getElementById('modal-details');
    modaldetails.innerHTML = `
        <p class="text-center fw-bold">Contact Me</p>
        <p>Name : ${data.author ? data.author.name : 'No Data Available'}</p>
        <p>Published Date : ${data.author.published_date}</p>
    `
    console.log(data.title)
}

const togglespinner = isloading =>{
    const loader = document.getElementById('loader');
    if(isloading){
        loader.classList.remove('d-none');
    }
    else{
        loader.classList.add('d-none');
    }
}

// const loadcatagorydetails = async() =>{
//     const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displaycatagorydetails(data.data[0]);
// }


loadcatagories();
//loadcatagorydetails();
