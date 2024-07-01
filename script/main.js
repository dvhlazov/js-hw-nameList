document.addEventListener('DOMContentLoaded', ()=> {
  
    const btnSubmit = document.querySelector('#btn_submit');
    const btnClear = document.querySelector('#btn_clear');
    let nameList = document.querySelector('.name_list');
    let inputName = document.querySelector('#input_name');
    let errNote = document.querySelector('.err');

        btnSubmit.addEventListener('click', ()=> {
            let inputNameVal = inputName.value;
            let ukrValidation = /^[А-ЩЬЮЯЄІЇҐ][а-щьюяєіїґ']*$/;
        if(!ukrValidation.test(inputNameVal)) {
            errNote.innerHTML = 'Помилка: введіть ім\'я українською, з великої літери';
        } else {
            errNote.innerHTML = '';
            nameList.innerHTML += `<p class="input_name_item">${inputNameVal}</p>`;
            inputName.value = '';
        }
        });

        btnClear.addEventListener('click', ()=> {
            nameList.innerHTML = '';
        });
});