const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


form.addEventListener('submit', submitWork);


function submitWork(e) {
    e.preventDefault();
    const getName = nameInput.value;
    const getEmail = emailInput.value;
    if(getName === '' || getEmail === ''){
        msg.classList.add('error');
        msg.textContent = "The input field required";
        setTimeout(() => {
            msg.remove();
        }, 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${getName} ${getEmail}`))
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}