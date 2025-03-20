fn main() {
    let five = five();
    // print_int(five)
    // if_statement(five)
    loop_label();
}

fn print_int(var: i32) {
    println!("{var}");
}

fn statement_example() {
    let x = 3;
    x + 1; //semicolon ends without returning anything
}

fn expression_example() -> i32 {
    let x = 3;
    x + 1 //no semicolon is shorthand for "return this"
}

fn five() -> i32 {
    return 5;
}

fn plus_one(x: i32) -> i32 {
    x + 1
}

//Control Flow
fn if_statement(var: i32) {
    if var < 5 {
        println!("condition true")
    } else {
        println!("condition false")
    }
}

fn divisible() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
 
fn if_let() {
    let condition = true;
    let number = if condition { 1 } else { 2 };
    println!("{number}");
}

fn counter_loop() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter >= 10 {
            break counter * 2;
        }
    };

    println!("The result is {result}");
}


fn loop_label() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}

fn while_loop() {
    let mut number = 3;
    while number > 0 {
        println!("{number}");
        number -= 1;
    }
}

fn array_loop() {
    let array = [1,2,3,4,5];
    // let mut index = 0;

    // while index < array.len() {
    //     println!("the value is: {}", a[index]);
    //     index += 1;
    // }
    for element in array {
        println!("the value is: {element}");
    }
    for number in (1..4).rev() {
        println!("{number}!");
    }
    println!("LIFTOFF!!!");
}