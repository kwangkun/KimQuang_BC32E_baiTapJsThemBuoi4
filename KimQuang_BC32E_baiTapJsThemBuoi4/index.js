// Bài 5:
document.getElementById('btn_b5_1').onclick = function () {
    // Input: ngay, thang, nam: number
    var ngay = Number(document.getElementById('nhapNgay').value);
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);

    // Output: string
    var ketQua = '';

    // Process:
    if (ngay != 1) {
        ngay--;
    } else if (ngay === 1 && thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
        ngay += 29; thang--;
    } else if (ngay === 1 && thang === 2 || thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        ngay += 30; thang--;
    } else if (ngay === 1 && thang === 3) {
        ngay += 27; thang--;
    } else if (ngay === 1 && thang === 1) {
        ngay += 30; thang += 11; nam--;
    };

    ketQua = ngay + '/' + thang + '/' + nam;
    document.getElementById('ketQua_b5').innerHTML = ketQua;
};

document.getElementById('btn_b5_2').onclick = function () {
    // Input: ngay, thang, nam: number
    var ngay = Number(document.getElementById('nhapNgay').value);
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);

    // Output: string
    var ketQua = '';

    // Process:
    if (ngay === 31 && thang === 12) {
        ngay -= 30; thang -= 11; nam++;
    } else if (ngay === 28 && thang === 2) {
        ngay -= 27; thang++;
    } else if (ngay != 1 || ngay != 31) {
        ngay++;
    } else if (ngay === 31 && thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10) {
        ngay -= 30; thang++;
    } else if (ngay === 30 && thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        ngay -= 29; thang++;
    };


    ketQua = ngay + '/' + thang + '/' + nam;
    document.getElementById('ketQua_b5').innerHTML = ketQua;
};

// Bài 6:
document.getElementById('btn_b6').onclick = function () {
    // Input: thang, nam: number
    var thang = Number(document.getElementById('nhapThang_b6').value);
    var nam = Number(document.getElementById('nhapNam_b6').value);

    // Output: string
    var ketQua = '';

    // Process:
    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 | thang === 10 || thang === 12) {
        ketQua = 'tháng ' + thang + ' năm ' + nam + ' có ' + 31 + ' ngày';
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        ketQua = 'tháng ' + thang + ' năm ' + nam + ' có ' + 30 + ' ngày';
    } else if (thang === 2 && nam % 4 === 0 && nam % 100 !== 0 || nam % 400 === 0) {
        ketQua = 'tháng ' + thang + ' năm ' + nam + ' có ' + 29 + ' ngày';
    } else if (thang === 2 && nam % 4 !== 0 || nam % 400 !== 0) {
        ketQua = 'tháng ' + thang + ' năm ' + nam + ' có ' + 28 + ' ngày';
    };

    document.getElementById('ketQua_b6').innerHTML = ketQua;
};

// Bài 7:
document.getElementById('btn_b7').onclick = function () {
    // Input: n, tram, chuc, donVi: number
    var n = Number(document.getElementById('nhapSo_b7').value);
    var tram = Math.floor(n / 100);
    var donVi = Math.floor(n % 10);
    var chuc = (Math.floor(n / 10)) % 10;
    // Output: string
    var ketQuaTram = '';
    var ketQuaChuc = '';
    var ketQuaDonVi = '';

    // Process:
    switch (tram) {
        case 1:
            ketQuaTram = 'Một trăm';
            break;
        case 2:
            ketQuaTram = 'Hai trăm';
            break;
        case 3:
            ketQuaTram = 'Ba trăm';
            break;
        case 4:
            ketQuaTram = 'Bốn trăm';
            break;
        case 5:
            ketQuaTram = 'Năm trăm';
            break;
        case 6:
            ketQuaTram = 'Sáu trăm';
            break;
        case 7:
            ketQuaTram = 'Bảy trăm';
            break;
        case 8:
            ketQuaTram = 'Tám trăm';
            break;
        case 9:
            ketQuaTram = 'Chín trăm';
            break;
        default:
            ketQuaTram = '';
    };

    switch (chuc) {
        case 1:
            ketQuaChuc = 'mười';
            break;
        case 2:
            ketQuaChuc = 'hai mươi';
            break;
        case 3:
            ketQuaChuc = 'ba mươi';
            break;
        case 4:
            ketQuaChuc = 'bốn mươi';
            break;
        case 5:
            ketQuaChuc = 'năm mươi';
            break;
        case 6:
            ketQuaChuc = 'sáu mươi';
            break;
        case 7:
            ketQuaChuc = 'bảy mươi';
            break;
        case 8:
            ketQuaChuc = 'tám mươi';
            break;
        case 9:
            ketQuaChuc = 'chín mươi';
            break;
        default:
            ketQuaChuc = '';
    };
    switch (donVi) {
        case 1:
            ketQuaDonVi = 'một';
            break;
        case 2:
            ketQuaDonVi = 'hai';
            break;
        case 3:
            ketQuaDonVi = 'ba';
            break;
        case 4:
            ketQuaDonVi = 'bốn';
            break;
        case 5:
            ketQuaDonVi = 'lăm';
            break;
        case 6:
            ketQuaDonVi = 'sáu';
            break;
        case 7:
            ketQuaDonVi = 'bảy';
            break;
        case 8:
            ketQuaDonVi = 'tám';
            break;
        case 9:
            ketQuaDonVi = 'chín';
            break;
        default:
            ketQuaDonVi = '';
    };

    document.getElementById('ketQua_b7').innerHTML = ketQuaTram + ' ' + ketQuaChuc + ' ' + ketQuaDonVi;
};

// Bài 8:
document.getElementById('btn_b8').onclick = function () {
    // Input: tọa độ: number
    var xa = Number(document.getElementById('xSV_1').value);
    var ya = Number(document.getElementById('ySV_1').value);

    var xb = Number(document.getElementById('xSV_2').value);
    var yb = Number(document.getElementById('ySV_2').value);

    var xc = Number(document.getElementById('xSV_3').value);
    var yc = Number(document.getElementById('ySV_3').value);

    var xTr = Number(document.getElementById('xTruong').value);
    var yTr = Number(document.getElementById('yTruong').value);

    // Output: string
    var ketQua = '';

    // Process:
    var da = Math.sqrt(Math.pow(xTr - xa, 2) + (Math.pow(yTr - ya, 2)));
    var db = Math.sqrt(Math.pow(xTr - xb, 2) + (Math.pow(yTr - yb, 2)));
    var dc = Math.sqrt(Math.pow(xTr - xc, 2) + (Math.pow(yTr - yc, 2)));

    if (da > db && da > dc) {
        ketQua = 'Sinh viên xa trường nhất là: ' + document.getElementById('tenSV_1').value;
    } else if (db > da && db > dc) {
        ketQua = 'Sinh viên xa trường nhất là: ' + document.getElementById('tenSV_2').value;
    } else if (dc > da && dc > db) {
        ketQua = 'Sinh viên xa trường nhất là: ' + document.getElementById('tenSV_3').value;
    };

    document.getElementById('ketQua_b8').innerHTML = ketQua;
};