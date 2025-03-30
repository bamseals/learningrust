#![allow(dead_code, irrefutable_let_patterns)]
use std::collections::HashMap;

#[derive(Debug)]
enum SpreadsheetCell {
    Int(i32),
    Float(f32),
    Text(String),
}

fn main() {
    let mut v: Vec<i32> = Vec::new();
    v.push(1);
    v.push(2);
    v.push(3);
    // let two: Option<&i32> = v[1];
    if let two = v.get(1) {
        println!("v: {two:?}");
    }
    v.push(4);
    for i in &mut v {
        *i += 10;
        println!("{i}")
    }

    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Float(2.3),
        SpreadsheetCell::Text(String::from("Hello")),
    ];
    println!("{row:?}");


    let mut s: String = String::from("Hel");
    s.push_str("lo");
    println!("{s}");

    let mut s1 = String::from("foo");
    let s2 = "bar";
    s1.push_str(s2);
    println!("s2 is {s2}");

    let mut scores: HashMap<String, i32> = HashMap::new();
    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 20);
    scores.entry(String::from("Blue")).or_insert(50);
    let blue = &scores.entry(String::from("Blue"));
    println!("{blue:?}");

    for (key, value) in scores {
        println!("{key} {value}");
    }
}
