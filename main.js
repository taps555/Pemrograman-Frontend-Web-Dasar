function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    let totalKRS = 0
    // let programStudi = [`ACC` , `HIN`, `IAB`, `IAP`, `MJN`, `TKM`]

    if (gpa > 4 || gpa < 0){
        return `Invalid gpa number`
    } else if (gpa > 2.99 ) {
        totalKRS = 24;
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`
    } else if (gpa >= 2.5 || gpa <= 2.99 ) {
        totalKRS = 21
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`
    } else if (gpa >= 2 || gpa <= 2.49) {
        totalKRS = 18
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`
    } else if (gpa >= 1.5 || gpa <= 1.99) {
        totalKRS = 15
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`
    } else if (gpa >= 0 || gpa <= 1.49) {
        totalKRS = 12
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programId} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`
    } 

    
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
