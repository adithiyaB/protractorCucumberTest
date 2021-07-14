class PrimeNumbers {
    public isPrime(num: number) {
        if(num===0 || num===1) {
            return "Not a Prime"
        }
        for (let i: number=2;i<num;i++) {
            if(num%i === 0) {
                return "Not a Prime"
            }
        }
        return "Is Prime"
    }
}

const ob = new PrimeNumbers();
console.log(ob.isPrime(3));