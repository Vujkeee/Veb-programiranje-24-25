<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Zadaci u JavaScriptu</title>
</head>
<body>

<!-- 1. Prikaz trenutnog datuma u formatu DD/MM/YYYY -->
<script>
  // Kreiramo novi datum koristeći Date objekat
  var currentDate = new Date();
  var day = currentDate.getDate(); // Dan u mesecu
  var month = currentDate.getMonth() + 1; // Mesec, dodajemo 1 jer je januar 0
  var year = currentDate.getFullYear(); // Godina

  // Prikazujemo datum u formatu dan/mesec/godina
  document.write(day + "/" + month + "/" + year);
</script>

<!-- 2. Prikaz trenutnog vremena u formatu HH:MM -->
<script>
  // Kreiramo novi datum da bismo dobili trenutno vreme
  var currentTime = new Date();
  var hours = currentTime.getHours(); // Trenutni sat
  var minutes = currentTime.getMinutes(); // Trenutni minut

  // Dodajemo nulu ispred minuta ako je ispod 10 (na primer 09 umesto 9)
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Prikazujemo vreme u formatu sati:minute
  document.write(hours + ":" + minutes);
</script>

<!-- 3. Prikaz trenutnog vremena u formatu HH:MM AM/PM -->
<script>
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Dodajemo sufiks AM ili PM
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  document.write(hours + ":" + minutes + " " + suffix);
</script>

<!-- 12. Ispis današnjeg datuma u okviru h1 -->
<script>
  function ispis_datuma() {
    var d = new Date();
    var naziv_dana_u_nedelji = new Array('nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota');
    var i = d.getDay();
    var dan_u_n = naziv_dana_u_nedelji[i];
    var dan_u_m = d.getDate();
    var m = d.getMonth() + 1;
    var g = d.getFullYear();
    document.getElementsByTagName('p')[0].innerHTML = '<h1>' + dan_u_n + ", " + dan_u_m + "." + m + ". " + g + ".</h1>";
  }
</script>
<body onload="ispis_datuma()">
  <p></p>
</body>

<!-- 13. Izračunavanje broja dana do kraja godine -->
<script>
  var danas = new Date();
  var kraj_god = new Date();
  kraj_god.setMonth(11); // Decembar (mesec se broji od 0)
  kraj_god.setDate(31); // 31. decembar

  // Razlika u milisekundama između danas i kraja godine
  var razlika = kraj_god.getTime() - danas.getTime();
  razlika = Math.floor(razlika / (1000 * 60 * 60 * 24)); // Preračunavanje u dane

  document.write("<p> Do kraja godine je ostalo " + razlika + " dana!!!</p>");
</script>

<!-- 14. Prikaz slike samo do određenog datuma -->
<script>
  var ponuda = '<h1>Popust</h1>';
  var datum = new Date();
  function proveraisteka(datumisteka) {
    var datisteka = new Date(datumisteka);
    if (datum.getTime() <= datisteka.getTime()) {
      document.write(ponuda);
      document.write('<img src="sl1.jpg"><hr>Ponuda važi do dana:<br>' + datisteka);
    } else {
      document.write("<hr>Ponuda je važila do dana:<br>" + datisteka);
    }
  }
  proveraisteka("November 30, 2024"); // Primer datuma isteka
</script>

<!-- 15. Digitalni sat u okviru forme -->
<script>
  function digitalni_sat() {
    var danas = new Date();
    var sat = danas.getHours();
    var minut = danas.getMinutes();
    var sekunda = danas.getSeconds();
    var temp = sat;
    temp += ((minut < 10) ? ":0" : ":") + minut;
    temp += ((sekunda < 10) ? ":0" : ":") + sekunda;

    document.sat.vreme.value = temp;
    setTimeout("digitalni_sat()", 1000); // Poziv funkcije svakih 1 sekundu
  }
</script>
<body onload="digitalni_sat()">
  <form name="sat"><input name="vreme"></form>
</body>

<!-- 16. Ispisivanje i brisanje teksta sa porukom nakon 5 sekundi -->
<script>
  function ispis() {
    document.getElementById('demo').innerHTML = "Dobrodošli";
    setTimeout('brisanje()', 5000);
  }

  function brisanje() {
    document.getElementById('demo').innerHTML = "";
    alert('Prošlo je 5 sekundi od učitavanja strane!');
  }
</script>
<body onload="ispis()">
  <p id="demo"></p>
</body>

<!-- 17. Menjanje boje pozadine zavisno od doba dana -->
<script>
  function promena_boje() {
    var datum = new Date();
    var sati = datum.getHours();

    if (sati >= 20 || sati < 5) document.bgColor = "#000";
    else if (sati >= 5 && sati < 12) document.bgColor = "#FFE97F";
    else if (sati >= 12 && sati < 16) document.bgColor = "#14D3FF";
    else if (sati >= 16 && sati < 20) document.bgColor = "#FF8432";
  }
</script>
<body onload="promena_boje()">
  <p>Promena boje pozadine zavisno od doba dana</p>
</body>

<!-- 18. Slučajan izbor pozadine iz niza slika -->
<script>
  function bojaPozadine() {
    var background1 = "img1.jpg";
    var background2 = "img2.jpg";
    var background3 = "img3.jpg";
    var background;
    var sl_broj = Math.floor(3 * Math.random());

    background = sl_broj === 0 ? background1 : sl_broj === 1 ? background2 : background3;
    document.body.style.backgroundImage = `url(${background})`;
  }
</script>
<body onload="bojaPozadine()">
  <p>Promena pozadinske slike slučajnim izborom</p>
</body>

</html>
