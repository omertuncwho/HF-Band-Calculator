function hfBandCalculator(frequency) {
    if (3.5 <= frequency && frequency <= 4.0) {
        return "80m Band";
    } else if (7.0 <= frequency && frequency <= 7.3) {
        return "40m Band";
    } else if (10.1 <= frequency && frequency <= 10.15) {
        return "30m Band";
    } else if (14.0 <= frequency && frequency <= 14.35) {
        return "20m Band";
    } else if (18.068 <= frequency && frequency <= 18.168) {
        return "17m Band";
    } else if (21.0 <= frequency && frequency <= 21.45) {
        return "15m Band";
    } else if (24.89 <= frequency && frequency <= 24.99) {
        return "12m Band";
    } else if (28.0 <= frequency && frequency <= 29.7) {
        return "10m Band";
    } else {
        return "Frequency not within any recognized HF band.";
    }
}

function main() {
    try {
        let frequency = parseFloat(prompt("Enter the frequency in MHz: "));
        let band = hfBandCalculator(frequency);
        console.log("You are in the", band);
    } catch (error) {
        console.log("Invalid input. Please enter a numerical value for frequency.");
    }
}

main();
