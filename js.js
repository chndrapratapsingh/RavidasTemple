// let landing_page = document.getElementById("landing_page");
// let photoarr = ['/13d.png','/1.jpg','/quint-hindi_2020-02_f74019b9-0e74-4e54-a64a-4c9410e27630_ravidas_jayanti_2020_.jfif']
// let i = 0;

// setInterval(() => {
//     landing_page.style = `background-image: url(${photoarr[i]});`
//     if(i==2) i = 0;
//     else i++;
// }, 1000*5);

// // https://www.google.com/maps/@25.079455,78.8721551,3a,90y,171.21h,59.47t/data=!3m7!1e1!3m5!1sAF1QipNf-WyaSSStDa7UwQ2Yk_1A3vw-_32-FFoYylz0!2e10!3e12!7i6656!

let imgarr = document.getElementsByClassName("landing_image");
let a=100,b=0,c=0;

imgarr[0].style = `width:${a}%`;

setInterval(() => {
    imgarr[1].style = `width:${a}%;`;
    imgarr[2].style = `width:${b}%;`;
    imgarr[0].style = `width:${c}%;`;
    if(a==100)
    {
        b=a;
        a=c;
    }
    else if(b==100)
    {
        c=b;
        b=a;
    }
    else{
        a=c;
        c=b;
    }
}, 1000*5);

//lanugage

function hindi()
{
    window.location = "index.html";
}

function english()
{
    window.location = "indexenglish.html";
}
function hindia()
{
    window.location = "about.html";
}

function englisha()
{
    window.location = "aboutenglish.html";
}