# 🧮 Scientific Calculator (CLI + Web)  
### Built Using Arrays & Stacks | Deployed on Hugging Face 🚀

---

## 🌟 Project Overview

This project is a **Scientific Calculator** implemented completely from scratch using:

- ✅ Custom Stack Data Structure
- ✅ Arrays (Python Lists)
- ✅ Infix → Postfix Conversion Algorithm
- ✅ Postfix Expression Evaluation
- ✅ No use of `eval()` (Fully Algorithm-Based)

It is deployed as a web application using **Gradio** on Hugging Face Spaces.

🔗 **Live Demo:**  
(https://huggingface.co/spaces/namradha/calculator)
---

## 🎯 Why This Project is Special

Unlike normal calculators that rely on built-in evaluation functions, this calculator:

- Implements its own stack
- Handles operator precedence manually
- Converts infix expressions to postfix
- Evaluates expressions algorithmically
- Mimics scientific calculator behavior

This demonstrates strong understanding of:

- Data Structures
- Expression Parsing
- Algorithm Design
- Stack Applications
- Mathematical Function Handling

---

## 🏗️ Architecture

Input Expression  
⬇  
Tokenization  
⬇  
Infix → Postfix Conversion (Using Stack)  
⬇  
Postfix Evaluation (Using Stack)  
⬇  
Result Output  

---

## ⚙️ Features

### 🔢 Basic Operations
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)
- Power (^)

### 📐 Scientific Functions
- sin(x)
- cos(x)
- tan(x)
- log(x) → Base 10
- ln(x)
- sqrt(x)
- fact(x)

### 🧠 Advanced Capabilities
- Parentheses support
- Decimal number support
- Custom operator precedence
- Stack-based evaluation
- Error handling
- Web interface using Gradio

---

## 🖥️ Example Expressions

```
3+5
(3+5)*2
2^3
10%3
sin(30)
log(100)
sqrt(16)
fact(5)
```

---

## 🚀 Deployment (Hugging Face Spaces)

### 1️⃣ Create a new Space
- SDK: Gradio
- Python version: Default

### 2️⃣ Upload Files
- `app.py`
- `requirements.txt`

### 3️⃣ Done 🎉

Your app will auto-deploy.

---

## 📦 Installation (Run Locally)

```bash
git clone https://github.com/YOUR_USERNAME/scientific-calculator.git
cd scientific-calculator
pip install -r requirements.txt
python app.py
```

---

## 🛠️ Tech Stack

- Python 3
- Custom Stack Implementation
- Gradio
- Math Module

---

## 📂 Project Structure

```
scientific-calculator/
│
├── app.py
├── requirements.txt
└── README.md
```

---

## 🧠 Concepts Demonstrated

- Stack Data Structure
- Expression Parsing
- Infix to Postfix Conversion
- Algorithmic Evaluation
- Function Handling in Parsers
- Clean Deployment Practices

---

## 📊 Complexity

- Infix to Postfix: O(n)
- Postfix Evaluation: O(n)
- Overall: O(n)

---

## 💡 Future Improvements

- Degree/Radian Toggle
- Memory Functions (M+, M-, MR, MC)
- Dark Mode UI
- History Panel
- Scientific Button Interface
- Keyboard Shortcut Support

---

## 👩‍💻 Author

**Namradha Mani**  
Aspiring Data & Cloud Engineer  
Passionate about Algorithms, ML, and System Design  

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub  
Share it  
Fork it  
Improve it  

---

### 🔥 Built With Logic. Not eval().
