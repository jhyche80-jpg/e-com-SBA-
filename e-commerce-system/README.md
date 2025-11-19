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
        - 

## Troubleshooting 
    Ask: “What should happen right now?”
    Ask: “What’s actually happening?”
    Test your assumptions step by step.


### Problems 
Problems  will arise every time you code knowing the problem is key to understanding it !


1.  
2. 
3. 
4. 

### Solutions
 Finding out how to fix those problems will be important!

1. 
2. 
3. 
4. 

## Reflection
Sometimes there are questions to reflect on the project but if there is not , Use the area to reflect on what wass learned and how problems were fixed and handled 

## References 


### Programs I used 


### Websites I used





