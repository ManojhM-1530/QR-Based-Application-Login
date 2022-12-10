function genQr()
{
   
    var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg=document.getElementById("imgs");
    var mytext="https://github.com/ManojhM-1530/QR-Based-Application-Login.git";

    myimg.src="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=250x250&ch1="+mytext;

}
