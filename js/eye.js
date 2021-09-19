// //EYE
// let cornea = document.querySelector('.cornea');
// let lens = document.querySelector('.lens');
// let retina = document.querySelector('.retina');
// let background = document.querySelector('.background');
// let light = document.querySelectorAll('.light');

// //CIRCLES
// let corneaCircle = document.querySelector('.corneaSVG');
// let lensCircle = document.querySelector('.lensSVG');
// let retinaCircle = document.querySelector('.retinaSVG');

// //SLIDERS
// let corneaSlider = document.querySelector('.corneaSlider');
// let lensSlider = document.querySelector('.lensSlider');
// let retinaSlider = document.querySelector('.retinaSlider');

// //TEXT 
// let corneaText = document.querySelector('.corneaText');
// let lensText = document.querySelector('.lensText');
// let retinaText = document.querySelector('.retinaText');

// //PARTS
// let corneaParts = [corneaCircle, corneaSlider, corneaText];
// let lensParts = [lensCircle, lensSlider, lensText];
// let retinaParts = [retinaCircle, retinaSlider, retinaText];

// //CORNEA EVENT
// cornea.addEventListener('click', e => {

//     corneaSlider.value = [0];
//     corneaParts.forEach(part => part.classList.add('visible'));
//     lensParts.forEach(part => part.classList.remove('visible'));
//     retinaParts.forEach(part => part.classList.remove('visible'));

//     cornea.classList.toggle('brightness');
//     light.forEach(lite => lite.classList.toggle('lightness'));

//     lens.classList.toggle('opacity');
//     lens.classList.add('slow');
//     retina.classList.toggle('opacity');
//     retina.classList.add('slow');
//     background.classList.toggle('opacity');
//     background.classList.add('slow');
    
//     let tl = gsap.timeline({paused:true});

//     tl.from('.lightFront', 8, {attr: {opacity: '50%'}},0);
//     tl.from('.lightBack', 8, {attr: {opacity: '50%'}},0);

//     tl.from('.lightFront', 8, {attr: {points:'0,338 0,223 481,280'}},0);
//     tl.to('.lightFront', 8, {attr: {points:'0,398 0,163 481,280'}},0);

//     tl.from('.lightBack', 8, {attr: {points:'663,305 663,255 481,280'}},0);
//     tl.to('.lightBack', 8, {attr: {points:'663,365 663,195 481,280'}},0);

//     tl.from('.pupilCircle', 8, {attr: {r:'14'}},0);
//     tl.to('.pupilCircle', 8, {attr: {r:'28'}},0);

//     function update() {
//         tl.progress(corneaSlider.value);
//         tl.invalidate();
//     }

//     corneaSlider.addEventListener('input', update);
// })

// //LENS EVENT
// lens.addEventListener('click', e => {

//     lensSlider.value = [0];
//     lensParts.forEach(part => part.classList.add('visible'));
//     retinaParts.forEach(part => part.classList.remove('visible'));
//     corneaParts.forEach(part => part.classList.remove('visible'));

//     lens.classList.toggle('brightness');
//     light.forEach(lite => lite.classList.toggle('lightness'));

//     cornea.classList.toggle('opacity');
//     cornea.classList.add('slow');
//     retina.classList.toggle('opacity');
//     retina.classList.add('slow');
//     background.classList.toggle('opacity');
//     background.classList.add('slow');

//     let tl = gsap.timeline({paused:true});

//     tl.from('.lightFront', 1, {attr: {opacity: '50%'}},0);
//     tl.from('.lightBack', 1, {attr: {opacity: '50%'}},0);

//     tl.from('.lightFront', 8, {attr: {points:'0,368 0,193 421,280'}},0);
//     tl.to('.lightFront', 8, {attr: {points:'0,368 0,193 531,280'}},0);

//     tl.from('.lightBack', 8, {attr: {points:'663,335 663,225 421,280'}},0);
//     tl.to('.lightBack', 8, {attr: {points:'663,335 663,225 531,280'}},0);

    
//     tl.from('.lensCircle', 10, {attr: {filter: 'blur(0)'}},0);
//     tl.to('.lensCircle', 10, {attr: {filter: 'blur(1em)'}},0);

//     function update() {
//         tl.progress(lensSlider.value);
//         tl.invalidate();
//     }

//     lensSlider.addEventListener('input', update);

// })

// //RETINA EVENT
// retina.addEventListener('click', e => {

//     retinaSlider.value = [0];
//     retinaParts.forEach(part => part.classList.add('visible'));
//     corneaParts.forEach(part => part.classList.remove('visible'));
//     lensParts.forEach(part => part.classList.remove('visible'));

//     retina.classList.toggle('brightness');
//     light.forEach(lite => lite.classList.toggle('lightness'));

//     lens.classList.toggle('opacity');
//     lens.classList.add('slow');
//     cornea.classList.toggle('opacity');
//     cornea.classList.add('slow');
//     background.classList.toggle('opacity');
//     background.classList.add('slow');

//     let tl = gsap.timeline({paused:true});

//     tl.from('.lightFront', 8, {attr: {opacity: '20%'}},0);
//     tl.to('.lightFront', 8, {attr: {opacity: '100%'}},0);
//     tl.from('.lightBack', 8, {attr: {opacity: '20%'}},0);
//     tl.to('.lightBack', 8, {attr: {opacity: '100%'}},0);

//     tl.from('.retinaCircleL', 8, {attr: {opacity: '100%'}},0);
//     tl.to('.retinaCircleL', 8, {attr: {opacity: '0%'}},0);
//     tl.from('.retinaCircleR', 8, {attr: {opacity: '0%'}},0);
//     tl.to('.retinaCircleR', 8, {attr: {opacity: '100%'}},0);

//     function update() {
//         tl.progress(retinaSlider.value);
//     }

//     retinaSlider.addEventListener('input', update);
// })


//EYE
let cornea = document.querySelector('.cornea');
let lens = document.querySelector('.lens');
let retina = document.querySelector('.retina');
let background = document.querySelector('.background');
let light = document.querySelectorAll('.light');

//CIRCLES
let corneaCircle = document.querySelector('.corneaSVG');
let lensCircle = document.querySelector('.lensSVG');
let retinaCircle = document.querySelector('.retinaSVG');

//SLIDERS
let corneaSlider = document.querySelector('.corneaSlider');
let lensSlider = document.querySelector('.lensSlider');
let retinaSlider = document.querySelector('.retinaSlider');

//TEXT 
let corneaText = document.querySelector('.corneaText');
let lensText = document.querySelector('.lensText');
let retinaText = document.querySelector('.retinaText');

//PARTS
let corneaParts = [corneaCircle, corneaSlider, corneaText];
let lensParts = [lensCircle, lensSlider, lensText];
let retinaParts = [retinaCircle, retinaSlider, retinaText];

//CORNEA EVENT
cornea.addEventListener('click', e => {

    corneaSlider.value = [0];
    corneaParts.forEach(part => part.classList.add('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));

    cornea.classList.add('brightness');
    light.forEach(lite => lite.classList.add('lightness'));

    lens.classList.toggle('opacity');
    lens.classList.add('slow');
    retina.classList.toggle('opacity');
    retina.classList.add('slow');
    background.classList.toggle('opacity');
    background.classList.add('slow');
    
    let tl = gsap.timeline({paused:true});

    tl.from('.lightFront', 8, {attr: {opacity: '50%'}},0);
    tl.from('.lightBack', 8, {attr: {opacity: '50%'}},0);

    tl.from('.lightFront', 8, {attr: {points:'0,338 0,223 481,280'}},0);
    tl.to('.lightFront', 8, {attr: {points:'0,398 0,163 481,280'}},0);

    tl.from('.lightBack', 8, {attr: {points:'663,305 663,255 481,280'}},0);
    tl.to('.lightBack', 8, {attr: {points:'663,365 663,195 481,280'}},0);

    tl.from('.pupilCircle', 8, {attr: {r:'14'}},0);
    tl.to('.pupilCircle', 8, {attr: {r:'28'}},0);

    function update() {
        tl.progress(corneaSlider.value);
        tl.invalidate();
    }

    corneaSlider.addEventListener('input', update);
})

//LENS EVENT
lens.addEventListener('click', e => {

    lensSlider.value = [0];
    lensParts.forEach(part => part.classList.add('visible'));
    retinaParts.forEach(part => part.classList.remove('visible'));
    corneaParts.forEach(part => part.classList.remove('visible'));

    lens.classList.toggle('brightness');
    light.forEach(lite => lite.classList.toggle('lightness'));

    cornea.classList.toggle('opacity');
    cornea.classList.add('slow');
    retina.classList.toggle('opacity');
    retina.classList.add('slow');
    background.classList.toggle('opacity');
    background.classList.add('slow');

    let tl = gsap.timeline({paused:true});

    tl.from('.lightFront', 1, {attr: {opacity: '50%'}},0);
    tl.from('.lightBack', 1, {attr: {opacity: '50%'}},0);

    tl.from('.lightFront', 8, {attr: {points:'0,368 0,193 421,280'}},0);
    tl.to('.lightFront', 8, {attr: {points:'0,368 0,193 531,280'}},0);

    tl.from('.lightBack', 8, {attr: {points:'663,335 663,225 421,280'}},0);
    tl.to('.lightBack', 8, {attr: {points:'663,335 663,225 531,280'}},0);

    
    tl.from('.lensCircle', 10, {attr: {filter: 'blur(0)'}},0);
    tl.to('.lensCircle', 10, {attr: {filter: 'blur(1em)'}},0);

    function update() {
        tl.progress(lensSlider.value);
        tl.invalidate();
    }

    lensSlider.addEventListener('input', update);

})

//RETINA EVENT
retina.addEventListener('click', e => {

    retinaSlider.value = [0];
    retinaParts.forEach(part => part.classList.add('visible'));
    corneaParts.forEach(part => part.classList.remove('visible'));
    lensParts.forEach(part => part.classList.remove('visible'));

    retina.classList.toggle('brightness');
    light.forEach(lite => lite.classList.toggle('lightness'));

    lens.classList.toggle('opacity');
    lens.classList.add('slow');
    cornea.classList.toggle('opacity');
    cornea.classList.add('slow');
    background.classList.toggle('opacity');
    background.classList.add('slow');

    let tl = gsap.timeline({paused:true});

    tl.from('.lightFront', 8, {attr: {opacity: '20%'}},0);
    tl.to('.lightFront', 8, {attr: {opacity: '100%'}},0);
    tl.from('.lightBack', 8, {attr: {opacity: '20%'}},0);
    tl.to('.lightBack', 8, {attr: {opacity: '100%'}},0);

    tl.from('.retinaCircleL', 8, {attr: {opacity: '100%'}},0);
    tl.to('.retinaCircleL', 8, {attr: {opacity: '0%'}},0);
    tl.from('.retinaCircleR', 8, {attr: {opacity: '0%'}},0);
    tl.to('.retinaCircleR', 8, {attr: {opacity: '100%'}},0);

    function update() {
        tl.progress(retinaSlider.value);
    }

    retinaSlider.addEventListener('input', update);
})

