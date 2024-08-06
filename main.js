//Discount Eligibility Program

function checkEligibility() {
    const ageInPut = document.getElementById('age');
    const isMember = document.getElementById('member');
    const resultElement = document.getElementById('result');
  
    const age = parseInt(ageInPut.value, 10);
    const MemberChecked = isMember.checked;
    
    let discountMessage; 

    if(age >= 65) {
        discountMessage = 'Eligible for Senior discount';
    } else if (age >= 18 && MemberChecked) {
        discountMessage = 'Eligible for Member discount';
    }else {
        discountMessage = 'Not Eligible for any discount';
    }

    resultElement.textContent = discountMessage;
};
