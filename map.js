function toggleInfoBox(countryName, countryCode) {
    const infoBox = document.getElementById('info-box');
    const countryNameElement = document.getElementById('country-name');
    const countryCodeElement = document.getElementById('country-code');

    if (infoBox.style.display === 'none') {
        countryNameElement.textContent = countryName;
        countryCodeElement.textContent = countryCode;
        infoBox.style.display = 'block'; // Show the info box
    } else {
        infoBox.style.display = 'none'; // Hide the info box
    }
}
