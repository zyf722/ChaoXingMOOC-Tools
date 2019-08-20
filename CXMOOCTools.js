// ==UserScript==
// @name         超星慕课 Tools
// @version      0.1
// @description  超星慕课的辅助播放工具，目前仅有不锁定
// @author       MaxAlex, aka zyf722
// @match        *://*/mycourse/studentstudy?*
// @grant unsafeWindow
// @license      WTFPL
// ==/UserScript==

function getPlayer(){
    var doc = document;
    var player = doc.querySelector('object');
    while ((!player || player && !player.playMovie)){
        doc = doc.querySelector('iframe').contentDocument;
        player = doc.querySelector('object');
    }
    return player
}

setTimeout(
function (){

var doc = document;
var player = doc.querySelector('object');
var tryTime = 10;
var title = doc.getElementById("mainid").getElementsByTagName("h1")[0].innerHTML;
var oldtitle;
var id;

setInterval(function () {
    title = doc.getElementById("mainid").getElementsByTagName("h1")[0].innerHTML;
    if (title != oldtitle || player == null) {
        player = getPlayer();
        oldtitle = title;
    }
    player.playMovie()
},1000);

},1500)