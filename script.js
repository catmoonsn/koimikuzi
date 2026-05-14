const fortunes = [

    "今日は恋愛運MAX。積極的に頑張っていきましょう。おおｊどじゃおどぁｄじだｗじｗでぃｗでぃあｄうぃわどぃｈぢｈｗぢいいｊどぃじゃぢｊｗｊぢｊぢあｊｗぢじゃいｊｗっぢｊｄっうぃｊ",

    "今日は笑顔を、大切にしよう。"

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

    // 画像変更
    image.src = "open.png";

    // 開いた状態
    image.classList.add("opened");

    // 改行対応
    message.textContent = selected;

    // 表示
    textArea.classList.remove("hidden");

    // 一回制限保存
    sessionStorage.setItem("drawn", "yes");

});