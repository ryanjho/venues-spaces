// Dependencies
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Connection
const MONGO_URL = process.env.MONGO_URL;

// Database Name
const DB_NAME = 'venuespaces';

// Collections Name
const COLLECTIONS = {
    VENUES: 'venues',
    OWNERS: 'owners',
    USERS: 'users',
    ENQUIRIES: 'enquiries'
};

// Create a new MongoClient
const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.venues = db.collection(COLLECTIONS.VENUES);
        this.owners = db.collection(COLLECTIONS.OWNERS);
        this.users = db.collection(COLLECTIONS.USERS);
        this.enquiries = db.collection(COLLECTIONS.ENQUIRIES);
    },

    disconnect() {
        return client.close();
    }
}

