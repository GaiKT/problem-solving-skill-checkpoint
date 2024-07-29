//Exercise 3: Roman to Integer

const romanToInt = function (s) {
    let romanCalibate = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let result = 0
    let pevNum = 0

    for(let i of s){
        if(romanCalibate[i] > pevNum) {
            result += romanCalibate[i] - 2 * pevNum           
        }else{
            result += romanCalibate[i]  
        }
        pevNum = romanCalibate[i]
    }
    return result
  };
  
  const result1 = romanToInt("III"); // 3
  console.log(result1)
  const result2 = romanToInt("LVIII"); // 58
  console.log(result2)
  const result3 = romanToInt("MCMXCIV"); //1994
  console.log(result3)