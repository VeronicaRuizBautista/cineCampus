import { MongoClient } from "mongodb";

export class connect {
    user;
    port;
    #pass;
    #host;
    #cluster;
    #dbName;
    static instance;
    conexion;

    constructor({ user: u, port: p, pass: w, host: h, cluster: c, dbName: d } = {
        user: process.env.MONGO_USER,
        port: process.env.MONGO_PORT,
        pass: process.env.MONGO_PWD,
        host: process.env.MONGO_HOST,
        cluster: process.env.MONGO_CLUSTER,
        dbName: process.env.MONGO_DB
    }) {
        if (typeof connect.instance == "object") {
            return connect.instance;
        }
        this.user = u;
        this.port = p;
        this.setPass = w;
        this.setHost = h;
        this.setCluster = c;
        this.setdbName = d;
        this.#open().then(() => {
            this.db = this.conexion.db(this.getdbName);
        });
        connect.instance = this;
        return this;
    }

    set setPass(pass) {
        this.#pass = pass;
    }

    set setHost(host) {
        this.#host = host;
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

    get getHost() {
        return this.#host;
    }

    get getCluster() {
        return this.#cluster;
    }

    get getdbName() {
        return this.#dbName;
    }

    async #open() {
        const uri = `${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}/${this.getdbName}`;
        this.conexion = new MongoClient(uri);
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