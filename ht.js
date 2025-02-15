let ptext = "Initializing Hacking",
    pt,
    pclas = ".a";

function dots(clas, text, to) {
    if (ptext != text) {
        document.body.querySelector(pclas).innerText = ptext;
        clearInterval(pt);
    }
    return (prom = new Promise((resolve, reject) => {
        document.body.querySelector(clas).innerText = text;
        let t = setInterval(() => {
            if (document.body.querySelector(clas).innerHTML.endsWith("...")) {
                document.body.querySelector(clas).innerHTML = document.body
                    .querySelector(clas)
                    .innerHTML.slice(
                        0,
                        document.body.querySelector(clas).innerHTML.length - 3
                    );
            } else {
                document.body.querySelector(clas).innerHTML =
                    document.body.querySelector(clas).innerHTML + ".";
            }
        }, 100);
        pt = t;
        ptext = text;
        pclas = clas;
        resolve();
    }));
}

async function main2(clas, text, to) {
    await dots(clas, text, to);
}

async function intialize(clas, text) {
    return (prom = new Promise((resolve, reject) => {
        let to = 1 + 6 * Math.random();
        setTimeout(() => {
            main2(clas, text, to);
            console.log(to * 1000);
            resolve();
        }, to * 1000);
    }));
}

(async function main() {
    await intialize(".a", "Initializing Hacking");
    await intialize(".b", "Initialized Hacking Reading your data");
    await intialize(".c", "Reading your files");
    await intialize(".d", "Password files dectected");
    await intialize(".e", "Sending all Passwords and files to server");
    await intialize(".f", "Cleaning up");
})();
