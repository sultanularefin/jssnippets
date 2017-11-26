// JS Summation

// put here for code reusability but as you said there should be one function that's why
//commented this function
function parametersanitation(value) {
    //console.log(!value);
    //console.log(value == undefined);
    //console.log(value == "");
    //console.log(value.length == 0);
    //console.log(isNaN(value));


    if (!value || value == undefined || value == "" || value.length == 0 || isNaN(value))
        return null;

}
function SUM(ParamOne, ParamTwo) {
    x = Number(ParamOne);

    y = Number(ParamTwo);


    console.log(ParamOne);
    console.log(ParamTwo);

    //console.log(!parametersanitation(x));

    if (parametersanitation(x)=== null){
        console.log("argument one not correct please input numbers only");

        return;
    }

    if (parametersanitation(y) === null) {
        console.log("argument two not correct please input numbers only");

        return;
    }

    

    var result = x + y;
    return result;
}

console.log(SUM("32", 12));