const { MongoClient } = require("mongodb");

module.exports = class connect {
    user;
    port;
    #pass;
    host;
    #cluster;
    #dbName;
    conexion;

    constructor({ user: u, port: p, pass: w, host: h, cluster: c, dbName: d } = {
        user: process.env.MONGO_USER,
        port: process.env.MONGO_PORT,
        pass: process.env.MONGO_PWD,
        host: process.env.MONGO_HOST,
        cluster: process.env.MONGO_CLUSTER,
        dbName: process.env.MONGO_DB
    }) {
        this.user = u;
        this.port = p;
        this.setPass = w;
        this.host = h;
        this.setCluster = c;
        this.setdbName = d;
        this.#open().then(() => {
            this.db = this.conexion.db(this.getdbName);
        });
    }

    set setPass(pass) {
        this.#pass = pass;
    }


    set setCluster(cluster) {
        this.#cluster = cluster;
    }

    set setdbName(dbName) {
        this.#dbName = dbName;
    }

    get getPass() {
        return this.#pass;
    }

    get getCluster() {
        return this.#cluster;
    }

    get getdbName() {
        return this.#dbName;
    }

    async #open() {
        // Construir el URI correctamente con usuario y contraseña
        const uri = `${this.host}${this.user}:${this.getPass}@${this.getCluster}/${this.getdbName}`;
        this.conexion = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await this.conexion.connect();
        this.db = this.conexion.db(this.getdbName);
    }

    async reconnect() {
        await this.#open();
    }

    async close() {
        if (this.conexion) {
            await this.conexion.close();
        } else {
            console.error('No connection to close');
        }
    }
}
