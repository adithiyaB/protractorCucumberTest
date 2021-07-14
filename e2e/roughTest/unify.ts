class Vendor {
    // name: string;
  
    // constructor(name: string) {
    //   this.name = name;
    // }
  
   public async findSequentialNums() {
     let str= "45541159"
     let strArr= str.split("")
     let outputStr: string= "";
     
     for(let i=0;i<str.length;i++) {
        if(strArr[i]===strArr[i+1]) {
          if(outputStr === "") {
            outputStr = strArr[i]+"=2" 
          } else{
            outputStr = outputStr+","+strArr[i]+"=2" 
          }
          
          // console.log(`${strArr[i]} = 2`)
          i++;
        } else {
          if(outputStr === "") {
            outputStr = strArr[i]+"=1" 
          } else{
            outputStr = outputStr+","+strArr[i]+"=1" 
          }
        }
     }
     console.log(outputStr)
   }
  }
  
  const shop = new Vendor();
  shop.findSequentialNums()
  
  
  
  // Your last Java code is saved below:
  // // package whatever; // don't place package name!
  
  // //Program - 1 
  // //Given a array of unsorted numbers, check if all the numbers in the array are consecutive numbers.
  // //Input : {21,24,22,26,25}
  // // Output: missing number 23. Array is not consecutive
  
  // //or
  
  // // Program -2 
  // //Print sequentially repeated characters with count
  // //Input: 455411
  // //Output: 4=1, 5=2, 4=1, 1=2
  
  // import java.io.*;
  
  // class MyCode {
  // 	public static void main (String[] args) {
      
  // 		for()
  // 	}
  // }
  
  