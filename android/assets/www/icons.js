var loadIcons = function()
{
    var icons = document.querySelectorAll(".icon");
    var icon_dir = "icons_small";
    var w = window.innerWidth
    console.log("This is the width: " + w);
    if(w >= 800)
        icon_dir = "icons_large";
    else if(w < 800 && w >= 480)
        icon_dir = "icons_mid";
    for(var i = 0; i < icons.length; ++i) {
        //Just brute force this
        icons[i].src = icons[i].src.replace('icons_large', icon_dir);
        icons[i].src = icons[i].src.replace('icons_mid', icon_dir);
        icons[i].src = icons[i].src.replace('icons_small', icon_dir);
    }
}

