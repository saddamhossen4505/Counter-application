

/**
 *     A counter applications:
 *     ======================= 
 */

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const output = document.getElementById('output');
const warning_msg = document.getElementById('warning_msg');
const click_audio = document.getElementById('click_audio');
const reset_audio = document.getElementById('reset_audio');

let counter = 0;

btn1.addEventListener('click', () => {
    counter += 1;
    if( counter <= 10 ){
        click_audio.play();
        output.innerHTML = counter;
        warning_msg.innerHTML = '';
    }else{
        warning_audio.play();
        counter = 10;
        warning_msg.innerHTML = ` Vai apni ar upore jate parben na. please Stop counting. `;
        warning_msg.style.color = 'red'
    };
});

btn2.addEventListener('click', () => {
    counter -= 1;
    if( counter >= 0 ){
        click_audio.play();
        output.innerHTML = counter;
        warning_msg.innerHTML = '';
    }else{
        warning_audio.play();
        counter = 0;
        warning_msg.innerHTML = ` Vai apni ar niche namte parben na. please Stop.`;
        warning_msg.style.color = 'red';
    }
});

btn3.addEventListener('click', () => {
    reset_audio.play();
    counter = 0;
    output.innerHTML = counter;
    warning_msg.innerHTML = '';
});





/**
 *  Stop-Watch project:
 * =====================
 */

const bTn1 = document.getElementById('bTn1');
const bTn2 = document.getElementById('bTn2');
const bTn3 = document.getElementById('bTn3');
const output2 = document.getElementById('output2');
const audio1 = document.getElementById('click_audio');
const Warn_audio = document.getElementById('warning_audio');
const reset_audio1 = document.getElementById('reset_audio');



let count = 0;
bTn1.onclick = () => {

    stopCount = setInterval(() => {
        audio1.play();
        count++;
        output2.innerHTML = count;
    },1000);

};


bTn2.onclick = () => {
    Warn_audio.play();
    clearInterval(stopCount);
};

bTn3.addEventListener('click', () => {
    reset_audio1.play();
    clearInterval(stopCount);
    count = 0;
    output2.innerHTML = 0;
});



/**
 *  Alarm Clock Project:
 * ====================
 */
const bTn01 = document.getElementById('bTn01');
const bTn02 = document.getElementById('bTn02');
const output3 = document.getElementById('output3');

let counting = 0;

bTn01.onclick = () => {
    stopCounting = setInterval(() => {
        click_audio.play();
        counting++;
        output3.innerHTML = counting;
        if( counting == 30 ){
            
            clearInterval(stopCounting);
            alarm_audio.play();
            counting = 0;
        }
    },1000);
};


bTn02.addEventListener('click', () => {
    clearInterval(stopCounting);
    reset_audio.play();
    counting = 0;
    output3.innerHTML = 0;

});





// Currency-Converter





























