
const mula = document.getElementById("mula");
const ikan = document.getElementById("ikan");
const loading = document.getElementById("loading");
const videoPage = document.getElementById("videoPage");
const video = document.getElementById("videoMeme");

let loadingTimer;

function tukarPaparan(paparan) {
    [mula, ikan, loading, videoPage].forEach(item => {
        item.classList.add("sembunyi");
    });

    paparan.classList.remove("sembunyi");
}

function paparIkan() {
    tukarPaparan(ikan);
}

function mulaLoading() {
    tukarPaparan(loading);

    let progress = 0;

    const mesej = [
        "Menghubungi ikan bilis... 🐟",
        "Mencari otak yang hilang... 🧠",
        "Meminta kebenaran daripada cicak... 🦎",
        "Cicak tidak memberi kerjasama.",
        "ALAMAK. 💀",
        "Sabar bah, jangan marah 😭"
    ];

    const isiBar = document.getElementById("isiBar");
    const peratus = document.getElementById("peratus");
    const teks = document.getElementById("teksLoading");

    isiBar.style.width = "0%";
    peratus.textContent = "0%";

    clearInterval(loadingTimer);

    loadingTimer = setInterval(() => {
        progress += 2;

        isiBar.style.width = progress + "%";
        peratus.textContent = progress + "%";

        const index = Math.min(
            Math.floor(progress / 17),
            mesej.length - 1
        );

        teks.textContent = mesej[index];

        if (progress >= 100) {
            clearInterval(loadingTimer);

            setTimeout(() => {
                tukarPaparan(videoPage);

                video.play().catch(() => {
                    // Tekan Play jika autoplay disekat.
                });
            }, 500);
        }
    }, 80);
}

function apaBenda() {
    const jawapan = document.getElementById("jawapan");

    const ayat = [
        "AKU PUN TAK FAHAM, AKU CUMA WEBSITE. 🗿",
        "SILA TANYA IKAN BILIS. 🐟",
        "JANGAN TANYA AKU, AKU PENAT. 😭",
        "MASALAHNYA KAU TEKAN JUGA. 💀"
    ];

    const random = Math.floor(Math.random() * ayat.length);

    jawapan.textContent = ayat[random];
}

function ulangSemula() {
    clearInterval(loadingTimer);

    video.pause();
    video.currentTime = 0;

    document.getElementById("jawapan").textContent = "";

    const lariBtn = document.getElementById("lariBtn");
    lariBtn.style.transform = "";

    tukarPaparan(mula);
}

// BUTTON YANG LARI
const lariBtn = document.getElementById("lariBtn");

function larikanButton() {
    const x = Math.random() * 140 - 70;
    const y = Math.random() * 140 - 70;

    lariBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}

lariBtn.addEventListener("mouseenter", larikanButton);

lariBtn.addEventListener("click", () => {
    larikanButton();
    document.getElementById("jawapan").textContent =
        "NAK LARI MANA TU HAHAHA 😭";
});
