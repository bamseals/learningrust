#![allow(dead_code)]  // Suppresses dead code warnings
#![warn(unused_variables)]  // Enables warnings for unused variables

enum testEnum {
    v123,
    rweasr,
}

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

#[allow(dead_code)]
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn width(&self) -> bool {
        self.width > 0
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
    fn square(size: u32) -> Self {
        Self {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let rect1 = Rectangle{
        width: 30,
        height: 50,
    };

    println!(
        "The area of the rectangle is {} square pixels, it has a width greater than zero: {}",
        rect1.area(),
        rect1.width(),
    );

    let mut rect2 = Rectangle {
        width: 20,
        height: 40,
    };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));

    rect2.height = 50;

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    
    //println!("rect1 is {rect1:#?}", );

    // dbg!(&rect1);
}

// fn area(rect: Rectangle) -> u32 {
//     rect.width * rect.height
// }