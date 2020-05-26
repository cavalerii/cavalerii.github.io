function selectRandom() {
    let random=Math.floor(Math.random()*5+1);
    let imageName="gr1_" + random + ".jpg";
    document.getElementById("pozaRandom").src=imageName;
}