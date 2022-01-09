const connection = new WebSocket("ws://localhost:3000");
const logWindow =  document.querySelector("#log-window");

connection.onopen = () => {
    connection.send("Hello from the cllient!");
};

connection.onmessage = (event) => {
    logWindow.innerHTML += event.data + "\n";
};