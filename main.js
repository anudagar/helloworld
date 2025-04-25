

    //How to declare the arrays ? the id to be refer for innerHTML is declaration_of_arrays
    var fruits = ["Apple", "Orange", "Mango", "Kiwi","dragon fruit","strawberry"];
    console.log(fruits);
    document.getElementById("declaration_of_arrays").innerHTML = fruits;

    //How to fetch the first element of the array ? the id to be refer for innerHTML is access_first_element
    var first_fruit = fruits[0];
    console.log(first_fruit);
    document.getElementById("access_first_element").innerHTML = first_fruit;

    //How to fetch the second element of the array ? the id to be refer for innerHTML is access_second_element
    var second_fruit = fruits[1];
    console.log(second_fruit);
    document.getElementById("access_second_element").innerHTML = second_fruit;

    //How to fetch the third element of the array ? the id to be refer for innerHTML is access_third_element
    var third_fruit = fruits[2];
    console.log(third_fruit);
    document.getElementById("access_third_element").innerHTML = third_fruit;

    //How to get the length of the array ? the id to be refer for innerHTML is display_length_of_array
    var length_of_the_array = fruits.length;
    console.log(length_of_the_array);
    document.getElementById("display_length_of_array").innerHTML = length_of_the_array;

    //How to loop the array ? the id to be refer for innerHTML is loop_the_array
    var array_value = "";
    for (i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
        array_value = array_value + fruits[i] + "<br>";
    }
    document.getElementById("loop_the_array").innerHTML = array_value;

    //adding element at the end of the array using push method
    //How to add element at the end of the array ? the id to be refer for innerHTML is add_element_at_the_end_of_array
    fruits.push("Lemon");
    console.log(fruits);
    document.getElementById("add_element_at_the_end_of_array").innerHTML = fruits;

    //How to more elements at the end of the array ? the id to be refer for innerHTML is add_more_element_at_the_end_of_array
    fruits.push("cherry");
    console.log(fruits);
    document.getElementById("add_more_element_at_the_end_of_array").innerHTML = fruits;

    //How to declare array with alphabets ? the id to be refer for innerHTML is display_alphabets_array
    var alphabets = ["l" ,"a" , "e" , "j" , "b" , "g" , "f" , "h" , "c" , "d" , "i" , "k"];
    console.log(alphabets);
    document.getElementById("display_alphabets_array").innerHTML = alphabets;

    //How to sort array with alphabets ? the id to be refer for innerHTML is display_sorted_alphabets_array
    alphabets.sort();
    console.log(alphabets);
    document.getElementById("display_sorted_alphabets_array").innerHTML = alphabets;

    //How to reverse the array ? the id to be refer for innerHTML is display_reverse_array
    alphabets.reverse();
    console.log(alphabets);
    document.getElementById("display_reverse_array").innerHTML = alphabets;

    //How to declare array with numbers ? the id to be refer for innerHTML is display_number_array
    var numbers = ["45", "4", "9", "16", "25"];
    console.log(numbers);
    document.getElementById("display_number_array").innerHTML = numbers;

    //How to find the maximum number from the array with numbers ? the id to be refer for innerHTML is display_maximum_number
    var maximum_number = Math.max.apply(Math, numbers);
    console.log(maximum_number);
    document.getElementById("display_maximum_number").innerHTML = maximum_number;

    //How to find the minimum number from the array with numbers ? the id to be refer for innerHTML is display_minimum_number
    var minimum_number = Math.min.apply(Math, numbers);
    console.log(minimum_number);
    document.getElementById("display_minimum_number").innerHTML = minimum_number;

    console.log("ADDITIONAL ACTIVITY");

    //adding element at the starting of the array using unshift method
    //How to add element at the start of the array ? the id to be refer for innerHTML is add_element_at_the_start_of_array
    fruits.unshift("watermelon");
    console.log(fruits);
    document.getElementById("add_element_at_the_start_of_array").innerHTML = fruits;

    //How to more elements at the start of the array ? the id to be refer for innerHTML is add_more_element_at_the_start_of_array
    fruits.unshift("strawberry");
    console.log(fruits);
    document.getElementById("add_more_element_at_the_start_of_array").innerHTML = fruits;

    //How to remove elements from the start of the array ? the id to be refer for innerHTML is remove_element_from_start_of_array
    fruits.shift();  
    console.log(fruits);
    document.getElementById("remove_element_from_start_of_array").innerHTML = fruits;

    //How to remove elements from the end of the array ? the id to be refer for innerHTML is remove_element_from_end_of_array
    fruits.pop();  
    console.log(fruits);
    document.getElementById("remove_element_from_end_of_array").innerHTML = fruits;

    //How declare array with first world country ? 
    var first_world_countries = ["USA" , "CANADA" , "JAPAN"];

    //How declare array with second world country ? 
    var second_world_countries = ["CHINA" , "RUSSIA" , "ROMANIA"];

    //How to merge two arrays ? the id to be refer for innerHTML is merge_two_arrays
    var all_countries = first_world_countries.concat(second_world_countries);
    console.log(all_countries);
    document.getElementById("merge_two_arrays").innerHTML = all_countries;
