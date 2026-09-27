let no = 1;
let barisYangDiedit = null;

function tambahData() {
    let nama    = document.getElementById("name").value.trim();
    let radio = document.querySelector('input[name="class"]:checked');
    let kelas   = radio ? radio.value.toUpperCase() : "";
    let jurusan = document.getElementById("ekskul2").value;
    let ekskul  = document.getElementById("plheks").value;

    if (nama === "") {
        alert("Nama wajib diisi!"); return;
    }
    if (kelas === "") {
        alert("Pilih kelas terlebih dahulu!"); return;
    }
    if (jurusan === "-- pilih jurusan --") {
        alert("Pilih jurusan terlebih dahulu!"); return;
    }
    if (ekskul === "pilih") {
        alert("Pilih ekstrakurikuler terlebih dahulu!"); return;
    }

    if (barisYangDiedit !== null) {
        barisYangDiedit.cells[1].textContent = nama;
        barisYangDiedit.cells[2].textContent = kelas;
        barisYangDiedit.cells[3].textContent = jurusan.toUpperCase();
        barisYangDiedit.cells[4].textContent = ekskul;

        barisYangDiedit = null;
        document.querySelector(".btn button").textContent = "Tambah";

    } else {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${no}</td>
            <td>${nama}</td>
            <td>${kelas}</td>
            <td>${jurusan.toUpperCase()}</td>
            <td>${ekskul}</td>
            <td>
                <button class="btn-edit" onclick="edit(this)">Edit</button>
                <button class="btn-hapus" onclick="hapus(this)">Delete</button>
            </td>
        `;

        document.getElementById("isiTabel").appendChild(tr);
        no++;
    }

    resetForm();
}

function edit(tombol) {
    let baris = tombol.closest("tr");

    let nama    = baris.cells[1].textContent;
    let kelas   = baris.cells[2].textContent;
    let jurusan = baris.cells[3].textContent;
    let ekskul  = baris.cells[4].textContent;

    document.getElementById("name").value = nama;

    document.querySelectorAll('input[name="class"]').forEach(r => {
        r.checked = (r.value.toUpperCase() === kelas);
    });

    document.getElementById("ekskul2").value = jurusan.toLowerCase();
    document.getElementById("plheks").value  = ekskul;

    barisYangDiedit = baris;
    document.querySelector(".btn button").textContent = "Simpan Perubahan";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function hapus(tombol) {
    tombol.closest("tr").remove();
}

function resetForm() {
    document.getElementById("name").value    = "";
    document.getElementById("ekskul2").value = "-- pilih jurusan --";
    document.getElementById("plheks").value  = "pilih";
    document.querySelectorAll('input[name="class"]').forEach(r => r.checked = false);
}