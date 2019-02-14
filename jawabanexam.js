//JAWABAN 1
var fnhasil = (bangun, ukuran) => {
    bangun = document.getElementById("bangun").value
    ukuran = document.getElementById("ukuran").value
    var z = ""
    if (bangun == 1) {
        for (var i = 0; i < ukuran; i++) {
            for (var j = 0; j < i + 1; j++) {
            z += "*" + " ";
            }
            z += "<br>";
        }
    } else if (bangun == 2) {
        for (var i = 0; i < ukuran; i++) {
            for (var j = 0; j < ukuran; j++) {
            z += "*" + " ";
            }
            z += "<br>";
        }

    } else if (bangun == 3) {
        for (var i = 0; i < ukuran; i++) {
            for (var j = 0; j < ukuran - 1 - i; j++) {
                z += "*";
            }
            for (var k = 0; k < i + 1; k++) {
                z += "*" + " ";
            }
            z += "<br>";
        }
    }
    document.getElementById("output").innerHTML = z
}
fnhasil()
