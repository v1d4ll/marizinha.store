const linkMobile  = "https://seulink-mobile.com";
const linkDesktop = "https://seulink-desktop.com";

function getUTMs() {
    const params = new URLSearchParams(window.location.search);
    return params.toString();
}

function redirecionar() {
    const utms = getUTMs();
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    let destino = isMobile ? linkMobile : linkDesktop;

    if (utms.length > 0) {
        destino += (destino.includes("?") ? "&" : "?") + utms;
    }

    window.location.href = destino;
}

window.onload = redirecionar;
