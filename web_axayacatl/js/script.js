"use strict";

const modelUno = document.querySelector(".modelUno");
const modelDos = document.querySelector(".modelDos");
const modelTres = document.querySelector(".modelTres");
const modelCuatro = document.querySelector(".modelCuatro");
const modelCinco = document.querySelector(".modelCinco");
const bodyBack = document.querySelector("body");

modelUno.addEventListener('click',(e)=>{
    console.log(e);
    modelUno.style = "transition: 1s; box-shadow: 0 0 10px #6C1295; box-shadow: 0 0 40px #6C1295; box-shadow: 0 0 80px #6C1295; box-shadow: 0 0 130px #6C1295; filter: blur(0px); width: 280px; position: relative; left: 40px; border-radius: 5px; z-index: 1;";
    if (modelUno.addEventListener('dblclick',(e)=>{
        modelUno.style = "transition: 1s; position: relative; left: 10px; top: 140px; filter: blur(2px);";
    }));
});

modelDos.addEventListener('click',(e)=>{
    console.log(e);
    modelDos.style = "transition: 1s; position: absolute; width: 280px;border-radius: 5px; filter: blur(0px); left: 30px; z-index: 1;";
    if (modelDos.addEventListener('dblclick',(e)=>{
        modelDos.style = "transition: 1s; position: absolute; top: 370px; left: 180px; width: 170px;";
    }));
});

modelTres.addEventListener('click',(e)=>{
    modelTres.style = "transition: 1s; width: 280px; position: relative; left: 30px; filter: blur(0px); z-index: 1;";
    if (modelTres.addEventListener('dblclick',(e)=>{
        modelTres.style = "transition: 1s; position: relative; top: 400px;width: 170px;"; 
    }));
});

modelCuatro.addEventListener('click',(e)=>{
    console.log(e);
    modelCuatro.style = "transition: 1s; width: 280px; filter: blur(0px); left: 30px; z-index: 1;";
    if (modelCuatro.addEventListener('dblclick',(e)=>{
        modelCuatro.style = "transition: 1s; width: 170px;";
    }));
});

modelCinco.addEventListener('click',(e)=>{
    console.log(e);
    modelCinco.style = "transition: 1s; width: 280px; filter: blur(0px); left: 30px; z-index: 1;";
    if (modelCinco.addEventListener('dblclick',(e)=>{
        modelCinco.style = "transition: 1s; width: 170px;";
    }));
});

!Notification.requestPermission();