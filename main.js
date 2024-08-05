//Discount Eligibility Program

checkEligibility(); {
    const age = document.getElementById('age').nodeValue;
    const isMember = document.getElementById('member').ariaChecked;
    const resultElement = document.getElementById('result');

    let result='';

    if(age >= 65) {
        result = 'Eligible for Senior discount';
    } else if (age >= 18 && isMember) {
        result = 'Eligible for Member discount';
    }else {
        result = 'Not Eligible for any discount';
    }

    resultElement.textContent = result;
};