validateForm = () => {


    let userName = document.querySelector('#userName');
    let password = document.querySelector('#password');
    let dummyUserName = 'christina8';
    let dummyPassword = 'happybirthday2u';

    if (userName.value === dummyUserName && password.value === dummyPassword) {
        alert('Successfully logged in')



    } else {

        alert('Invalid username or password please use alphanumeric characters only e.g a-z A-Z 0-9 ')

    }



}



showDetails = () => {


    document.querySelector('.details').classList.toggle('show');

}