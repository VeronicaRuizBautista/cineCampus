const ws = new Worker('./ws.js');
ws.postMessage({nombre: "hola desde user.js"})

self.addEventListener("message", (e) => {
    console.log(e.data);
    self.postMessage({nombre: ""})
})