<script>

    function ElsoNSzamOsszege(szamokMenyisege ) {
        let osszeg = 0;
    for (let i=0; i<szamokMenyisege.length; i++) {
        osszeg += Number(szamokMennyisege[i]);
    }
    return osszeg;
}

    document.write(""+ElsoNSzamOsszege(3));
    document.write("<br>"+ElsoNSzamOsszege(10));
        document.write("<br>"+ElsoNSzamOsszege(21));

        </script>