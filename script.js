import { Contoller } from "./controller.js";
import { API_URL } from "./variables.js";
import { getRequest } from "./api.js";


const controller = new Contoller;
let cars = [];
let allReceived = false;
let initPage = 1;

const getCars = async () =>{
    controller.showSpinner();
    const data = await getRequest(API_URL+`?_page=${initPage}&_limit=15`);
    if (data && data.length !=0) {
        controller.hideSpinner();
        cars = [...cars, ...data]
        controller.render(cars);
        console.log(data);
        initPage ++;
    }else{
        controller.showEnd()
        controller.hideSpinner();
        allReceived = true;
    }
    
}


window.addEventListener("scroll", ()=>{

    if (window.pageYOffset > document.body.scrollHeight-780) {
        if (!allReceived) {
            getCars()
        }
    }
    
})

document.addEventListener("DOMContentLoaded",getCars);
