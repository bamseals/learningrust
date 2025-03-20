fn main() {
    // Mutable variables
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");

    // Variable shadowing
    let x = 5;
    let x = x + 1;
    {
        // Variable scope
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }
    println!("The value of x is: {x}");

    // shadow variable chan change type, mutable can not
    let _spaces = "   ";
    let _spaces = _spaces.len();
    // let mut spaces = "   ";
    // spaces = spaces.len();    mutable variables can't change type

    //Basic Types
    //Integers
    let _i: u32 = 412;
    //Floats
    let _f: f32 = 12.342;
    //Booleans
    let _t: bool = true;
    //Char
    let _c: char = 'z';

    //Compound Types
    //Tuple
    let tup: (char, u32, bool) = ('z', 942, false);
    let (x,_y,_z) = tup;
    println!("first tuple value is {x}");
    let w = tup.2;
    println!("second tuple value {w}");
    //Array
    let _a1 = [1,2,3,4,5];
    let _a2: [i32; 4] = [9,8,7,6];
}
