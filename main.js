function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    let totalKRS = '';
    let programStudy = '';

    switch (programId) {
        case 'ACC':
            programStudy = 'Akuntansi';
            break;
        case 'HIN':
            programStudy = 'Hubungan Internasional';
            break;
        case 'IAB':
            programStudy = 'Ilmu Administrasi Bisnis';
            break;
        case 'IAP':
            programStudy = 'Ilmu Administrasi Publik';
            break;
        case 'MJN':
            programStudy = 'Manajemen';
            break;
        case 'TKM':
            programStudy = 'Teknik Kimia';
            break;
        default:
            return 'Prodi tidak ditemukan';
    }

    if (gpa > 4 || gpa < 0) {
        return 'Invalid gpa number';
    }

    if (gpa > 2.99) {
        totalKRS = 24;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`;
    } else if (gpa >= 2.5) {
        totalKRS = 21;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programStudy} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`;
    } else if (gpa >= 2) {
        totalKRS = 18;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programStudy} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`;
    } else if (gpa >= 1.5) {
        totalKRS = 15;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programStudy} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`;
    } else if (gpa >= 0) {
        totalKRS = 12;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programStudy} dan hanya dapat mengambil SKS sebanyak ${totalKRS} SKS untuk semester depan.`;
    }

    return message;
}

// Dilarang menghapus/mengganti kode di bawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process.argv());
}

module.exports = krsApplication;

