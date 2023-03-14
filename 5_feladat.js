// 5. feladat - Legnagyobb páros szám


<script>

    function MaxParos(vizsgaltTomb) {
        let maxParosErtek = [0];
    for (let i=1; i<vizsgaltTomb.length; i++) {
    if (vizsgaltTomb[i]>maxParosErtek && vizsgaltTomb[i]%2==0) {
        maxParosErtek = vizsgaltTomb[i];        
    }
}
    return maxParosErtek;
}

    document.write(""+MaxParos ([12,3,7,19,21]));
    document// 5. feladat - Legnagyobb páros szám


    <script>

        function MaxParos(vizsgaltTomb) {
            let maxParosErtek = [0];
        for (let i=0; i<vizsgaltTomb.length; i++) {
    	if (vizsgaltTomb[i]>maxParosErtek && vizsgaltTomb[i]%2==0) {
            maxParosErtek = vizsgaltTomb[i];        
        }
    }
        return maxParosErtek;
}

        document.write("<br>"+MaxParos ([12,3,7,19,21]));
            document.write("<br>"+MaxParos ([28,14,2,42,69]));
                document.write("<br>"+MaxParos ([32,21,54,33,21]));


                </script>

                .write("<br>"+MaxParos ([28,14,2,42,69]));
                    document.write("<br>"+MaxParos ([32,21,54,33,21]));


                    </script>

