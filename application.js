let toggle = document.getElementsByClassName("bx bx-caret-down");
let li = document.getElementsByClassName("caret-parent");
let hideUl = document.getElementsByClassName("hideul");
let navBtn = document.getElementById("sidnav-btn");
let sideNav = document.getElementById("sideNav");
let btnContent = document.getElementById("btnContent");
let searchIcon =document.getElementById("searchIcon");
let search =document.getElementById ("search");
let overlay = document.getElementById("overlay");
let giantDiv = document.getElementById("giantDiv");
let icons = document.getElementsByClassName("sticky-icons");
let fixedDiv = document.getElementsByClassName("fixedDiv");
let span = document.getElementsByTagName("childNode");
let x = 0;

for(let i =0; i < toggle.length; i++){
    toggle[i].style.transform = "rotateZ(-90deg)";
}

    for(let i = 0; i < toggle.length; i++){
        toggle[i].addEventListener("click", (e)=>{
            let click = e.target;
            let li = click.parentNode;
            let hideUl = li.nextElementSibling;

            if(hideUl.style.display == "block"){
                hideUl.setAttribute("style", "display:none"); 
                click.style.transform = "rotateZ(-90deg)"
                li.setAttribute("style", "opacity: 0.5");
            }else{
                hideUl.setAttribute("style", "display:block");
                click.style.transform = "rotateZ(0deg)"
                li.setAttribute("style", "opacity: 1");
            }
        })
    }

    navBtn.addEventListener("click", ()=>{
        if(sideNav.style.visibility == "visible" || search.style.visibility == "visible"){
            search.style.visibility = "hidden";
            sideNav.style.visibility = "hidden";
            overlay.style.visibility = "hidden"
            giantDiv.style.margin = 0 + "px";
            navBtn.style.left = x + "px";
            document.style.overfl
        }else{
            let x = 220;
            sideNav.style.visibility = "visible";
            search.style.visibility = "hidden";
            overlay.style.visibility = "visible"
            // giantDiv.style.marginLeft = 230 + "px";
            navBtn.style.left = x + "px";
        }
    })


    searchIcon.addEventListener("click", ()=>{
        if(search.style.visibility == "visible"){
            search.style.visibility = "hidden";
            // overlay.style.visibility = "hidden";
        }else{
            search.style.visibility = "visible";
            // overlay.style.visibility = "visible";
        }
    })


    overlay.addEventListener("click", ()=>{
        sideNav.style.visibility = "hidden";
        overlay.style.visibility = "hidden";
        giantDiv.style.margin = 0 + "px";
        navBtn.style.left = x + "px";
        search.style.visibility = "hidden";

    })

    for(icon of icons){
        icon.addEventListener("click", (e)=>{
           clicked = e.target;
           fixedDiv = clicked.nextElementSibling;
           clicked = span.parentNode;
            if(fixedDiv.style.display == "block"){
                    fixedDiv.style.display = "none";
                }else{
                    fixedDiv.style.display = "block";
                    span.style.visibility = "hidden";
                }
    })

}


for(icon of icons){
    
    
}