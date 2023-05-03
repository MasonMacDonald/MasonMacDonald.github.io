let github = document.getElementById("github-pic")
let linkedin = document.getElementById("linkedin-pic")
let resume = document.getElementById("resume-pic")
let modeToggle = document.getElementById("mode-toggle")
let background1 = getComputedStyle(document.documentElement).getPropertyValue('--background-dark');

let primaryDark = getComputedStyle(document.documentElement).getPropertyValue('--primary-dark')
let secondaryDark = getComputedStyle(document.documentElement).getPropertyValue('--secondary-dark')
let primaryBackgroundDark = getComputedStyle(document.documentElement).getPropertyValue('--primary-background-dark')
let secondaryBackgroundDark = getComputedStyle(document.documentElement).getPropertyValue('--secondary-background-dark')

let primaryLight = getComputedStyle(document.documentElement).getPropertyValue('--primary-light')
let secondaryLight = getComputedStyle(document.documentElement).getPropertyValue('--secondary-light')
let primaryBackgroundLight = getComputedStyle(document.documentElement).getPropertyValue('--primary-background-light')
let secondaryBackgroundLight = getComputedStyle(document.documentElement).getPropertyValue('--secondary-background-light')

let isDarkMode = true

// function initialize(){
//     document.documentElement.style.setProperty('--primary-dark', primaryDark);
//     document.documentElement.style.setProperty('--secondary-dark', secondaryDark);
//     document.documentElement.style.setProperty('--primary-background-dark', primaryBackgroundDark);
//     document.documentElement.style.setProperty('--secondary-background-dark', secondaryBackgroundDark);
// }

modeToggle.addEventListener("click", () => {
    if(isDarkMode){
        document.documentElement.style.setProperty('--primary-dark', primaryLight);
        document.documentElement.style.setProperty('--secondary-dark', secondaryLight);
        document.documentElement.style.setProperty('--primary-background-dark', primaryBackgroundLight);
        document.documentElement.style.setProperty('--secondary-background-dark', secondaryBackgroundLight);
    }
    else{
        document.documentElement.style.setProperty('--primary-dark', primaryDark);
        document.documentElement.style.setProperty('--secondary-dark', secondaryDark);
        document.documentElement.style.setProperty('--primary-background-dark', primaryBackgroundDark);
        document.documentElement.style.setProperty('--secondary-background-dark', secondaryBackgroundDark);
    }
    isDarkMode = !isDarkMode
})

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/mason-macdonald/")
})

github.addEventListener("click", () => {
    window.open("https://github.com/MasonMacDonald")
})

resume.addEventListener("click", () => {
    downloadFile('resources/MasonMacDonald_Resume.pdf', 'MasonMacDonald_Resume.pdf');
})

function downloadFile(url, filename) {
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  