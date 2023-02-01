var last = document.querySelectorAll(".lest>span");
function lastClick (e) {
    for (let x = 0; x < last.length; x++) {
        if (last[x].getAttribute("class") == "active") {
            last[x].removeAttribute("class")
        }
    }
    e.setAttribute("class","active")
        if(e.hasAttribute("Breakfastb") == true) {
        let OurMenu = document.querySelectorAll(".OurMenu>div");
        for (let i = 0; i < OurMenu.length; i++) {
            if(OurMenu[i].getAttribute("id") == ("yas")  ){
                OurMenu[i].removeAttribute("id")
            } 
            }
            let Breakfast = document.querySelector(".OurMenu>.Breakfast");
            Breakfast.setAttribute("id","yas")
        }
        else if (e.hasAttribute("Lunch") == true) {
            let OurMenu = document.querySelectorAll(".OurMenu>div");
            for (let i = 0; i < OurMenu.length; i++) {
                if(OurMenu[i].getAttribute("id") == ("yas")  ){
                    OurMenu[i].removeAttribute("id")
                } 
                }
                let Lunch = document.querySelector(".OurMenu>.Lunch");
                Lunch.setAttribute("id","yas")
            }
        else if (e.hasAttribute("Dinner") == true) {
            let OurMenu = document.querySelectorAll(".OurMenu>div");
            for (let i = 0; i < OurMenu.length; i++) {
                if(OurMenu[i].getAttribute("id") == ("yas")  ){
                    OurMenu[i].removeAttribute("id")
                } 
                }
                let Dinner = document.querySelector(".OurMenu>.Dinner");
                Dinner.setAttribute("id","yas")
            }
        else if (e.hasAttribute("Desserts") == true) {
            let OurMenu = document.querySelectorAll(".OurMenu>div");
            for (let i = 0; i < OurMenu.length; i++) {
                if(OurMenu[i].getAttribute("id") == ("yas")  ){
                    OurMenu[i].removeAttribute("id")
                } 
                }
                let Desserts = document.querySelector(".OurMenu>.Desserts");
                Desserts.setAttribute("id","yas")
            }
    }
function Contact(e) {
    console.log(e)
    e.classList.toggle("ok")
    let sContact = document.querySelector(".Contact")
    sContact.classList.toggle("show")
}
function menu(i) {
    console.log(i)
    i.classList.toggle("clik")
    let snav = document.querySelector(".nav")
    snav.classList.toggle("navShow")
}


