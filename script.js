const form = document.forms.calc;
const inputLamp = document.querySelector('.sumLamp')
const inputPeople = document.querySelector('.sumPeople')

function calcHandler(e) {
    e.preventDefault()
    let result = 1;
    const width = document.querySelector('.width').value
    const length = document.querySelector('._length').value
    const square = width*length/10000

    const valueLamp= document.querySelector(".myrange-lamp").value
    const valuePeople= document.querySelector(".myrange-people").value

    const classSauna = document.querySelector('.classSauna').value
    const material = document.querySelector('.tree').value

    storage = {
        smallSize: [7200,6300,5200,3310],
        middleSize:[7050, 6070, 5050, 3120],
        bigSize:[5840, 5840, 4900, 2930]
    }

    if(square <= 5 || square >= 20) return alert('Введите другие размеры')
    let arr = square > 5 && square < 8 ? storage.smallSize : square > 9 && square < 12 ? storage.middleSize : square > 13 && square < 20 ? storage.bigSize : alert('Введите другие размеры') 

    switch (classSauna) {
        case "Lux":
            result = arr[0] * square
            break;
        case "Premium":
            result = arr[1] * square
            break;
        case "Standart":
            result = arr[2] * square
            break;
        case "Econom":
            result = arr[3] * square
            break;
        default:
            alert( 'Ведите правильное значение' );
    }
    
    switch (material) {
        case "Lipa":
            result = result * 2.5
            break;
        case "Olha":
            result = result * 3
            break;
        case "Kedr":
            result = result* 4.2
            break;
        default:
            alert( 'Ведите правильное значение' );
    }
    
    if(valueLamp > 5) result = result + 1500
    if(valuePeople > 3) result = result + 2000
    
    const template = `<div class=" fixed-top alert alert-success alert-dismissible fade show text-center" role="alert"> Стоимость вашей  сауны составит от <strong>${result} </strong>рублей. Чтобы рассчитайть точную стоимость с Вами свяжется наш специалист, в течение 3 минут.</br> Ожидайте звонка с 9:00 до 21:00.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`
    form.insertAdjacentHTML('beforebegin', template)
}

document.querySelector(".myrange-people").addEventListener("change", function() {
    inputPeople.value = this.value;
});

document.querySelector(".myrange-lamp").addEventListener("change", function() {
    inputLamp.value = this.value;
});

form.addEventListener('submit', calcHandler)
