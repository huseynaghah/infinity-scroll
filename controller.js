
export class Contoller{
    #spinnerElement = document.querySelector(".loader-wrapper");
    #wrapperElement = document.querySelector(".cars");
    #endElement = document.querySelector(".end");

    showSpinner(){
        this.#spinnerElement.style.display = "flex"
    }

    hideSpinner(){
        this.#spinnerElement.style.display = "none"
    }

    showEnd(){
        this.#endElement.style.display = "block"; 
    }

    createSnippet(producer, model, year, vinCode){
        return `
        <div class="car text-center">
            <div class="row">
                        <div class="col-lg-3 col-sm-12 pb-1"><div class="car-name p-1 m-1">${producer}</div></div>
                        <div class="col-lg-3 col-sm-12 pb-1"><p class="p-1 m-1">${model}</p></div>
                        <div class="col-lg-3 col-sm-12 pb-1"><p class="p-1 m-1">${year}</p></div>
                        <div class="col-lg-3 col-sm-12 pb-1"><p class="vin p-2 m-1">${vinCode}</p></div>
                    </div>
        </div>
        `
    }

    render(data){
        this.#wrapperElement.innerHTML = data.map(car => this.createSnippet(car.producer, car.model, car.productionYear, car.vinCode)).join("");
    }
}