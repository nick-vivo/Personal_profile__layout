function changeImage(idi, change) 
{

    var image = document.getElementById(idi);
    
    image.src = change;
}

function restoreImage(idi, restore) 
{
    var image = document.getElementById(idi);
  
    image.src = restore;
}

flag = true

function change_theme() {
    
    var theme = document.getElementById("theme-logo");
    
    if(flag)
    {
        var cat = document.getElementById("cat");
        var telegram = document.getElementById("telegram");
        var vk = document.getElementById("vk");
        var about = document.getElementById("logo");
        var resume = document.getElementById("resume");
        var topic = document.getElementById("topic");
        
        cat.src = "images/cat_black.png";
        telegram.src = "images/telegram_black.png";
        vk.src = "images/vk_black.png";
        about.src = "images/about_logo_black.png";
        resume.src = "images/resume_black.png";
        topic.src = "images/free-topic_black.png";
        theme.src = "images/check_theme_black.png";
        
        var body = document.getElementById("body");
        var avatar = document.getElementById("avatar");
        var name = document.getElementById("name");
        var info = document.getElementById("info");
        var about = document.getElementById("about_two");
        var about_easy = document.getElementById("about_easy");
        var plus = document.getElementById("plus");
        var texta = document.getElementById("texta");

        var headerka = document.getElementById("header");
        
        var one = document.getElementById("one");

        body.style.backgroundColor = "rgb(251,251,251)";
        avatar.style.backgroundColor = "rgb(251,251,251)";
        name.style.backgroundColor = "rgb(255,255,255)";
        info.style.color = "rgb(117,124,133)";
        about.style.backgroundColor = "rgb(248,248,248)";
        about_easy.style.color = "rgb(114,114,114)";
        plus.style.color = "rgb(114,114,114)";
        texta.style.color = "rgb(114,114,114)";
        texta.style.backgroundColor= "rgb(251,251,251)";

        headerka.style.backgroundColor = "rgb(147,147,147)";
    
        one.style.color = "black";

        flag = false;

    }
    else
    {
            var cat = document.getElementById("cat");
            var telegram = document.getElementById("telegram");
            var vk = document.getElementById("vk");
            var about = document.getElementById("logo");
            var resume = document.getElementById("resume");
            var topic = document.getElementById("topic");
            
            cat.src = "images/cat.png";
            telegram.src = "images/6422206.png";
            vk.src = "images/vk.png";
            about.src = "images/about_logo.png";
            resume.src = "images/resume.png";
            topic.src = "images/free-topic.png";
            theme.src = "images/check_theme.png";
            
            var body = document.getElementById("body");
            var avatar = document.getElementById("avatar");
            var name = document.getElementById("name");
            var info = document.getElementById("info");
            var about = document.getElementById("about_two");
            var about_easy = document.getElementById("about_easy");
            var plus = document.getElementById("plus");
            var texta = document.getElementById("texta");
    
            var headerka = document.getElementById("header");
            
            var one = document.getElementById("one");
    
            body.style.backgroundColor = "rgb(43,44,44)";
            avatar.style.backgroundColor = "#2b2c2c";
            name.style.backgroundColor = "#2d2e2e";
            info.style.color = "rgb(164,165,166);";
            about.style.backgroundColor = "#292a2a";
            about_easy.style.color = "rgb(164,165,166)";
            plus.style.color = "rgb(164,165,166)";
            texta.style.color = "rgb(164,165,166)";
            texta.style.backgroundColor= "#2b2c2c";
    
            headerka.style.backgroundColor = "rgb(38,38,38)";
        
            one.style.color = "black";


            theme.src = "images/check_theme.png";
            flag = true;     
    }
}
  
