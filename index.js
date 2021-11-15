function dropdownDomain(input){
    console.log(input);
    document.getElementById("domain-placeholder").innerHTML = input;
}

function dropdownProject(input){
    console.log(input);
    document.getElementById("project-placeholder").innerHTML = input;
}

function dropdownTarget(input){
    console.log(input);
    document.getElementById("target-placeholder").innerHTML = input;
}

function dropdownAction(input){
    console.log(input);
    document.querySelector(".action").setAttribute("value",input);
}

document.querySelector(".domain-menu").addEventListener("click",function(event){
    dropdownDomain(event.target.innerHTML);
});

document.querySelector(".project-menu").addEventListener("click",function(event){
    dropdownProject(event.target.innerHTML);
});

document.querySelector(".target-menu").addEventListener("click",function(event){
    dropdownTarget(event.target.innerHTML);
});


/* progress bar */

window.onload
= function() {
  Particles.init
({
    selector: '.background'
  });
};


// var particles = Particles.init({
//     selector: '.background',
//     color: ['#EF7E1A', '#DFD8CA'],
//     connectParticles: true,
//     responsive: [{
//       breakpoint: 800,
//       options: {
//         color: '#00C9B1',
//         maxParticles: 80,
//         connectParticles: false
//       }
//     }]
//   });

var particles = Particles.init({
	selector: '.background',
//   color: ['#DA0463', '#404B69', '#DBEDF3'],
  color: ['#ee9e58', '#DFD8CA', '#DFD8CA'],
  connectParticles: true
});