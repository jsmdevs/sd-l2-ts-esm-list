export function footerComponent() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <div>
        <p>Copyright 2025 - Todos los derechos reservados</p>
    </div>
    `;
    footer.style.border = "solid 3px black";
    footer.style.textAlign = "center";
    return footer;
}
