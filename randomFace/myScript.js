function selectRandom() {
    let random=Math.floor(Math.random()*5+1);
    let imageName="gr1_" + random + ".jpg";
    document.getElementById("pozaRandom").src=imageName;
}

function selectRandom2() {
    let random=Math.floor(Math.random()*7+1);
    let imageName="gr2_" + random + ".jpg";
    document.getElementById("pozaRandom2").src=imageName;
}

function selectRandomP() {
    let random=Math.floor(Math.random()*8+1);
    let imageName="grp_" + random + ".jpg";
    document.getElementById("pozaRandomP").src=imageName;
}
