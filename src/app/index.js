import { SessionView } from './views/index.js';

import anime from 'animejs/lib/anime.es.js';
import { EncryptStorage } from 'encrypt-storage/dist/index.js';

import { generateRandomID } from './utils/generateRandomID.js';

const test = () => {
    // ANIME JS TEST
    // ...

    // VIEWS TEST
    SessionView();

    // ENCRYPT STORAGE TEST
    const encryptStorage = new EncryptStorage('dash87ASDk');

    const storageQuestions = [
        {
            name: "FirstQuestion",
            answers: [
                {
                    id: 0,
                    name: "FirstAnswer"
                },
                {
                    id: 1,
                    name: "SecondAnswer"
                },
                {
                    id: 2,
                    name: "ThirdAnswer"
                }
            ],
            rightAnswerID: 1
        }
    ]

    encryptStorage.setItem('questions', storageQuestions);

    const questions = encryptStorage.getItem('questions');
    console.log(questions);
}

const render = () => {
    test();
};


document.addEventListener("DOMContentLoaded", () => {
    render();
})