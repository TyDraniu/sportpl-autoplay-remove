// Import the page-mod API
var pageMod = require("sdk/page-mod");
// js as separate files supplied in "data" directory. 
var data = require("sdk/self").data;

// test: http://www.sport.pl/sport/10,67450,14039299,Salamon__powiedzialem_Dudkowi__ze_w_Milanie_nadal.html
pageMod.PageMod({
    include: ["*.sport.pl", "*.gazeta.pl", "*.gazeta.biz", "*.tokfm.pl", "*.gazetapraca.pl", "*.moto.pl", "*.wyborcza.pl", "*.wyborcza.biz", "*.wysokieobcasy.pl", "*.plotek.pl", "*.polygamia.pl", "*.gazeta.tv"],
    contentScriptFile: data.url("script.js")
});