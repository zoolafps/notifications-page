window.addEventListener('load', () => {/* CUANDO LA PAGINA CARGE */

const loading = document.getElementById('loading');
const clearBtn = document.getElementById('clearBtn');
const cardsBox = document.getElementById('cards');
const card = document.querySelector(".card");

let messageCounter; /* CONTADOR DE NOTIFICASIONES */
let unRead = []; /* ARRAY DE NOTIFICASIONES NO LEIDAS */
let ntfs = [/* DATOS DE USUARIOS */
{
    "nombre": "Mark Webber",
    "avatar": "./assets/images/avatar-mark-webber.webp",
    "action": "reacted to your recent post",
    "post":"My first tournament today!",
    "time": "1m ago",
    "status": false
},{
    "nombre": "Angela Gray",
    "avatar": "./assets/images/avatar-angela-gray.webp",
    "action": "followed you",
    "time": "5m ago",
    "status": false
},{
    "nombre": "Jacob Thompson",
    "avatar": "./assets/images/avatar-jacob-thompson.webp",
    "action": "has joined your group",
    "post":"Chess Club",
    "time": "1 day ago",
    "status": false 
},{
    "nombre": "Rizky Hasanuddin",
    "avatar": "./assets/images/avatar-rizky-hasanuddin.webp",
    "action": "sent you a private message",
    "message": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    "time": "5 days ago",
    "status": true
},{
    "nombre": "Kimberly Smith",
    "avatar": "./assets/images/avatar-kimberly-smith.webp",
    "action": "commented on your picture",
    "imgs": "./assets/images/image-chess.webp",
    "time": "1 week ago",
    "status": true
},{
    "nombre": "Nathan Peterson",
    "avatar": "./assets/images/avatar-nathan-peterson.webp",
    "action": "reacted to your recent post",
    "post": "5 end-game strategies to increase your win rate",
    "time": "2 weeks ago",
    "status": true
},{
    "nombre": "Anna Kim",
    "avatar": "./assets/images/avatar-anna-kim.webp",
    "action": "left the group",
    "post":"Chess Club",
    "time": "2 weeks ago",
    "status": true
}
];

function showContent() {/* MOSTRAR EL CONTENIDO DE ntfs */
    for (let i = 0; i < ntfs.length; i++) {
        cardsBox.innerHTML +=
        `<div class="card">
            <img class="avatar" src="${ntfs[i].avatar}" alt="${ntfs[i].nombre}">
            <div class="wrapper">
                <span class="inf">
                    <div>
                        <span class="user">
                            <a href="">${ntfs[i].nombre}</a>
                        </span>
                        <span class="action">
                            ${ntfs[i].action}
                        </span>
                        <span class="post">
                            <a href="">
                                ${ntfs[i].post}
                            </a>
                        </span>
                        <span class="status">
                        </span>
                    </div>
                    <span class="time">
                        ${ntfs[i].time}
                    </span>
                    <div class="message">
                        <a href="">
                            ${ntfs[i].message}
                        </a>
                    </div>
                </span>
                <div class="img_box">
                    
                </div>
            </div>
        </div>`;
    }
}

function checkNotifications() {/* REVISAR EL ESTADO DE LAS NOTIFICASIONES */
    for (let i = 0; i < ntfs.length; i++) {
        if (ntfs[i].imgs !== undefined) {
            document.getElementsByClassName('img_box')[i].innerHTML = `
                    <a href="">
                        <img class="post" src="${ntfs[i].imgs}" alt=""/>
                    </a>`;
        }
        if (ntfs[i].post == undefined) {
            document.getElementsByClassName('post')[i].style.display = "none";
        }
        if (ntfs[i].status == true) {
            document.getElementsByClassName('card')[i].classList.remove("un-read");
            document.getElementsByClassName('status')[i].style.display = "none";
        } else {
            document.getElementsByClassName('card')[i].classList.add("un-read");
        }
        if (ntfs[i].message == undefined) {
            document.getElementsByClassName('message')[i].style.display = "none";
        };
    }
}

function updateCounter() {/* ACTUALIZAR CONTADOR */
    messageCounter = 0;
    unRead;
    for (let i = 0; i < ntfs.length; i++) {
        if (ntfs[i].status == false) {
            unRead.push(ntfs[i].status);
            messageCounter = unRead.length;
        }
        document.getElementById('counter').innerHTML = `${messageCounter}`;
    }
}

function checkAll() {/* ACTUALIZAR DATA */
    for (let i = 0; i < ntfs.length; i++) {
        if (ntfs[i].status == false) {
            ntfs[i].status = true;
        }

        updateCounter();
    }
}

loading.classList.add("dn");
showContent();
updateCounter();
checkNotifications();

clearBtn.addEventListener('click', () => {/* MARCAR COMO LEIDO */
    cardsBox.innerHTML = '';
    checkAll();
    showContent();
    checkNotifications();
});
});