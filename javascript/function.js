function capitalFirstLetter(name) {
    const firstChar = name.slice(0,1)
    const upperCaseOfFirstChar = firstChar.toUpperCase()
    const afterSlice = namaProvinsi.slice(1)
    const traversalOfName = `${upperCaseOfFirstChar}${afterSlice}`

    console.log(traversalOfName)
}

const namaProvinsi = "kalimantan timur"

capitalFirstLetter(namaProvinsi)