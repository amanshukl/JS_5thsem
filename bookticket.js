const printMessage = (message) => {
    console.log(message);
};
const bookTicket = () => {
    printMessage("Booking ticket...");
    setTimeout(() => {
        printMessage("Ticket booked successfully!");
    setTimeout(() => {
        printMessage("Sending confirmation email...");
    setTimeout(() => {
        printMessage("Email sent successfully!");
    }, 2000);
    }, 3000);
    }, 5000);
}