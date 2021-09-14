export default class Anime{
    constructor(){

    }
    async obtenerFotos(){
        const datos = await fetch ("https://api.jikan.moe/v3/search/anime?q=dragon%20ball%20z")
        const fotos = await datos.json()
        const lista = fotos.results;
        let array_lista = [];
        lista.forEach(element => {
            let item =`
                <div class="col-4 mb-3">
                    <div class="card">
                        <img src="${element.image_url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <a href="#" class="btn btn-primary">ver</a>
                        </div>
                    </div>
                </div>
            `
            array_lista.push(item)
        });
        document.getElementById("lista_fotos").innerHTML = array_lista.join('')
    }
}