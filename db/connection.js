import { MongoClient } from 'mongodb';

export class connect {
    static instance;
    user;
    port;
    #pass;
    #host;
    #cluster;
    #dbName;
    constructor(
        { user: u, port: p, pass: w, host: h, cluster: c, dbName: d } = {
            user: process.env.MONGO_USER,
            port: process.env.MONGO_PORT,
            pass: process.env.MONGO_PWD,
            host: process.env.MONGO_HOST,
            cluster: process.env.MONGO_CLUSTER,
            dbName: process.env.MONGO_DB
        }
    ) {
        this.user = u;
        this.port = p;
        this.setPass = w;
        this.setHost = h;
        this.setCluster = c;
        this.setDbName = d;
        this.#open();
        this.db = this.conexion.db(this.getDbName);
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
    set setDbName(dbName) {
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
    get getDbName() {
        return this.#dbName;
    }
    async #open() {
        console.log(`${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}`)
        this.conexion = new MongoClient(`${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}`);
        this.conexion.connect();
    }
    async reconnect() {
        await this.#open();
    }
    async close() {
        await this.conexion.close();
    }
}
