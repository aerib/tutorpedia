const katalogBuku = [
    {
        judul: "Pemrograman Javascript",
        penulis: "Tony Stark",
        isbn: "1234567890",
        isFiction: false,
    },
    {
        judul: "Pemrograman Python",
        penulis: "Bruce Banner",
        isbn: "6789012345",
        isFiction: false,
    },
    {
        judul: "Dunia Fantasi",
        penulis: "Carrol Danver",
        isbn: "5432167890",
        isFiction: true,
    }
];

console.log(katalogBuku[1])
console.log(katalogBuku[0])

const namaProvinsi = "kalimantan timur"

const firstChar = namaProvinsi.slice(0,1)
const upperCaseOfFirstChar = firstChar.toUpperCase()
const afterSlice = namaProvinsi.slice(1)
const traversalOfName = `${upperCaseOfFirstChar}${afterSlice}`

console.log(traversalOfName)