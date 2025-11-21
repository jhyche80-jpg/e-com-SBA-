# README Template 
## Table of contents 
 1. Overview 
 2. Problem     
    1. Problem Breakdown/ Goal
    2. Questions and Answer
    3. Input?
    4. Output?
    5. Step by step Plan  
 3. What I did step by step
 4. What I did in Detail during the project 
 5. Trouble Shooting 
 6. Reflection 
 7. References
    1. Programs Used 
    2. Websites Used 
## Project Overview 
  In this assessment, you will apply the skills you’ve developed throughout the TypeScript and Advanced JavaScript 
  module to build a functional, real-world application. This project will test your understanding of TypeScript features, 
  object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction. You will have 
  5.5 hours to complete this assessment.
## Problem 
You will create an E-commerce Product Management System using TypeScript. The final deliverable will include a GitHub repository with your project and a written reflection on your approach and the challenges you faced.
### Problem Breakdown!/ Goal
 E-commerce Product Management System
→ API call
→ Error handling
→ Redirect
to make an arrow  First, hold down the Alt key. For a left-facing arrow, type the number 27 ←. A right arrow can be inserted by typing the number 26 →. Type the number 24 for an up arrow ↑, or 25 for a down arrow ↓.
### Questions + Answers  
1.How can I made the API request and make interact with the product data 
-  Start by fetching data and just console.log() it.
- Experiment with map, filter, find to manipulate the product array
- Gradually add creating, updating, or deleting products if the API supports it.

### Step-by-Step Process (What will I need to do)  
The Outcome of every battle takes place in the planning phase. 
1.  Research API
2.  Plan Project 
3.  Develop Product class 
4.  Implement Utilities 
5.  Handle Asynchronous Operations
6.  Error Handling Utility
7.  Create the Main Application
8.  Testing 
9.  (Optional) Create an Ui
10. (Optional) Implement User Interation
11. (Optional) Style the UI


## What I did in detail 
In this section you should say what you did and why and if you made refinements as well. 
1. Research the dummy API 
    - Observation 
        - To get a single Product 

        ```
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(console.log);
        ```
        - To search products 

        ```
        fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(console.log);
        ```
    2. project planning 
    - what I need to pull 
        - Create an API fetch requst for the informaiton!
    3. Develop Product Class 
     ex class fromm previous project
     ```
    export declare class Product {
    Sku: number;
    Name: string;
    Price: number;
    constructor(Sku: number, Name: string, Price: number);
    displayDetails(): string;
    getPriceWithTax(TaxRate: number): number;
    }
     ```
      - The Product  class should include 
    4. I then went to make the functions for discount calcualtor and the calulate with tax 
    5. I went to creat the fetch api classs setting the parameter to  url that will be defined in the main function so the person cn fix the based on that.
    6. I made the main function 
    7. I debugged parts of the code that made the code not work
    8. I changed tested the code 
    9. double checked the rubric to make sure all standards are met  

## Troubleshooting 
    Ask: “What should happen right now?”
    Ask: “What’s actually happening?”
    Test your assumptions step by step.


### Problems 
Problems  will arise every time you code knowing the problem is key to understanding it !
1. Tax calculator problem I was getting a type error when trying to use the calculator and couldn't figure oout what was breaking it 
- Product.ts :
    ```
    getPriceWithDiscount(): string {
            const discountedPrice = calculateDiscount(this.discountPercentage)(this.price);
            const fullPriceWithTax = calculateTax(discountedPrice,this.category === "groceries" ? 0.03 : 0.0475);
            return `Discount Price: $${discountedPrice} and the Full Price is $${fullPriceWithTax.toFixed(2)}`;
        }
    ```  
- discountCalculator.ts:
    ```
    export function calculateDiscount(dis: number): (price: number) => string  {
        return function(price: number): string  {
            let result = price * (1 - dis);
            return result.toFixed(2)
        }
    }
    ```

2. My main.ts file isnt working like I intended it to, the my only hint is the error :
"Error fetching or processing product: TypeError: Cannot read properties of undefined (reading 'id')"
This tells me it isnt reading the data  with  the preset parameters
- Theory 1 : My APi calling is wrong or not fully complete in some way 
- Theory 2 : There is an Error in my product.ts file 
- Theory 3 : There is a problem in my main.js file 
3. Products Display message and tax calculator did not display!  
- Theory: I did not console log the function 
4. The math logic isnt giving me the ideal outcome 

### Solutions
 Finding out how to fix those problems will be important!

1. According to mdm , the ```.toFixed()``` method returns the number as a string so I needed to parsefloat or Int  it to make it correct 

```
  getPriceWithDiscount(): string {
        const discountedPrice = calculateDiscount(this.discountPercentage)(this.price);
        const fullPriceWithTax = calculateTax(parseInt(discountedPrice),this.category === "groceries" ? 0.03 : 0.0475);
        return `Discount Price: $${discountedPrice} and the Full Price is $${fullPriceWithTax.toFixed(2)}`;
    }
```
2. 
- Theory 1 : I added a ```console.log("Fetched data:", data)``` to make sure the data was actually fetched earlier and it logged it BUT     
    it would seem that I didn't do anything with said data so i added a return to  the data to see what could happen. 
    - The products loaded needed howeveer the reast of the information I wanted to display didnt return, 
3. I did not set them to be console.log
4. I didnt set the math correctly

## Reflection
Sometimes there are questions to reflect on the project but if there is not , Use the area to reflect on what wass learned and how problems were fixed and handled 

## References 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

- https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
### Programs I used 


### Websites I used





