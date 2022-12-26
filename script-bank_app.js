'use strict'

const account1 = {
    userName : 'Галушко Андрей Иванович',
    transactions : [100, -50, 345, 300, 500, -325, 800, -415],
    transactionsDates : [
        '2022-02-12T11:48:50.942Z',
        '2022-02-15T13:55:40.942Z',
        '2022-03-10T10:40:50.942Z',
        '2022-03-22T11:35:00.942Z',
        '2022-04-15T15:30:20.942Z',
        '2022-05-17T12:22:10.942Z',
        '2022-06-09T16:00:50.942Z',
        '2022-10-12T13:10:40.942Z',
    ],
    pin:1111


}

const account2 = {
    userName : 'Забур Ольга Леонидовна',
    transactions : [150, 50, 245, -300, 700, -125, 1200, -45],
    transactionsDates : [
        '2022-01-12T11:48:50.942Z',
        '2022-02-16T12:45:40.942Z',
        '2022-03-11T10:40:50.942Z',
        '2022-03-26T11:35:00.942Z',
        '2022-04-13T15:30:20.942Z',
        '2022-05-24T12:22:10.942Z',
        '2022-06-9T16:00:50.942Z',
        '2022-10-11T13:10:40.942Z',
    ],
    pin:2222


}

const account3 = {
    userName : 'Петрожицкий Владимир Андреевич',
    transactions : [700, -250, 390, 1300, 900, -825, 400, -915],
    transactionsDates : [
        '2022-01-10T11:48:50.942Z',
        '2022-02-14T13:55:40.942Z',
        '2022-03-17T10:40:50.942Z',
        '2022-03-25T11:35:00.942Z',
        '2022-04-12T15:30:20.942Z',
        '2022-05-19T12:22:10.942Z',
        '2022-06-29T16:00:50.942Z',
        '2022-10-22T13:10:40.942Z',
    ],
    pin:3333


}

const account4 = {
    userName : 'Самохвалова Наталья Николаевна',
    transactions : [1000, -250, 945, 1300, 500, -125, 1200, -1550],
    transactionsDates : [
        '2022-01-22T11:48:50.942Z',
        '2022-02-12T13:55:40.942Z',
        '2022-03-14T10:40:50.942Z',
        '2022-03-26T11:35:00.942Z',
        '2022-04-10T15:30:20.942Z',
        '2022-05-18T12:22:10.942Z',
        '2022-06-24T16:00:50.942Z',
        '2022-10-15T13:10:40.942Z',
    ],
    pin:4444


}

const account5 = {
    userName : 'Орлова Ольга Геннадьевна',
    transactions : [2100, -350, 1345, 1300, 1500, -2325, 1800, -1415],
    transactionsDates : [
        '2022-01-05T11:48:50.942Z',
        '2022-02-14T13:55:40.942Z',
        '2022-03-11T10:40:50.942Z',
        '2022-03-12T11:35:00.942Z',
        '2022-04-18T15:30:20.942Z',
        '2022-05-27T12:22:10.942Z',
        '2022-06-17T16:00:50.942Z',
        '2022-10-20T13:10:40.942Z',
    ],
    pin:5555


}

const account6 = {
    userName : 'Барсуков Александр Иванович',
    transactions : [200, -70, 370, 600, 500, -225, 1300, -655],
    transactionsDates : [
        '2022-01-09T11:48:50.942Z',
        '2022-02-22T13:55:40.942Z',
        '2022-03-24T10:40:50.942Z',
        '2022-03-22T11:35:00.942Z',
        '2022-04-17T15:30:20.942Z',
        '2022-05-07T12:22:10.942Z',
        '2022-06-28T16:00:50.942Z',
        '2022-10-14T13:10:40.942Z',
    ],
    pin:6666


}

const accounts = [ account1, account2, account3, account4, account5, account6 ]

const form = document.forms.form

let currentAccaunt;

const entranceBtn = document.querySelector('.entrance_btn')
const firstPage = document.querySelector('.first_page')
const secondPage = document.querySelector('.second_page')
const bankPage = document.querySelector('.bank_page')

entranceBtn.addEventListener('click', (e) =>{

firstPage.style.display = 'none'
secondPage.style.display = 'block'
})



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const surname = form.elements.surname.value;
    const name = form.elements.name.value;
    const patronymic = form.elements.patronymic.value;
    const nameCheck = `${surname} ${name} ${patronymic}`

    const password = +form.elements.pass.value;
    currentAccaunt = accounts.find((item) => item.userName === nameCheck)
    if( currentAccaunt){
    if( currentAccaunt.pin === password){
    form.elements.surname.value =''
    form.elements.name.value ='' 
    form.elements.patronymic.value =''
    form.elements.pass.value =''
    
    
    secondPage.style.display = 'none'
    bankPage.style.display = 'block'

    document.querySelector('.head').innerHTML = `Добро пожаловать, ${name} ${patronymic}!`
    document.querySelector('.info__date').innerHTML = `на:${''} ${new Date().toLocaleString()}`
    displayTransactions()
    displayTotal()
    }else{
        document.querySelector('.error_password').style.display = 'block'
        form.elements.pass.value = ''
    }
    }
})


const errorBtn = document.querySelector('.error_btn')

errorBtn.addEventListener('click', (e) =>{
document.querySelector('.error_password').style.display = 'none'
    
    
    })

    const transactionsContainer = document.querySelector('.current_transactions')

    function displayTransactions(){
        currentAccaunt.transactions.forEach((item, ind) =>{
            const date = new Date (currentAccaunt.transactionsDates[ind]).toLocaleDateString()
            const type1 = item > 0 ? 'block' : 'none'
            const type2 = item < 0 ? 'block' : 'none'
            transactionsContainer.innerHTML += `
            <div class="transactions__row">
            <div class="typeDate">
            <div class="transactions__date">${date}</div>
            <div class="transactions__type--deposit" style = "display: ${type1}"> Поступления</div>
            <div class="transactions__type--withdrawal" style = "display: ${type2}">Расход</div>
            <div class="transactions__value">${item} руб</div>
            </div>
            </div>

            `  
        })
    }



    function displayTotal(){
        const balans = document.querySelector('.total__balans-number')
        const total = currentAccaunt.transactions.reduce(( a, b ) => a + b );
        currentAccaunt.total = total
        balans.innerHTML = `${ total } руб`

        const deposit = currentAccaunt.transactions.filter( i => i > 0).reduce(( a, b ) => a + b )
        let withdrawal = currentAccaunt.transactions.filter( i => i < 0)
        if(withdrawal.length > 0){
            withdrawal = withdrawal.reduce(( a, b ) => a + b )  
        }

        document.querySelector('.total__value-in-number').innerHTML = `${deposit} руб`
        document.querySelector('.total__value-out-number').innerHTML =`${Array.isArray(withdrawal) ? '0 руб' : `${withdrawal} руб`}` 
    }

    // перевод денег

    function makeTransactions(e){
        e.preventDefault()
        const recipient = document.querySelector('#payeename').value;
        const sum = document.querySelector('#payeesumm').value;
        
        if( sum <= 0){
            document.querySelector('#insufficient_funds').style.display = 'block' 
        }else{
          if(accounts.find((item) => item.userName === recipient) && recipient !== currentAccaunt.userName
        && sum <= currentAccaunt.total){
        currentAccaunt.transactions.push(-sum);
        currentAccaunt.transactionsDates.push(new Date().toISOString());
        transactionsContainer.innerHTML= ''
        displayTransactions()
        displayTotal()
        document.querySelector('#payeename').value = ''
        document.querySelector('#payeesumm').value = ''
        }else{
            document.querySelector('#recipient_notfound').style.display = 'block'
            document.querySelector('#payeesumm').value = ''
        }  
        }
    }

    document.querySelector('#payee_btn').addEventListener('click',(e) => makeTransactions(e))

    

    const notfoundBtn = document.querySelector('#recipient_notfound_btn')

    notfoundBtn.addEventListener('click', (e) =>{
    document.querySelector('#recipient_notfound').style.display = 'none'
    document.querySelector('#payeename').value = ''
    document.querySelector('#payeesumm').value = ''
    })

    const insufficientFundsBtn = document.querySelector('#insufficient_funds_btn')

    insufficientFundsBtn.addEventListener('click', (e) =>{
    document.querySelector('#insufficient_funds').style.display = 'none'
    
    })

    // запрос займа

    document.querySelector('#credit_btn').addEventListener('click',(e) =>{
        e.preventDefault()
        let sum = +document.querySelector('#creditsumm').value;
        if( currentAccaunt.transactions.some(i => i >= sum * 0.1) ){
        currentAccaunt.transactions.push(sum);
        currentAccaunt.transactionsDates.push(new Date().toISOString());
        transactionsContainer.innerHTML= ''
        displayTransactions()
        displayTotal()
        document.querySelector('#creditsumm').value = ''
        }else{
            document.querySelector('#refused_loan').style.display = 'block' 
            document.querySelector('#creditsumm').value = ''
        }


    })

    const refusedLoanBtn = document.querySelector('#refused_loan_btn')

    refusedLoanBtn.addEventListener('click', (e) =>{
    document.querySelector('#refused_loan').style.display = 'none'
    })

    // закрытие счета

    document.querySelector('#close_btn').addEventListener('click',(e) =>{
        e.preventDefault();
        const name = document.querySelector('#clientename').value
        const password = +document.querySelector('#inputpassword').value

         
        
        if(name === currentAccaunt.userName && password === currentAccaunt.pin){
        const ind = accounts.findIndex(i => i.userName === name );
        accounts.splice(ind, 1);
        

        secondPage.style.display = 'block'
        bankPage.style.display = 'none'
        }else{
            document.querySelector('#account_close').style.display = 'block' 
            document.querySelector('#clientename').value = '' 
            document.querySelector('#inputpassword').value = ''
        }


    })

    const accountCloseBtn = document.querySelector('#account_close_btn')

    accountCloseBtn.addEventListener('click', (e) =>{
    document.querySelector('#account_close').style.display = 'none'

    
    })








