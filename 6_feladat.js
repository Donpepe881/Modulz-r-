// 5. feladat - Magánhangzók száma

<script>

    function MaganHangzokSzama(vizsgaltSzoveg) {
        let maganHangzok=["a","á","e","é","i","í","o","ó","u","ú","ü","ű","A","Á","E","É","I","Í","O","Ó","U","Ú","Ü","Ű"];
    let maganhangzokSzama = 0;
    for (let i=0; i<vizsgaltSzoveg.length; i++) {
    	for (let j=0; j<maganHangzok.length; j++) { 
    		if (vizsgaltSzoveg[i]==maganHangzok[j]) {
        maganhangzokSzama++;
        	}
		}
    }
    return maganhangzokSzama;
}

    document.write(""+MaganHangzokSzama("Szeretem a programozás"));
    document.write("<br>"+MaganHangzokSzama("Géza kék az ég"));
        document.write("<br>"+MaganHangzokSzama("Répa, retek, mogyoró"));


        </script>

