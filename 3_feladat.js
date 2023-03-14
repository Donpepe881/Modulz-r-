// 3.feladat - Ph érték

<script>

    function PhErtek(vizsgaltErtek) {
	if (vizsgaltErtek == 7) {
    	return "semleges";
    }
    else if (vizsgaltErtek < 7) {
    	return "savas";
    }
    else {
    	 return "lugos"
    }
}

    document.write(PhErtek(9)+"");
    document.write("<br>"+PhErtek(5.5));
        document.write("<br>"+PhErtek(7));

        </script>

