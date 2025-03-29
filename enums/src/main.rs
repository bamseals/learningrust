#![allow(dead_code)]

enum States {
    Alabama,
    Alaska,
    // -- more states --
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(States),
}

fn main() {
    // let coin: Coin = Coin::Nickel;
    // println!("value of coin is {}", value_in_cents(coin));
    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(_state) => 25,
    }
}

fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(val) => Some(val + 1)
    }
}