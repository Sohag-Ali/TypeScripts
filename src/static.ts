class Counter {
   static count: number = 0;

    static increment() {
        Counter.count++;
    }

    static decrement() {
        Counter.count--;
    }
}

// const counter1 = new Counter();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();

console.log(Counter.count); 

// const counter2 = new Counter();
Counter.decrement();
console.log(Counter.count);