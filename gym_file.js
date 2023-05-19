function move_wallpaper_right()
{
    document.getElementById('Home_Section').style.backgroundImage="url('./Images_Used/wallpaper_2.jpg')";
    document.getElementById('home_content').style.display='block';
}
function move_wallpaper_left()
{
    document.getElementById('Home_Section').style.backgroundImage="url('./Images_Used/wallpaper_1.jpg')";
    document.getElementById('home_content').style.display='block';
}
function call_contact()
{
    window.location.href = 'contact.html'
}
function call_verify()
{
    let usename = document.getElementById("text_box").value;

    alert(usename +" Thank you for showing Interest")
}