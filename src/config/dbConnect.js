import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://erickunzel:GgIHtLGxcOFHXyoL@cluster.hpfhjgq.mongodb.net/bookstore-node');

let db = mongoose.connection;

export default db;