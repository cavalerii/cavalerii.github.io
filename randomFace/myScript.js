function selectRandom() {
    let random=Math.floor(Math.random()*5+1);
    let imageName="gr1_" + random + ".jpg";
    document.getElementById("pozaRandom").src=imageName;
}
function selectRandom2() {
    let random=Math.floor(Math.random()*6+1);
    let imageName="gr2_" + random + ".jpg";
    document.getElementById("pozaRandom2").src=imageName;
}