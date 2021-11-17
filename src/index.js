import React from 'react';
import ReactDOM from 'react-dom';
import Components from './components/all-components'

import './styles/app.css';

const element = document.getElementById('root');

ReactDOM.render(<Components></Components>, element);


// initial Scroll message

const message_scroll = document.getElementById('message-area')
message_scroll.scrollTop = message_scroll.scrollHeight;


// Opciones de navegador

const navegador = document.querySelectorAll('#nav-option')

var array = Array.prototype.slice.call(navegador);

const option_select = document.querySelector('.select')

// Contenedores

const chat_container = document.getElementById('chat-container')
const friends_container = document.getElementById('friends-container')
const profile_container = document.getElementById('profile-container')

array.forEach(element => {
    element.addEventListener('click', function(e){
        const new_option = e.target.text
        
        switch(new_option){
            case "Chat":{
                choose_Chat()
                break;
            }
            case "Amigos":{
                choose_Amigos()
                break;
            }
            case "Perfil":{
                choose_Perfil()
                break;
            }
        }
    })
});


function choose_Chat(){
    array[0].classList.add("select")
    array[1].classList.remove("select")
    array[2].classList.remove("select")

    chat_container.classList.add("show")
    chat_container.classList.remove("hidden")
    friends_container.classList.remove("show")
    friends_container.classList.add("hidden")
    profile_container.classList.remove("show")
    profile_container.classList.add("hidden")
}
function choose_Amigos(){
    array[0].classList.remove("select")
    array[1].classList.add("select")
    array[2].classList.remove("select")

    friends_container.classList.add("show")
    friends_container.classList.remove("hidden")
    chat_container.classList.remove("show")
    chat_container.classList.add("hidden")
    profile_container.classList.remove("show")
    profile_container.classList.add("hidden")
}
function choose_Perfil(){
    array[0].classList.remove("select")
    array[1].classList.remove("select")
    array[2].classList.add("select")

    profile_container.classList.add("show")
    profile_container.classList.remove("hidden")
    friends_container.classList.remove("show")
    friends_container.classList.add("hidden")
    chat_container.classList.remove("show")
    chat_container.classList.add("hidden")
}