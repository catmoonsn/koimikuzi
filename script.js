const fortunes = [

    "今日は恋愛運MAX♡",

    "気になる人と話せるかも",

    "焦らずゆっくりが吉",

    "自然体でいると◎",

    "今日は空回り注意…！",

    "好きな人と目が合う予感",

    "意外な人から話しかけられるかも",

    "今日は積極的に行こう",

    "放課後に幸運あり",

    "その恋、案外うまくいくかも"

];

const image = document.getElementById("omikujiImage");

const textArea = document.getElementById("textArea");

const message = document.getElementById("message");

image.addEventListener("click", () => {

    // 一回制限
    if (sessionStorage.getItem("drawn")) {
        return;
    }

    // ランダム抽選
    const random = Math.floor(Math.random() * fortunes.length);

    const selected = fortunes[random];

    // 開いた画像へ変更
    image.src = "open.png";

    // サイズ変更
    image.classList.add("opened");

    // 内容表示
    message.textContent = selected;

    // 表示
    textArea.classList.remove("hidden");

    // 一回制限保存
    sessionStorage.setItem("drawn", "yes");

});