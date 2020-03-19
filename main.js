// Questions list
questions_arr = [
    ['Кто из Вас самый симпотичный?', 'Кто из Вас самый умный?', 'Кто из Вас самый смешной?'],
    ['Кто из Вас более сострадателен?', 'Кто из Вас более талантлив?', 'Кто из Вас более суетлив?'],
    ['Кто из Вас больше гурман?', 'Кто из Вас более обидчив?', 'Кто из Вас больше подвержен негативным эмоциям?'],
    ['Кто из Вас чаще уходит в себя?', 'Кто из Вас не одевается по моде?', 'Кто из Вас более ревнив?'],
    ['Кто из Вас больше думает друг о друге?', 'Кто из Вас больше патриот?', 'Кто из Вас больше любит зиму?'],
    ['Кто из Вас более экономный?', 'Кто из Вас больше любит читать?', 'Кто из Вас больше потребитель?'],
    ['Кто из Вас больше верит в волшебство?', 'С кем бы никогда не оставил/ла своего ребенка?', 'Кто из Вас первый засыпает?'],
    ['Кто из Вас больше любит поспать?', 'Кто из Вас больше любит сладкое?', 'Кто из Вас готовит, или чаще готовит?'],
    ['Кто из Вас больше тратит денег?', 'Кто из Вас чаще предлагает куда-то пойти?', 'Кто из Вас первым признался в своих чувствах?'],
    ['Кто из Вас дольше собирается куда-либо?', 'Кто из Вас первый бы попробовал незнакомое блюдо?', 'Кто из Вас любит поспорить?'],
    ['Кто из Вас больше скучает друг без друга?', 'Кто из Вас больше проводит времени за компьютером?', 'Кто из Вас самый смелый?'],
    ['Кто из Вас практичнее?', 'Кто из Вас первый засыпает?', 'Кто из Вас больше проводит времени в ванной комнате?']
]

// Shuffling the questions list
shuffle = arr => {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

questionsShuffled = shuffle(questions_arr);

// Creation of game area
next = () => {
    document.getElementById("game").style.display = "flex";
    document.getElementById("next_button").style.display = "inline-block";
    document.getElementById("welcome").remove();
    document.getElementById("popup").style.display = "inline-block";
}

// Random int func
getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

// Changing questions
let k = 0;
nextQuestion = () => {
    let questions = document.querySelectorAll('li');
    let i = 0;
    q_index = getRandomInt(questions_arr.length);
    if (k < questionsShuffled.length - 1) {
        k += 1;
    } else {
        alert('END!')
        return
    }
    questions.forEach(function(new_q) {
        new_q.innerHTML = questionsShuffled[k][i];
        i += 1
    })
}

createWelcome = () => {
    let welcome = document.createElement("span");
    welcome.id = "hello";
    welcome.innerHTML = "Welcome to...";
    document.getElementById("welcome").prepend(welcome);
};
createWelcome();

setTimeout(() => document.querySelectorAll("#game_name").forEach((el) => el.style.display = "inline-block", 5000));

// Hide "welcome"
setTimeout(() => document.getElementById("hello").style.display = "none", 5000);

// "Tap to continue"
setTimeout(() => document.getElementById("continue").style.display = "inline-block", 14000);

// Popup
myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}