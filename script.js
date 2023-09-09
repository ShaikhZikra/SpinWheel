function shuffle(array){
    var currentIndex=array.length,
    randomIndex;

    while(0!==currentIndex){
        randomIndex=Math.floor(Math.random()*currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]]=[
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}



function spin(){
    const box=document.getElementById("box");
    const element=document.getElementById("mainbox");
    let SelectedItem = "";



    let prize1=shuffle([1600,1950,2320]);
    let prize2=shuffle([1570,1930,2290]);
    let prize3=shuffle([1900,2250,2610]);
    let prize4=shuffle([1850,2210,2570]);
    let prize5=shuffle([1810,2170,2530]);
    let prize6=shuffle([1770,2130,2490]);
    let prize7=shuffle([1750,2110,2470]);
    let prize8=shuffle([1690, 1700,2250]);
    let prize9=shuffle([2030,2390,2400]);
    let prize10=shuffle([1630,1990,2350]);



    let result = shuffle([
        prize1[0],
        prize2[0],
        prize3[0],
        prize4[0],
        prize5[0],
        prize6[0],
        prize7[0],
        prize8[0],
        prize9[0],
        prize10[0],
    ]);


    

    if(prize1.includes(result[0])) SelectedItem="Prize 1";
    if(prize2.includes(result[0])) SelectedItem="Prize 2";
    if(prize3.includes(result[0])) SelectedItem="Prize 3";
    if(prize4.includes(result[0])) SelectedItem="Prize 4";
    if(prize5.includes(result[0])) SelectedItem="Prize 5";
    if(prize6.includes(result[0])) SelectedItem="Prize 6";
    if(prize7.includes(result[0])) SelectedItem="Prize 7";
    if(prize8.includes(result[0])) SelectedItem="Prize 8";
    if(prize9.includes(result[0])) SelectedItem="Prize 9";
    if(prize10.includes(result[0])) SelectedItem="Prize 10";


    box.style.setProperty("transition", "all ease 5s");
    box.style.transform="rotate(" + result[0] + "deg)";
    element.classList.remove("animate");


    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        alert("You Won" + " " + SelectedItem);
    }, 5500);


    setTimeout(function(){
        box.style.setProperty("transition","initial");
        box.style.transform="rotate(90deg)";
    }, 6000);

}