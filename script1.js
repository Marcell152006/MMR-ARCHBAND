const monuments = [
    {
    title: "Gedung Sate",
    position: { x: -0.006, y: 0.04, z: 0.1 },
    location:
        "Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
    jam: "Selasa - Minggu : 09.30 - 16.00",
    instagram:
        '<a href="https://instagram.com/museumgedungsate" target="_blank"><i>@museumgedungsate<i></a>',
    history:
        "Dibangun pada tahun 1920 sebagai pusat pemerintahan Hindia Belanda di Bandung. Setelah kemerdekaan, gedung ini digunakan sebagai kantor pemerintahan dan kini menjadi kantor Gubernur Jawa Barat serta memiliki Museum Gedung Sate.",
    fact: "Nama “Gedung Sate” berasal dari ornamen di puncaknya yang menyerupai tusuk sate. Enam bulatan pada ornamen tersebut sering dikaitkan dengan biaya pembangunan sebesar 6 juta gulden.",
    },
    {
    title: "Monumen Bandung Lautan Api",
    position: { x: -0.124, y: -0.22, z: 0.06},
    location:
        "Jl. BKR, Ciateul, Kec. Regol, Kota Bandung, Jawa Barat 40252 (Monumen Bandung Lautan Api)",
    jam: "Buka 24 jam",
    instagram: "-",
    history:
        "Peristiwa pembakaran besar yang terjadi pada 24 Maret 1946, ketika pejuang Indonesia membumihanguskan Bandung bagian selatan untuk mencegah kota dikuasai kembali oleh Sekutu dan Belanda.",
    fact: "Peristiwa ini menginspirasi lagu “Halo-Halo Bandung”, khususnya pada bagian akhir yang menggambarkan semangat perjuangan rakyat.",
    },
    {
    title: "Museum Konferensi Asia Afrika",
    position: { x: -0.08, y: -0.05, z: 0.06 },
    location:
        "Jl. Asia Afrika No.65, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111",
    jam: "Rabu, Kamis, Sabtu : 09.00 - 12.00 & 13.00 - 15.00<br>Jumat : 09.00 - 11.30 & 13.30 - 15.30",
    instagram:
        '<a href="https://instagram.com/mkaa_kemlu" target="_blank"><i>@mkaa_kemlu<i></a>',
    history:
        "Dibangun pada tahun 1895 dan menjadi lokasi berlangsungnya Konferensi Asia Afrika pada tahun 1955. Museum Konferensi Asia Afrika diresmikan pada 24 April 1980 untuk mengenang peristiwa bersejarah tersebut.",
    fact: "Gedung ini menjadi saksi lahirnya solidaritas negara-negara Asia dan Afrika dalam melawan kolonialisme dan memperjuangkan kemerdekaan.",
    },
    {
    title: "Museum Geologi",
    position: { x: 0.15, y: 0.08, z: 0.08 },
    location:
        "Jl. Diponegoro No.57, Cihaur Geulis, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40122",
    jam: "Senin - Kamis : 09.00 - 15.00<br>Sabtu - Minggu : 09.00 - 14.00",
    instagram:
        '<a href="https://instagram.com/museum_geologi" target="_blank"><i>@museum_geologi<i></a>',
    history:
        "Didirikan pada tahun 1928 oleh pemerintah Hindia Belanda sebagai pusat penelitian geologi, dan diresmikan pada 16 Mei 1929. Kini museum ini menjadi tempat edukasi kebumian di Indonesia.",
    fact: "Museum ini menyimpan fosil dinosaurus, batuan langka, serta informasi tentang gempa bumi dan gunung berapi di Indonesia.",
    },
    {
    title: "Warenhuis De Vries",
    position: { x: 0, y: -0.16, z: 0.1 },
    location:
        "Jl. Asia Afrika No.124, Karanganyar, Kec. Astana Anyar, Kota Bandung, Jawa Barat 40241",
    jam: "Hanya untuk berfoto dari luar! Saat ini bangunan sudah menjadi gedung kantor bank OCBC",
    instagram: "-",
    history:
        "Merupakan salah satu toko serba ada (department store) pertama di Bandung pada masa kolonial Belanda. Bangunan ini dirancang oleh arsitek Ed Cuypers.",
    fact: "Selain sebagai toko, bangunan ini pernah digunakan untuk berbagai fungsi seperti studio foto, toko furnitur, hingga tempat hiburan.",
    },
    {
    title: "Museum Pos Indonesia",
    position: { x: 0.14, y: 0, z: 0.08 },
    location:
        "Jl. Cilaki No.73, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
    jam: "Senin - Jumat : 09.00 - 15.00",
    instagram:
        '<a href="https://instagram.com/museumposindonesia" target="_blank"><i>@museumposindonesia<i></a>',
    history:
        "Berdiri sejak 1931 dengan nama Museum PTT (Pos, Telegraf, dan Telepon). Museum ini menunjukkan perkembangan sistem komunikasi di Indonesia dari masa ke masa.",
    fact: "Museum ini memiliki koleksi perangko dari berbagai negara di dunia, termasuk perangko langka yang bernilai tinggi.",
    },
    {
    title: "Masjid Agung",
    position: { x: -0.223, y: -0.05, z: 0.1 },
    location:
        "Jl. Dalem Kaum No.14, Balonggede, Kec. Regol, Kota Bandung, Jawa Barat 40251",
    jam: "Setiap Hari : 05.00 - 22.00",
    instagram: "-",
    history:
        "Didirikan pada tahun 1812 dan merupakan salah satu masjid tertua di Bandung. Masjid ini telah mengalami beberapa kali renovasi hingga menjadi bangunan megah seperti sekarang.",
    fact: "Masjid ini memiliki dua menara tinggi yang dapat dinaiki pengunjung untuk melihat pemandangan Kota Bandung dari atas.",
    },
];

let sceneStarted = false;
let mapOpened = false;
let markersVisible = false;
let animFrameId = null;
let targetEntity = null;
let markersAnimated = false;

const modelSources = [
  {
    src: "scene.gltf",
    popupScale: 1.0
  },
  {
    src: "assets/monumen_bandung_lautan_api.glb",
    popupScale: 1.0
  },
  {
    src: "assets/museum_kaa_bandung_by_aziz_a.glb",
    popupScale: 1.0
  },
  {
    src: "assets/museum_geologi_bandung.glb",
    popupScale: 1.5
  },
  {
    src: "assets/gedung_warenhuis_de_vries_bandung.glb",
    popupScale: 1.0
  },
  {
    src: "assets/museumpos.glb",
    popupScale: 1.8
  },
  {
    src: "assets/masjid_agung_bandung.glb",
    popupScale: 1.0
  }
];

function createMarkers() {
    const container = document.getElementById("markers-container");
    container.innerHTML = "";
    monuments.forEach((m, i) => {
    const div = document.createElement("div");
    div.className = "map-marker";
    div.id = `marker-${i}`;
    div.innerHTML = `
    <div class="marker-pin">
    <div class="marker-pin-inner"></div>
    </div>
`;
    div.addEventListener("click", (e) => {
        e.stopPropagation();
        showPopup(i);
    });
    div.addEventListener(
        "touchstart",
        (e) => {
        e.stopPropagation();
        showPopup(i);
        },
        { passive: true },
    );
    container.appendChild(div);
    });
}

function updateMarkers() {
    if (!markersVisible || !targetEntity) {
    animFrameId = requestAnimationFrame(updateMarkers);
    return;
    }

    const scene = document.querySelector("a-scene");
    const camera = scene.camera;
    const renderer = scene.renderer;
    const canvas = renderer.domElement;
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;

    monuments.forEach((m, i) => {
    const markerEl = document.getElementById(`marker-${i}`);
    if (!markerEl) return;

    const targetObj = targetEntity.object3D;
    const worldPos = new THREE.Vector3(
        m.position.x,
        m.position.y,
        m.position.z,
    );
    targetObj.localToWorld(worldPos);

    const projected = worldPos.clone().project(camera);

    if (projected.z > 1) {
        markerEl.style.display = "none";
        return;
    }

    const x = (projected.x * 0.5 + 0.5) * W;
    const y = (-projected.y * 0.5 + 0.5) * H;

    if (x < -50 || x > W + 50 || y < -50 || y > H + 50) {
        markerEl.style.display = "none";
        return;
    }

    markerEl.style.display = "flex";
    markerEl.style.left = x + "px";
    markerEl.style.top = y + "px";
    });

    animFrameId = requestAnimationFrame(updateMarkers);
}

function startAR() {
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.3; 
    bgMusic.play().catch((err) => {
    console.log("Audio gagal diputar:", err);
    });

    document.getElementById("splash").classList.add("hidden");
    document.getElementById("ar-loading").classList.remove("hidden");

    const scene = document.getElementById("ar-scene");
    scene.style.visibility = "visible";

    createMarkers();

    scene.addEventListener("targetFound", (e) => {
    targetEntity = document.querySelector("[mindar-image-target]");

    if (!mapOpened) {
        const folds = document.querySelectorAll("[animation__open]");
        folds.forEach((el) => el.emit("unfold"));
        mapOpened = true;
    }

    setTimeout(() => {
        document.querySelectorAll("a-gltf-model").forEach((model) => {
        model.setAttribute("visible", true);
        });
    }, 1300);

    markersVisible = true;
    document.getElementById("markers-container").style.display = "block";
    document.getElementById("hudStatus").textContent = "PETA TERDETEKSI";

    if (!markersAnimated) {
        monuments.forEach((_, i) => {
        setTimeout(() => {
            const el = document.getElementById(`marker-${i}`);
            if (el) el.classList.add("pop-in");
        }, 2500);
        });
        markersAnimated = true;
    } else {
        monuments.forEach((_, i) => {
        const el = document.getElementById(`marker-${i}`);
        if (el) el.classList.add("pop-in");
        });
    }
    });

    scene.addEventListener("targetLost", () => {
    markersVisible = false;
    document.getElementById("markers-container").style.display = "none";
    document.getElementById("hudStatus").textContent = "SCANNING MAP...";
    });

    function launchMindAR() {
    document.getElementById("ar-loading").classList.add("hidden");
    document.getElementById("hud").style.display = "block";
    sceneStarted = true;
    animFrameId = requestAnimationFrame(updateMarkers);
    }

    if (scene.hasLoaded) {
    setTimeout(launchMindAR, 300);
    } else {
    scene.addEventListener(
        "loaded",
        () => setTimeout(launchMindAR, 300),
        { once: true },
    );
    }
}

function exitAR() {
    const bgMusic = document.getElementById("bgMusic");

    bgMusic.pause();
    bgMusic.currentTime = 0;
    
    hidePopup();
    if (animFrameId) cancelAnimationFrame(animFrameId);
    markersVisible = false;
    document.getElementById("markers-container").style.display = "none";

    if (sceneStarted) {
    try {
        document
        .querySelector("a-scene")
        .systems["mindar-image-system"].stop();
    } catch (e) {}
    }
    document.getElementById("hud").style.display = "none";
    document.getElementById("ar-scene").style.visibility = "hidden";
    document.getElementById("splash").classList.remove("hidden");
    sceneStarted = false;
    mapOpened = false;
    targetEntity = null;
    markersAnimated = false;
}

document
    .getElementById("popup-overlay")
    .addEventListener("click", function (e) {
    if (e.target === this) hidePopup();
    });
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hidePopup();
});

let popupRenderer, popupAnimId;

function loadPopupModel(idx) {
    const canvas = document.getElementById("popup-3d-canvas");
    const loading = document.getElementById("popup-3d-loading");

    canvas.style.display = "none";
    loading.style.display = "flex";
    loading.textContent = "MEMUAT MODEL...";

    if (popupAnimId) {
    cancelAnimationFrame(popupAnimId);
    popupAnimId = null;
    }

    const scene = new THREE.Scene();
    const W = canvas.parentElement.clientWidth || 340;
    const H = 220;

    if (!popupRenderer) {
    popupRenderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
    });
    }
    popupRenderer.setPixelRatio(window.devicePixelRatio);
    popupRenderer.setClearColor(0x0f0a04, 1);
    popupRenderer.setSize(W, H, false);
    popupRenderer.outputEncoding = THREE.sRGBEncoding;
    popupRenderer.physicallyCorrectLights = true;

    const camera = new THREE.PerspectiveCamera(45, W / H, 0.0001, 100000);
    camera.lookAt(0, 0, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0xffeedd, 1);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);
    const bottomLight = new THREE.DirectionalLight(0xaabbff, 0.5);
    bottomLight.position.set(0, -5, 0);
    scene.add(bottomLight);

    const info = modelSources[idx];
    const loader = new THREE.GLTFLoader();

    loader.load(
    info.src,
    (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
        if (child.isMesh) {
            child.geometry.computeBoundingBox();
            child.geometry.computeBoundingSphere();
            if (child.material) {
            const mats = Array.isArray(child.material)
                ? child.material
                : [child.material];
            mats.forEach((mat) => {
                if (mat.map) mat.map.encoding = THREE.sRGBEncoding;
                if (mat.emissiveMap)
                mat.emissiveMap.encoding = THREE.sRGBEncoding;
                mat.needsUpdate = true;
            });
            }
        }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fitScale = 2.5 / maxDim;

        model.scale.setScalar(
            fitScale * (info.popupScale || 1)
        );

        const initialRotations = [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: Math.PI, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 },
        ];
        const rot = initialRotations[idx];
        model.rotation.set(rot.x, rot.y, rot.z);

        const boxScaled = new THREE.Box3().setFromObject(model);
        const centerScaled = boxScaled.getCenter(new THREE.Vector3());
        const sizeScaled = boxScaled.getSize(new THREE.Vector3());
        const maxDimScaled = Math.max(
        sizeScaled.x,
        sizeScaled.y,
        sizeScaled.z,
        );

        const group = new THREE.Group();
        scene.add(group);

        model.position.set(
        -centerScaled.x,
        -centerScaled.y,
        -centerScaled.z,
        );
        group.add(model);

        const camDist = maxDimScaled * 1.4 / (info.popupScale || 1);
        camera.position.set(0, maxDimScaled * 0.15, camDist);
        camera.lookAt(0, 0, 0);
        camera.near = maxDimScaled * 0.001;
        camera.far = maxDimScaled * 1000;
        camera.updateProjectionMatrix();

        canvas.style.display = "block";
        loading.style.display = "none";

        function animate() {
        popupAnimId = requestAnimationFrame(animate);
        group.rotation.y += 0.008;
        popupRenderer.render(scene, camera);
        }
        animate();
    },
    (progress) => {
        if (progress.total > 0) {
        loading.textContent = `MEMUAT... ${Math.round((progress.loaded / progress.total) * 100)}%`;
        }
    },
    (err) => {
        console.warn("Gagal load:", err);
        loading.textContent = "MODEL TIDAK TERSEDIA";
    },
    );
}

function showPopup(idx) {
    const m = monuments[idx];
    if (!m) return;

    document.getElementById("popupName").textContent = m.title;
    document.getElementById("popupLocation").textContent = m.location;
    document.getElementById("popupJam").innerHTML = m.jam;
    document.getElementById("popupIG").innerHTML = m.instagram;
    document.getElementById("popupHistory").textContent = m.history;
    document.getElementById("popupFact").textContent = m.fact;
    document.getElementById("popup-overlay").classList.add("visible");

    setTimeout(() => loadPopupModel(idx), 100);
}

function hidePopup() {
    document.getElementById("popup-overlay").classList.remove("visible");
    if (popupAnimId) {
    cancelAnimationFrame(popupAnimId);
    popupAnimId = null;
    }
}