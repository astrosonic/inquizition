var artx = [0,0,0,0,0,0,0,0,0,"General Knowledge","Books","Film","Music","Musical & Theatre",
            "Television","Video Games","Board Games","Science & Nature","Computers","Mathematics",
            "Mythology","Sports","Geography","History","Politics","Art","Celebrities","Animals",
            "Vehicles","Comics","Gadgets","Entertainment: Anime & Manga","Cartoon & Animations"];

var bnus = [0,0,0,0,0,0,0,0,0,
            0.3,0.3,0.3,0.3,0.3,0.3,
            0.4,0.4,0.4,0.4,0.4,0.4,
            0.5,0.5,0.5,0.5,0.5,0.5,
            0.6,0.6,0.6,0.6,0.6,0.6];

var catg = [], type = [], diff = [], ques = [], corr = [], baed = [];
var numb = 0, optc = 0, ctus;

localStorage.setItem("catgname",artx[parseInt(localStorage.getItem("catgcont"))]);
localStorage.setItem("catgbnus",bnus[parseInt(localStorage.getItem("catgcont"))]);
var cont  = parseInt(localStorage.getItem("contname"));
var dnam = localStorage.getItem("diffname");
var cnam = localStorage.getItem("catgcont");
var jsur = "https://opentdb.com/api.php?amount="+cont+"&category="+cnam+"&difficulty="+dnam+"&type=multiple";
localStorage.setItem("cnam",artx[parseInt(localStorage.getItem("catgcont"))]);

$(document).ready(function(){
    document.getElementById("catgname").innerHTML=artx[parseInt(localStorage.getItem("catgcont"))];
    document.getElementById("catgbnus").innerHTML="+"+bnus[parseInt(localStorage.getItem("catgcont"))]+"0x";
    document.getElementById("diffname").innerHTML=localStorage.getItem("diffname");
    if (localStorage.getItem("diffname")=="easy") {
        document.getElementById("diffbnus").innerHTML = "+0.30x";
        ctus="0.30";
    }
    else if (localStorage.getItem("diffname")=="medium") {
        document.getElementById("diffbnus").innerHTML = "+0.50x";
        ctus="0.50";
    }
    else if (localStorage.getItem("diffname")=="hard") {
        document.getElementById("diffbnus").innerHTML = "+0.70x";
        ctus="0.70";
    }
    document.getElementById("contname").innerHTML=cont;
    document.getElementById("contbnus").innerHTML="+0."+cont+"x";
    document.getElementById("conttime").innerHTML=cont+" min";
    localStorage.setItem("diffbnus", ctus);
    ctus=cont/100;
    localStorage.setItem("contbnus", ctus.toFixed(2));
    ctus=bnus[parseInt(localStorage.getItem("catgcont"))]+"0";
    localStorage.setItem("catgbnus", ctus);

    $.getJSON(jsur, function(result){
        $.each(result, function(i, field){
            if (i=="results")
            {
                for (i=0; i<cont; i++)
                {
                    catg.push(field[i].category);
                    type.push(field[i].type);
                    diff.push(field[i].difficulty);
                    ques.push(field[i].question);
                    corr.push(field[i].correct_answer);
                    var list = [], j=0;
                    for (j=0; j<3; j++)
                    {
                        list.push(field[i].incorrect_answers[j]);
                    }
                    baed.push(list);
                }
                for (numb=1; numb<=cont; numb++)
                {
                    randno = Math.floor((Math.random() * 4) + 1);
                    var lite = document.createElement("li");
                    var anch = document.createElement("a");
                    anch.id = "anch" + nogenten(numb, cont);
                    anch.className = "uk-accordion-title";
                    anch.href = "#";
                    anch.style = "font-family: AkzidenzGroteskMedium; color: #32d296; background-color: #333333;";
                    var ante = document.createTextNode("#" + nogenten(numb, cont) + " ");
                    var dipl = document.createElement("span");
                    var ditx = document.createTextNode(diff[numb - 1]);
                    dipl.className = "uk-badge uk-float-right uk-text-uppercase";
                    dipl.style = "margin-top: 3px; background: #ec2147; color: #000000;";
                    dipl.id = "dipl" + nogenten(numb, cont);
                    dipl.appendChild(ditx);
                    var spce = document.createTextNode(" ");
                    spce.className = "uk-float";
                    var capl = document.createElement("span");
                    capl.className = "uk-badge uk-float-right uk-text-uppercase";
                    capl.style = "margin-top: 3px; margin-right: 5px; background: #32d296; color: #000000;";
                    capl.id = "capl" + nogenten(numb, cont);
                    var catx = document.createTextNode(catg[numb - 1]);
                    capl.appendChild(catx);
                    anch.appendChild(ante);
                    anch.appendChild(dipl);
                    anch.appendChild(spce);
                    anch.appendChild(capl);
                    var divi = document.createElement("div");
                    divi.className = "uk-accordion-content";
                    divi.id = "divi" + nogenten(numb, cont);
                    var para = document.createElement("p");
                    para.id = "ques" + nogenten(numb, cont);
                    para.style = "font-family: AkzidenzGroteskRegular; color: #ffffff;";
                    para.innerHTML = ques[numb - 1];
                    var mcqf = document.createElement("form");
                    var name = "mcqf" + nogenten(numb, cont);
                    var lbl1 = document.createElement("label");
                    var bre1 = document.createElement("br");
                    var rdb1 = document.createElement("input");
                    rdb1.className = "uk-radio";
                    rdb1.type = "radio";
                    rdb1.name = name;
                    rdb1.id = "optn01" + nogenten(numb, cont);
                    lbl1.appendChild(rdb1);
                    lbl1.style = "font-family: AkzidenzGroteskRegular; color: #f0f0f0;";
                    var lbl2 = document.createElement("label");
                    var bre2 = document.createElement("br");
                    var rdb2 = document.createElement("input");
                    rdb2.className = "uk-radio";
                    rdb2.type = "radio";
                    rdb2.name = name;
                    rdb2.id = "optn02" + nogenten(numb, cont);
                    lbl2.appendChild(rdb2);
                    lbl2.style = "font-family: AkzidenzGroteskRegular; color: #f0f0f0;";
                    var lbl3 = document.createElement("label");
                    var bre3 = document.createElement("br");
                    var rdb3 = document.createElement("input");
                    rdb3.className = "uk-radio";
                    rdb3.type = "radio";
                    rdb3.name = name;
                    rdb3.id = "optn03" + nogenten(numb, cont);
                    lbl3.appendChild(rdb3);
                    lbl3.style = "font-family: AkzidenzGroteskRegular; color: #f0f0f0;";
                    var lbl4 = document.createElement("label");
                    var bre4 = document.createElement("br");
                    var rdb4 = document.createElement("input");
                    rdb4.className = "uk-radio";
                    rdb4.type = "radio";
                    rdb4.name = name;
                    rdb4.id = "optn04" + nogenten(numb, cont);
                    lbl4.appendChild(rdb4);
                    lbl4.style = "font-family: AkzidenzGroteskRegular; color: #f0f0f0;";
                    var ltx1, ltx2, ltx3, ltx4;
                    if (randno == 1) {
                        ltx1 = document.createTextNode(" "+corr[numb-1].toString());
                        ltx2 = document.createTextNode(" "+baed[numb-1][0].toString());
                        ltx3 = document.createTextNode(" "+baed[numb-1][1].toString());
                        ltx4 = document.createTextNode(" "+baed[numb-1][2].toString());
                        rdb1.value = corr[numb-1];
                        rdb2.value = baed[numb-1][0];
                        rdb3.value = baed[numb-1][1];
                        rdb4.value = baed[numb-1][2];
                    } else if (randno == 2) {
                        ltx1 = document.createTextNode(" "+baed[numb-1][0].toString());
                        ltx2 = document.createTextNode(" "+corr[numb-1].toString());
                        ltx3 = document.createTextNode(" "+baed[numb-1][1].toString());
                        ltx4 = document.createTextNode(" "+baed[numb-1][2].toString());
                        rdb1.value = baed[numb-1][0];
                        rdb2.value = corr[numb-1];
                        rdb3.value = baed[numb-1][1];
                        rdb4.value = baed[numb-1][2];
                    } else if (randno == 3) {
                        ltx1 = document.createTextNode(" "+baed[numb-1][0].toString());
                        ltx2 = document.createTextNode(" "+baed[numb-1][1].toString());
                        ltx3 = document.createTextNode(" "+corr[numb-1].toString());
                        ltx4 = document.createTextNode(" "+baed[numb-1][2].toString());
                        rdb1.value = baed[numb-1][0];
                        rdb2.value = baed[numb-1][1];
                        rdb3.value = corr[numb-1];
                        rdb4.value = baed[numb-1][2];
                    } else if (randno == 4) {
                        ltx1 = document.createTextNode(" "+baed[numb-1][0].toString());
                        ltx2 = document.createTextNode(" "+baed[numb-1][1].toString());
                        ltx3 = document.createTextNode(" "+baed[numb-1][2].toString());
                        ltx4 = document.createTextNode(" "+corr[numb-1].toString());
                        rdb1.value = baed[numb-1][0];
                        rdb2.value = baed[numb-1][1];
                        rdb3.value = baed[numb-1][2];
                        rdb4.value = corr[numb-1];
                    }
                    lbl1.appendChild(ltx1);
                    lbl2.appendChild(ltx2);
                    lbl3.appendChild(ltx3);
                    lbl4.appendChild(ltx4);
                    mcqf.appendChild(lbl1);
                    mcqf.appendChild(bre1);
                    mcqf.appendChild(lbl2);
                    mcqf.appendChild(bre2);
                    mcqf.appendChild(lbl3);
                    mcqf.appendChild(bre3);
                    mcqf.appendChild(lbl4);
                    mcqf.appendChild(bre4);
                    divi.appendChild(para);
                    divi.appendChild(mcqf);
                    lite.appendChild(anch);
                    lite.appendChild(divi);
                    document.getElementById("queslist").appendChild(lite);
                }
            }
        });
    });
});

function nogenten(numb,cont)
{
    var mdno = "0";
    if (cont>=10)
    {
        if (numb < 10)
        {
            mdno = "0" + numb;
        }
        else
        {
            mdno = numb;
        }
    }
    else if (cont<10)
    {
        mdno = numb;
    }
    return mdno;
}

function GetMarks()
{
    if (document.getElementById("sbmt").innerHTML=="Submit now")
    {
        var scor = 0, rdpr = [], crls = [], anls = [], mrls = [], wrng = 0, left = 0;
        for (numb = 1; numb <= cont; numb++) {
            var i = 0;
            var answer = document.forms[numb - 1];
            for (i = 0; i < answer.length; i++) {
                if (answer[i].checked)
                {
                    rdpr[numb] = 1;
                    if (answer[i].value == corr[numb - 1])
                    {
                        scor += 1;
                        crls[numb-1] = 1;
                    }
                    else
                    {
                        crls[numb-1] = 0;
                    }
                }
                document.getElementById("optn0" + (i + 1) + nogenten(numb, cont)).disabled = true;
            }
            for (i = 0; i < answer.length; i++)
            {
                if (answer[i].value == corr[numb - 1])
                {
                    anls[numb - 1] = i;
                }
            }
            for (i = 0; i < answer.length; i++)
            {
                if (answer[i].checked)
                {
                    mrls[numb-1] = i;
                }
            }
        }
        console.log("Mark list ", mrls);
        console.log("Corr list ", anls);
        for (numb = 1; numb <= cont; numb++) {
            var attx, atpl = document.createElement("span");
            atpl.className = "uk-badge uk-float-right uk-text-uppercase";
            atpl.id = "dipl" + nogenten(numb, cont);
            if (rdpr[numb] == 1) {
                attx = document.createTextNode("submitted");
                atpl.style = "margin-top: 3px; margin-right: 5px; background: #32cd32; color: #000000;";
            } else {
                attx = document.createTextNode("not attempted");
                atpl.style = "margin-top: 3px; margin-right: 5px; background: #ff0000; color: #000000;";
            }
            atpl.appendChild(attx);
            document.getElementById("anch" + nogenten(numb, cont)).appendChild(atpl);
        }
        for (numb = 1; numb <= cont; numb++)
        {
            if (rdpr[numb]==1)
            {
                if (mrls[numb-1]!=crls[numb-1])
                {
                    wrng+=1;
                }
            }
        }
        for (numb = 1; numb <=cont; numb++)
        {
            if (rdpr[numb]!=1)
            {
                left+=1;
            }
        }
        console.log("Radio button pressed ",rdpr);
        console.log("Correctly answered questions " + scor);
        console.log("Incorrectly answered questions " + wrng);
        console.log("Unattempted questions "+ left);
        localStorage.setItem("contrite",scor);
        localStorage.setItem("contwrng",wrng);
        localStorage.setItem("contleft",left);
        localStorage.setItem("totaMark",scor);
        document.getElementById("time").innerHTML = "Quiz submitted!";
        document.getElementById("sbmt").innerHTML = "View results";
    }
    else if (document.getElementById("sbmt").innerHTML=="View results")
    {
        //UIkit.modal.dialog('<div class="uk-modal-body" style="font-family: AkzidenzGroteskMedium; background-color: #222222; color: #32d296">UIkit dialog!</div>');
        document.location.href="rsltpage.html";
    }
}