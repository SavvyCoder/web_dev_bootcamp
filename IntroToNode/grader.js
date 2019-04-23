function average(testScores){
    
    var avg = 0;
    var dec = 0;
    
    for(var i =0; i < testScores.length; i++){
        
        avg += testScores[i];
    }
    
    avg = avg/testScores.length;
    
    dec = avg % 1;
    
    if(dec >= 0.5){
        avg = avg - dec + 1;
        return avg;
    }
    
    else{
        avg -= dec;
        return avg;
    }
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68