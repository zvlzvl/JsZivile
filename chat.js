const inputText = document.querySelector('input');
const chatWindow = document.querySelector('.register-form');
const btnSend = document.querySelector('.icon-send');

btnSend.onclick = () => {
    if (inputText.value !== '') {
        let text = inputText.value;
        let now = new Date();
        let dateTime = now.toISOString().replace('T', ' ').split('.')[0];
        chatWindow.innerHTML += `
         <div>
            <div class="flex d-column a-start">
                <div class="user">
                    ${text}
                </div>
                <div class="user_time">${dateTime}</div>
            </div>
        </div>
        `
        inputText.value = '';
        scrollToBottom();
        backMessage();
    }
}

function backMessage() {
    setTimeout(() => {
        let now = new Date();
        let dateTime = now.toISOString().replace('T', ' ').split('.')[0];
        chatWindow.innerHTML += `
        <div>
            <div class="flex d-column a-end">
                <div class="answer">
                    ..mmm can't talk now?
                </div>
                <div class="answer_time">${dateTime}</div>
            </div>
        </div>
        `
    }, 2000)
    scrollToBottom();
}


function scrollToBottom() {
    chatWindow.scrollTop = chatWindow.scrollHeight;
}