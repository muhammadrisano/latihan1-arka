let arrayObj = [
    {
        name: "Muhammad Risano Akbar",
        email: "6 Desember"
    },
    {
        name: "Bagus Eko",
        email: "24 Januari"
    }


]





// Show all item
let data = arrayObj.map(function (dataDiri) {
    return dataDiri;
})
console.log(data);

// pop item / menambah data di akhir
arrayObj.push({ name: 'tambah baru', bod: '24 Juni' });
console.log(arrayObj[1].name);

// delete item
delete arrayObj[1].name;
console.log(arrayObj);

// change value
arrayObj[0] = { name: 'Surya Setiawan', bod: '30 February' };
console.log(arrayObj);
