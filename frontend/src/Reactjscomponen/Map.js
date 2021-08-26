import React from "react";

const makanan = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Mie ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
];

//reduce
const total_bayar = makanan.reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);

const Map = () => {
  return (
    <div>
      <h2>Map sederhana</h2>
      <ul>
        {makanan.map((makanan, index) => (
          <li>
            {index + 1}.{makanan.nama} - Harga {makanan.harga}
          </li>
        ))}
      </ul>
      <h2> Map filter harga yang lebih dari 11.000</h2>
      <ul>
        {makanan
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1}.{makanan.nama} - Harga {makanan.harga}
            </li>
          ))}
      </ul>

      <h3>total harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;
