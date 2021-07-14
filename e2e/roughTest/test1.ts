class Test {
    public fibonacciSeries(num: number) {
        const fibbArray: number[] = [0,1];
        for( let i:number=1;i<=num;i++){
            fibbArray.push(fibbArray[i-1] + fibbArray[i]);
        }
        console.log(fibbArray);
    }
}

const testObj = new Test();
testObj.fibonacciSeries(10);