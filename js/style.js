function calculateBmi() {
   const name = document.getElementById("name");
   const weightVal = document.getElementById("weight");
   const heightVal = document.getElementById("height");
   const result = document.querySelector(".result"); 
   
   const weight = parseFloat(weightVal.value);
   const height = parseFloat(heightVal.value);
   
    let bmi =( weight / ( height * height )).toFixed(2);
    if (bmi <18) {
        console.log("You are underweight");
    } else if (bmi >=18 && bmi <25) {
        console.log("you are normal");
    } else if (bmi >= 25 && bmi <32) {
        console.log("You have litle bit more weight than height");
    } else {
        console.log("You are overweight");
    }
    
    result.textContent = `${name.value}'s BMI is ${bmi}`;
    
}



























// //DOM = document object model

// // const p = document.getElementById("p1");
// // p.innerHTML = "<span class='something'> Bakhriddin Nurullayev </span>"
// // console.log(p);


// // p.textContent = "this just a text";
// // p.className = "new-class";
// // console.log(p);

// const p = document.getElementById("p1");
// console.log(p);
// const button = document.querySelector("click");
// console.log(button);








 
        