// check validate navigator 

// validate control
// Send and export data for home

function checknavigator(){
	// detected navigator
	if (screen.width <= 699){
      alert("Dispositivoo navegador no compatible, pronto estaremos disponibles para darle soporte.");
      window.location.href="https://solarions1.github.io/error/";

    }

    if((navigator.userAgent.match(/iPhone/i))|| (navigator.userAgent.match(/iPod/i))){
      alert("Dispositivoo navegador no compatible, pronto estaremos disponibles para darle soporte.");
      window.location.href="https://solarions1.github.io/error/";
    }
	// 
}