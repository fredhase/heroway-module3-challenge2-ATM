const boxInput = document.getElementById('input-no');
const boxWithdraw = document.getElementById('withdraw');
const btnClean = document.getElementById('action-clean');
const btnConfirm = document.getElementById('action-confirm');
const btnNo1 = document.getElementById('no1');
const btnNo2 = document.getElementById('no2');
const btnNo3 = document.getElementById('no3');
const btnNo4 = document.getElementById('no4');
const btnNo5 = document.getElementById('no5');
const btnNo6 = document.getElementById('no6');
const btnNo7 = document.getElementById('no7');
const btnNo8 = document.getElementById('no8');
const btnNo9 = document.getElementById('no9');
const btnNo0 = document.getElementById('no0');

btnNo1.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '1';
  } else {
    boxInput.value = boxInput.value + '1';
  }
});

btnNo2.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '2';
  } else {
    boxInput.value = boxInput.value + '2';
  }
});

btnNo3.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '3';
  } else {
    boxInput.value = boxInput.value + '3';
  }
});

btnNo4.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '4';
  } else {
    boxInput.value = boxInput.value + '4';
  }
});

btnNo5.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '5';
  } else {
    boxInput.value = boxInput.value + '5';
  }
});

btnNo6.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '6';
  } else {
    boxInput.value = boxInput.value + '6';
  }
});

btnNo7.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '7';
  } else {
    boxInput.value = boxInput.value + '7';
  }  
});

btnNo8.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '8';
  } else {
    boxInput.value = boxInput.value + '8';
  }
});

btnNo9.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '9';
  } else {
    boxInput.value = boxInput.value + '9';
  }
});

btnNo0.addEventListener('click', () => {
  if (boxInput.value == 0) {
    boxInput.value = '0';
  } else {
    boxInput.value = boxInput.value + '0';
  }
});

btnClean.addEventListener('click', () => {
  boxInput.value = '0';
  boxWithdraw.innerText = "";
});

btnConfirm.addEventListener('click', () => {
  let result1 = Number(boxInput.value);
  boxWithdraw.innerText = calculate(result1);
});

function calculate(result1) {
  if(result1 % 10 > 0) {
    return "#Erro: Notas indisponíveis";
  }
  else {
    if(result1 == 0){
      return "#Erro: Digite um valor válido";
    }
    else {
      let bills100, bills50, bills20, bills10;
      bills100 = Math.floor(result1 / 100);
      bills50 = Math.floor((result1 % 100) / 50);
      bills20 = Math.floor(((result1 % 100) % 50) / 20);
      bills10 = Math.floor((((result1 % 100) % 50) % 20) / 10);
      return (printBill100(bills100) + printBill50(bills50) + printBill20(bills20) + printBill10(bills10));
    }
  }
}

function printBill100 (bills100) {
    let bills100print = "";
    for(var i = 0; i < bills100; i++){
        bills100print = bills100print + "$100 ";
    }
    return bills100print;
}

function printBill50 (bills50) {
    let bills50print = "";
    for(var i = 0; i < bills50; i++){
        bills50print = bills50print + "$50 ";
    }
    return bills50print;
}

function printBill20 (bills20) {
    let bills20print = "";
    for(var i = 0; i < bills20; i++){
        bills20print = bills20print + "$20 ";
    }
    return bills20print;
}

function printBill10 (bills10) {
    let bills10print = "";
    for(var i = 0; i < bills10; i++){
        bills10print = bills10print + "$10 ";
    }
    return bills10print;
}