if (document.getElementById("gazetaVideoPlayerEmbed") != null) {
    var ramka = document.getElementById("gazetaVideoPlayerEmbed");
    var zrodloRamki = ramka.src;
    if (zrodloRamki.lastIndexOf("autoplay=1") > 0) {
        zrodloRamki = zrodloRamki.replace("autoplay=1", "autoplay=0");
        ramka.src = zrodloRamki;
                    };
}

var ramki = document.getElementsByTagName("iframe");
for (var i=0; i<ramki.length; i++) {
    var zrodloRamki = ramki[i].src;
    if (zrodloRamki.lastIndexOf("autoplay=true") > 0) {
        zrodloRamki = zrodloRamki.replace("autoplay=true", "autoplay=false");
        ramki[i].src = zrodloRamki;
    }
	else if (zrodloRamki.lastIndexOf(",video.html") > 0) {
		zrodloRamki += "?autoplay=false";
		ramki[i].src = zrodloRamki;
	}
}
