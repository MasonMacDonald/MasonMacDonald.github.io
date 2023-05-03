let github = document.getElementById("github-pic")
let linkedin = document.getElementById("linkedin-pic")
let resume = document.getElementById("resume-pic")

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
  