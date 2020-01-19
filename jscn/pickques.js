function slctCatg(name)
{
    localStorage.setItem("catgcont",name);
    document.location.href="picknumb.html";
    abcd=localStorage.getItem("catgcont");
}

function slctCont(name)
{
    localStorage.setItem("contname",name);
    document.location.href="pickdiff.html";
    abcd=localStorage.getItem("contname");
}

function slctDiff(name)
{
    localStorage.setItem("diffname",name);
    document.location.href="quizpage.html";
    abcd=localStorage.getItem("diffname");
}