import React, {useState, useEffect} from 'react'
import axios from "axios"

const ProdukList = () => {
    const [produks, setProduk] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/produks")
        setProduk(response.data)
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Produk</th>
                        <th>Keterangan</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {produks.map((produk, index) => (
                        <tr key={produk.id}>
                            <td>{index + 1}</td>
                            <td>{produk.nama_produk}</td>
                            <td>{produk.keterangan}</td>
                            <td>{produk.harga}</td>
                            <td>{produk.jumlah}</td>
                            <td>
                                <button className='button is-small is-info'>Edit</button>
                                <button className='button is-small is-danger'>Update</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProdukList