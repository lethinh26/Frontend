let num = Number(prompt("Nhập số"))

if (isNaN(num)) {
    alert("Phải nhập vào số");
}else {
    if (num % 2 === 0) {
        alert(`${num} là số chẵn`)
    } else {
        alert(`${num} là số lẻ`)
    }
}
