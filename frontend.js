var navOpnBtn = document.getElementById("navOpenLesWidth");
var navClsBtn = document.getElementById("navCloseLesWidth");
navOpnBtn.addEventListener("click", opnNav);
navClsBtn.addEventListener("click", clsNav);

document.getElementById("showBlog1").style.display = "none";
document.getElementById("showBlog2").style.display = "none";
document.getElementById("mnth").style.display = "none";

function opnNav() {
    document.getElementById("links").style.display = "block";
    navOpnBtn.style.display = "none";
    navClsBtn.style.display = "block";
}
function clsNav() {
    document.getElementById("links").style.display = "none";
    navClsBtn.style.display = "none";
    navOpnBtn.style.display = "block";
}


// Initialising links

document.getElementById("showSecHome").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "block";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});
document.getElementById("showSecAbtUs").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "block";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});
document.getElementById("showSecPub").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "block";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});
document.getElementById("showSecChannel").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "block";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});
document.getElementById("showSecBlogs").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "block";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});
document.getElementById("showSecProjects").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "block";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});
document.getElementById("showSecFAQs").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "block";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";
});

document.getElementById("showSecThought").addEventListener("click", function () {
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "block";
});


function showblog1() {
    // console.log("Check Wheter onclick is working");
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "block";
    document.getElementById("showBlog2").style.display = "none";
    document.getElementById("mnth").style.display = "none";

}

function showblog2() {
    // console.log("Check Wheter onclick is working");
    document.getElementById("secHome").style.display = "none";
    document.getElementById("secAbtUs").style.display = "none";
    document.getElementById("secPublcns").style.display = "none";
    document.getElementById("secChannel").style.display = "none";
    document.getElementById("secBlogs").style.display = "none";
    document.getElementById("secProjects").style.display = "none";
    document.getElementById("secFAQ").style.display = "none";
    document.getElementById("showBlog1").style.display = "none";
    document.getElementById("showBlog2").style.display = "block";
    document.getElementById("mnth").style.display = "none";
}
