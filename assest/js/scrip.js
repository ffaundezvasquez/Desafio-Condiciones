// Ejercicio 1

const shinji = document.querySelector("#shinji")


document.querySelector("#shinji").addEventListener("click", ()=> {
    if(shinji.style.border == ""){
        shinji.style.border ="2px solid red";
    }else {
        shinji.style.border = ""
    }
});


// Ejercicio 2

const inputsStickers = document.getElementsByName('sticker');
const showMessage = document.getElementById('showMessage');
const verifyBtn = document.getElementById('verifyBtn');
const QUANTITY = 10;

inputsStickers.forEach(inputSticker => {
    inputSticker.addEventListener('change', () => {
        showMessage.style.display = 'block';
        showMessage.innerText = getMessageStickers(getQtyStickers(inputsStickers))
    });
})

verifyBtn.addEventListener('click', () => {
    showMessage.style.display = 'block';
    showMessage.innerText = getMessageStickers(getQtyStickers(inputsStickers))
});

const getQtyStickers = (inputsStickers) => {

    let qty = 0;

    inputsStickers.forEach(input => {
        qty += input.valueAsNumber;
    });

    return qty;
}

const getMessageStickers = (qty) => {

    if (isNaN(qty)) {
        return `Ingrese solo números`;
    }

    if (qty > QUANTITY) {
        return `Llevas más de la cantidad permitida (10). Llevas: ${qty}. Modifica la cantidad.`
    } else {
        return `Llevas: ${qty} stickers en total`;
    }

}

// Ejercicio 3: Contraseña
const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const numberThree = document.getElementById('numberThree');
const resultPassword = document.getElementById('resultPassword');
const password = { _ONE: '911', _TWO: '714' }

intoBtn.addEventListener('click', () => {

    const values = {
        one: numberOne.value,
        two: numberTwo.value,
        three: numberThree.value
    }
    resultPassword.style.display = 'block';
    resultPassword.innerText = verifyPassword(values);
})

const verifyPassword = ({ one, two, three }) => {
    const passwordSelect = one + two + three;

    if (passwordSelect === password._ONE) {
        return 'Password 1 correcta';
    } else if (passwordSelect === password._TWO) {
        return 'Password 2 correcta';
    } else {
        return 'Password incorrecto';
    }
}