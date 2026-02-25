кп тфйчв# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Fuel Calculator

**What does your calculator do?**  
This calculator calculate fuel for a trip. It shows how much fuel is needed and how much money the trip costs.

---

## 2. Inputs

| Input Name | Unit | What it Represents |
|---|---|---|
| Name | - | User Name |
| Distance | km | Trip distance |
| Consumption | l/km | Car fuel use |
| Price | tg | Fuel price per liter |

These inputs help the calculator work and work correctly.

1.The name makes result more personal for the user.

2.Distance and concumption show how much fuel a car needs.

3.The price shows how much money the trip costs.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  

Fuel needed = (distance * consumption)/100

Total cost = fuel needed * price per liter

**Steps:**
1. Get input values from the users  
2. Convert input values to numbers 
3. Calculate fuel needed  
4. Calculate total cost
5. Show the result

---

## 4. Conditional Logic (if / else)

If cost is 5000 tg or less → Efficient

If cost is more than 5000 tg → Costly  

I chose these ranges because for me, a trip costs more than 5000 tg it is a bit expensive, but it all depends on the distance. For other people 5000 tg might be cheap. That is just my personal opinion and example.

---

## 5. Output

What does your program show to the user?

- Fuel needed
- Total cost
- Personalized message 
- Trip status (Efficient or Costly)

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- If user enters zero - program show this message:"Please enter positive numbers!"
- If user enters negative number - program show this message:"Please enter positive numbers!"
- If user leaves input empty - program show this message:"Please enter positive numbers!"

- Explain how your program handles this.

  if (distance <= 0 || consumption <= 0 || price <= 0) {
  
    result.style.background = "#fff3cd";
    
    result.innerHTML = "Please enter positive numbers!";
    
    return;
    
  The program checks if the numbers are positive. If a number is zero or negative, it shows a message and don't calculate. If the user leaves an empty, the program treats it as zero.
---

## 7. Optional Features (If You Added Any)

- Error messages
- Color result (green or red) 
- Personal message 

---

## 8. How to Run the Project

1. Download or clone repository  
2. Open `index.html` in browser  
3. Enter input values  
4. Click Calculate button  

---

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes

If yes, explain briefly:
- What you asked AI for
- I asked AI to explain why my HTML didn't work sometimes and how to fix it. For example, about mistakes and a wrong letter in my code or extra space. I asked about CSS - borders and sizes in code. I also asked how to make the calculator to work in JavaScript because I didn't know it before.
- What you modified yourself
-  I worked with HTML mostly bu myself. I changed the color of the whole calculator and size of the buttons, boxes and other spaces. 
- What you fully understand now
- I understand how CSS works for styling. Now I know how to connect CSS and JavaScript to HTML. I also fully understand how to change colors, sizes. I started to understand how JavaScript works and how to make the page functional.
  
---

## 10. Reflection

What did you learn from this assignment?

I already knew the basics of HTML and little CSS. In this assignment, I learned more about CSS, like colors, borders and spacing. I also started to learn JavaScript and how to use it to make the page work. Now I can make a caiculator that takes input, calculates and shows the result. This progect helped me understand HTML, CSS and JS work together.
