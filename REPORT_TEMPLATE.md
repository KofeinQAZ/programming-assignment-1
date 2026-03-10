Вот готовый вариант репорта для твоего калькулятора. Я заполнил его на английском, так как шаблоны для программирования обычно сдаются на английском, но если тебе нужен русский вариант — скажи, и я переведу!

---

# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:** Parking Pass Calculator

**What does your calculator do?** This calculator solves the problem of overpaying for parking. It calculates the estimated monthly cost of hourly parking based on weekly usage and compares it to the price of a monthly pass to recommend the most cost-effective option.

---

## 2. Inputs

| Input Name | Unit | What it Represents |
| --- | --- | --- |
| Name | Text | The user's name for a personalized response |
| Rate | KZT | The cost of parking for 1 hour |
| Hours | Hours | How many hours the user parks per week |
| Pass | KZT | The cost of a monthly parking pass |

**Explain in words:** I chose these inputs because they are the exact variables needed to make a financial decision about parking. The user's name is collected to make the UI friendlier and more personalized, while the other three inputs allow the program to project monthly costs and compare them to a fixed price.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:** To find the total monthly cost of hourly parking, the calculator assumes there are 4 weeks in a month:


$$MonthlyCost = Rate \times Hours \times 4$$


It also calculates the financial difference:


$$Difference = |MonthlyCost - Pass|$$

**Steps:**

1. Prevent the default form submission (`e.preventDefault()`).
2. Get input values from HTML using `getElementById`.
3. Convert the numeric inputs from strings to numbers using `Number()`.
4. Perform the calculation to find `monthlyCost` and the `difference`.
5. Generate the appropriate HTML string with the results and display it in the `#result` div.

---

## 4. Conditional Logic (if / else)

**How the program interprets the result:**

* **If `monthlyCost > pass**` → The monthly pass is cheaper. The program advises buying the pass and shows how much money will be saved.
* **If `monthlyCost < pass**` → Paying hourly is cheaper. The program advises against the pass and shows the savings.
* **Else (`monthlyCost == pass`)** → The costs are exactly the same. The program tells the user to choose whatever is more convenient.

**Why I chose these ranges:** These conditions cover all possible mathematical comparisons between two numbers (greater than, less than, equal to), ensuring the user gets an accurate and logical financial recommendation in every scenario.

---

## 5. Output

**What the program shows to the user:**

* A personalized greeting (`Привет, [Name]!`).
* A summary of the entered data (Rate, Hours, Pass price).
* The calculated monthly cost of hourly parking.
* A final verdict (with emojis ✅, ❌, or ⚖️) recommending what to do.
* The exact amount of money saved by choosing the right option.
* **Dynamic UI output:** The background color of the result box changes to green (`.save`), red (`.no-save`), or grey (`.equal`) depending on the result.

---

## 6. Edge Cases / Unusual Inputs

**What happens if:**

* **User enters a negative number?** The HTML inputs have a `min="0"` attribute, which prevents users from typing or stepping into negative numbers.
* **User leaves input empty?** The HTML inputs have the `required` attribute. The browser will block the form submission and ask the user to fill in the missing fields.
* **User enters zero?** If the user enters `0` for hours or rate, `monthlyCost` becomes `0`. The logic handles this perfectly, advising the user not to buy the pass (since $0 < Pass Price).

---

## 7. Optional Features (If You Added Any)

* **Dynamic CSS Styling:** Added JavaScript logic (`result.className`) to change the styling of the result box based on the conditions (green for savings, red for loss).
* **String Concatenation & HTML Generation:** Built a structured HTML response inside JavaScript using variables and inserted it using `.innerHTML`.
* **Personalized UI:** Takes the user's string input (Name) and incorporates it into the final response.

---

## 8. How to Run the Project

1. Download or clone the repository containing `index.html`, `style.css`, and `script.js`.
2. Open `index.html` in any modern web browser.
3. Fill in your name, hourly parking rate, weekly hours, and the pass price.
4. Click the "Рассчитать" button to see your personalized recommendation.

---

## 9. AI Usage (If Used)

**Did you use AI tools?** Yes

**If yes, explain briefly:**

* **What you asked AI for:** I used AI to help brainstorm the CSS styling (like the dark theme colors and border-radius) and to structure my JavaScript logic.
* **What you modified yourself:** I wrote the specific HTML structure, chose the variables, and defined the specific text outputs and formulas used in the project.
* **What you fully understand now:** I now fully understand how to use `e.preventDefault()` to stop forms from reloading the page, and how to change CSS classes dynamically using JavaScript.

---

## 10. Reflection

**What did you learn from this assignment?** This assignment helped me understand how HTML, CSS, and JavaScript work together. I learned how to extract data from user inputs, process it using mathematical formulas, and use `if/else` statements to return dynamic, personalized results to the DOM.

---

Будешь ли ты что-то добавлять от себя в пункты **Reflection** или **AI Usage**, или оставим так, как я написал?
