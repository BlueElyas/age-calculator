const dayDate = document.getElementById('day-date')
const monthDate = document.getElementById('month-date')
const yearDate = document.getElementById('year-date')
const formBtn = document.getElementById('form-btn')
// const form = document.getElementById('form')
const errorLabel1 = document.getElementById('error-no-input1')
const errorLabel2 = document.getElementById('error-no-input2')
const errorLabel3 = document.getElementById('error-no-input3')
const labelDay = document.getElementById('label-day')
const labelMonth = document.getElementById('label-month')
const labelYear = document.getElementById('label-year')

formBtn.addEventListener('click', e => {
    e.preventDefault()
    getCurrentAge()
    
})

function getCurrentAge() {
    const userDate = dayDate.value
    const userMonth = parseInt(monthDate.value)
    const userYear = yearDate.value
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    
    // Checking the month and making sure the number of days per month is equal to the month
    let dateRange
    if (userMonth === 1 || userMonth === 3 || userMonth === 5 || userMonth === 7 || userMonth === 8 || userMonth === 10 || userMonth === 12) {
        dateRange = 31;
    } else if (userMonth === 4 || userMonth === 6 || userMonth === 9 || userMonth === 11) {
        dateRange = 30;
    } else {
        dateRange = 28;
    }

    // Error handling if there is missing strings or if input is out of range
    if (userDate === '' || userMonth === '' || userYear === '') {
        errorLabel1.style.display = 'block'
        errorLabel2.style.display = 'block'
        errorLabel3.style.display = 'block'
        errorHandling()
        return Error('Error')
    } else if (userDate < 1 || userDate > dateRange) {
        errorLabel1.style.display = 'block'
        errorLabel1.textContent = 'Must be a valid day'
        errorHandling()
        return Error('Error')
    }else if(userMonth < 1 || userMonth > 12) {
        errorLabel2.style.display = 'block'
        errorLabel2.textContent = 'Must be a valid month'
        errorHandling()
        return Error('Error')
    }else if (userYear > currentYear) {
        errorLabel3.style.display = 'block'
        errorLabel3.textContent = 'Must be a valid year'
        return Error('Error')
    }

    removeErrors()
    
    
// Getting newAge variable from current date - inputted date
    const userBirthdate = new Date(userYear, userMonth - 1, userDate)


// Calculating age using newage variable
    let years = currentDate.getFullYear()  - userBirthdate.getFullYear()
    let month = currentDate.getMonth()  - userBirthdate.getMonth()
    let utcDay = currentDate.getDate() - userBirthdate.getDate()

    if (utcDay < 0) {
        month--;
        utcDay += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (month < 0) {
        years--;
        month += 12;
    }
    

    const ageDayOutput = document.getElementById('age-day-output')
    const ageMonthOutput = document.getElementById('age-month-output')
    const ageYearOutput = document.getElementById('age-year-output')
    ageDayOutput.textContent = utcDay 
    ageMonthOutput.textContent = month
    ageYearOutput.textContent = years

}


function errorHandling() {
    dayDate.classList.add('error')
    monthDate.classList.add('error')
    yearDate.classList.add('error')
    labelDay.classList.add('error-color')
    labelMonth.classList.add('error-color')
    labelYear.classList.add('error-color')
}

function removeErrors() {
    dayDate.classList.remove('error')
    monthDate.classList.remove('error')
    yearDate.classList.remove('error')
    labelDay.classList.remove('error-color')
    labelMonth.classList.remove('error-color')
    labelYear.classList.remove('error-color')
    errorLabel1.style.display = 'none'
    errorLabel2.style.display = 'none'
    errorLabel3.style.display = 'none'
}
