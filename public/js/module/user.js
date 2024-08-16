const ws = new Worker('./ws.js');
ws.postMessage({nombre: "Miguel"})