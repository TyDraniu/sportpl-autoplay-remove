var ramki = document.getElementsByTagName("iframe");
for (var i = 0; i < ramki.length; i++) {
	var zrodloRamki = ramki[i].src;
	if (zrodloRamki.contains("autoplay=true")) {
		zrodloRamki = zrodloRamki.replace("autoplay=true", "autoplay=false");
		ramki[i].src = zrodloRamki;
	}
}

var wp = document.querySelectorAll(".video_player > script");
for (var i = 0; i < wp.length; i++) {
	if (wp[i].src.contains("autoStartOnView=true")) {
		wp[i].src = wp[i].src.replace("autoStartOnView=true", "autoStartOnView=false");
	}
}