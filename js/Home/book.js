const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    })
})

function updateFormSteps(){
    formSteps.forEach(step => {
        step.classList.contains("form-step-active") && step.classList.remove("form-step-active");
    })

    formSteps[formStepsNum].classList.add('form-step-active');
}


prevBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    })
})

function updateFormSteps(){
    formSteps.forEach(step => {
        step.classList.contains("form-step-active") && step.classList.remove("form-step-active");
    })
    
    formSteps[formStepsNum].classList.add('form-step-active');
    // if(formStepsNum == 2){
    //     document.querySelector('form').style.boxShadow = 0;
    // }
    if(formStepsNum == 2){
        document.querySelector('.form').classList.remove('showShadow');
    }
}

function updateProgressBar(){
    progressSteps.forEach((progressStep, idx) => {
        if(idx < formStepsNum + 1){
            progressStep.classList.add("progress-step-active");
        }else{
            progressStep.classList.remove("progress-step-active");
        }
    })

    const progressActive = document.querySelectorAll('.progress-step-active');
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}