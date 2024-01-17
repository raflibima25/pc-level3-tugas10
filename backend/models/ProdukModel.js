import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Produk = db.define('produk', {
    nama_produk: DataTypes.STRING, // Field DB
    keterangan: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
}, {
    freezeTableName: true // Opsi
});

export default Produk;

// Generate table jika table Produk tidak ada di database
(async() => {
    await db.sync();
})();