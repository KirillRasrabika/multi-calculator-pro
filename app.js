function renderHeader() {
    return `
     <header class="main-header">
       <h1>Multi-Calculator PRO</h1>
       <nav class="buttonNav">
        <button data-target="calc-standard">Калькулятор обычный</button>
        <button data-target="calc-bmi">Калькулятор ИМТ</button>
        <button data-target="calc-currency">Конвертер валют</button>
        <button data-target="calc-square">Калькулятор площади прямоугольника</button>
       </nav>
     </header>
    `
}

function renderMain() {
    return `
   <main class="content">  
    <section class="catalogCalculotor">
    <h2>Калькуляторы</h2>
    <p>Выберите калькулятор для дальнейшего использования</p>
    </section>
    <br/>
    ${renderStandartCalc()}
    ${renderBmiCalc()}
    ${renderCurrencyConverter()}
    ${renderSquareCalc()}
    </main>
    `
}

function renderFooter(MyNickWebSait, dataYear) {
    return `
    <footer>
     <p>${MyNickWebSait} - ${dataYear}</p>
    </footer>
    `
}

function initApp() {
    const app = document.getElementById("app")
 
    const data = new Date().getFullYear()

    app.innerHTML = `
    ${renderHeader()}
    ${renderMain()}
    ${renderFooter("iKaStudio", data)}
    `
    setupNavigation()
    setupBmiCalc()
    setupCurrencyConverter()
    setupStandartCalc()
    setupSquareCalc()
}

initApp()


function renderStandartCalc() {
    return `
    <section class="calculator navigationClick" id="calc-standard">
        <h2>Калькулятор обычный</h2>

        <div>
            <output class="calculator" id="display">0</output>
        </div>

        <div class="calc-buttons">
          <button type="button" data-number="0">0</button>
          <button type="button" data-number="1">1</button>
          <button type="button" data-number="2">2</button>
          <button type="button" data-number="3">3</button>
          <button type="button" data-number="4">4</button>
          <button type="button" data-number="5">5</button>
          <button type="button" data-number="6">6</button>
          <button type="button" data-number="7">7</button>
          <button type="button" data-number="8">8</button>
          <button type="button" data-number="9">9</button>
          <button type="button" data-number=".">.</button>

          <button type="button" data-operator="+">+</button>
          <button type="button" data-operator="-">-</button>
          <button type="button" data-operator="*">*</button>
          <button type="button" data-operator="/">/</button>

          <button type="button" data-action="clear">C</button>
          <button type="button" class="resultClickButton" data-action="result">=</button>
        </div>
    </section>
    `
}


function renderBmiCalc() {
   return `
    <section class="calculatorIMT navigationClick" id="calc-bmi">
       <h2>Калькулятор ИМТ</h2>

       <form id="bmi-form">
       <div class="height-group">
       <div class="form-group">
            <label for="height-input">Ваш рост</label>
             <input type="number" id="height-input" min="120" placeholder="Введите рост (см)." required/>
          </div>
        </div>

          <div class="weight-group">
          <div class="form-group">
            <label for="weight-input">Ваш вес</label>
             <input type="number" id="weight-input" min="20" step="0.1" placeholder="Введите вес (кг)." required/>
          </div>
        </div>

          <button type="submit">Вычислить</button>
       </form>

        <div class="result-box">
          <p>Ваш ИМТ:<output id="bmi-output">0</output></p>
          <p id="bmi-status"></p>
        </div>
    </section>
   `
}

function renderCurrencyConverter() {
    return `
    <section class="converter navigationClick" id="calc-currency">
        <h2>Конвертер валют</h2>

        <form id="currency-form">
        <div class="form-group">
            <label for="converterNumberName">Сумма:</label>
            <input type="number" id="converterNumberName" min="0" step="any" placeholder="Введите сумму" required/>
        </div>
       
        <div class="form-group">
            <label for="unit-from">Из:</label>
                <select id="unit-from">
                     <option value="RUB" selected>RUB</option>
                     <option value="USD">USD</option>
                     <option value="EUR">EUR</option>
                     <option value="CNY">CNY</option>
                     <option value="KZT">KZT</option>
                </select>
        </div>
          
         <button type="button" id="changeValut">⇄</button>


        <div class="form-group">
            <label for="unit-to">В:</label>
                <select id="unit-to">
                     <option value="RUB">RUB</option>
                     <option value="USD" selected>USD</option>
                     <option value="EUR">EUR</option>
                     <option value="CNY">CNY</option>
                     <option value="KZT">KZT</option>
                </select>
        </div>

         <button type="submit">Перевести</button>

        </form>

        <div class="result-box">
           <p>Результат: <output id="converter-output">0</output></p>
           <p id="current-course"></p>
        </div>
    </section>
    `
}

function renderSquareCalc() {
    return `
    <section class="squareCalc navigationClick" id="calc-square">
        <h2>Калькулятор Площади прямоугольника</h2>

        <form id="squareForm">
           <div class="form-group">
                <label for="squareInpA">a:</label>
                <input id="squareInpA"  type="number" min="1" placeholder="Введите значение для a" required/>
           </div>

           <div class="form-group">
                <label for="squareInpB">b:</label>
                <input id="squareInpB" type="number" min="1" placeholder="Введите значение для b" required/>
           </div>

           <button type="submit">Вычислить</button>
        </form>

        <div class="result-box">
          <p> Результат: <output id="squareCalcOutput">0</output></p>
          <p id="squareCalcText"></p>
        </div>
    </section>
    `
}

function setupNavigation() {
    const buttonsNavigation = document.querySelectorAll(".buttonNav button")
    const cards = document.querySelectorAll(".navigationClick")

    buttonsNavigation.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetIndex = btn.dataset.target
            const targetIndexCheck = document.getElementById(targetIndex)

            buttonsNavigation.forEach((button) => {
                button.classList.remove("buttonColor")
            })
            
            cards.forEach((card) => {
                card.classList.remove("highlighted")
            })
            if(targetIndexCheck) {
                targetIndexCheck.classList.add("highlighted")
                btn.classList.add("buttonColor")
                targetIndexCheck.scrollIntoView({ behavior: "smooth", block: "center" })
            }
        })
    })
}


function setupBmiCalc() {
    const form = document.getElementById("calc-bmi")
    const inputHeight = document.getElementById("height-input")
    const inputWeight = document.getElementById("weight-input")
    const outputResult = document.getElementById("bmi-output")
    const statusOutput = document.getElementById("bmi-status")
    
    if (!form) return

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const height = Number(inputHeight.value)
        const weight = Number(inputWeight.value)

        if (height <= 0 || weight <= 0) {
            statusOutput.textContent = "Введите корректные данные: данные должны быть больше нуля..."
            return
        }

        
        const sqrtMetr = (height / 100) * (height / 100)
        const resultBmi = (weight / sqrtMetr).toFixed(1)
        outputResult.textContent = resultBmi
  
        if (resultBmi < 18.5) {
            statusOutput.textContent = "Недостаточная масса тела."
            statusOutput.style.color = "gold"

        } else if (resultBmi >= 18.5 && resultBmi <= 24.9) {
            statusOutput.textContent = "Нормальный вес."
            statusOutput.style.color = "green"

        } else if (resultBmi >= 25 && resultBmi <= 29.9) {
            statusOutput.textContent = "Избыточная масса тела."
            statusOutput.style.color = "red"

        } else if (resultBmi >= 30) {
            statusOutput.textContent = "Ожирение."
            statusOutput.style.color = "red"

        }

        inputHeight.value = ""
        inputWeight.value = ""
    })
}

function setupCurrencyConverter() {

    const form = document.getElementById("currency-form")
    const inpurConverter = document.getElementById("converterNumberName")
    const fromSelect = document.getElementById("unit-from")
    const toSelect = document.getElementById("unit-to")
    const buttonReverse = document.getElementById("changeValut")
    const output = document.getElementById("converter-output")
    const statusConverter = document.getElementById("current-course")


    if (!form) return

    const valut = {
        RUB: 1,
        USD: 90,
        EUR: 100,
        CNY: 12,
        KZT: 0.23
    }

    buttonReverse.addEventListener("click", () => {
        const converterFromValue = fromSelect.value
        fromSelect.value = toSelect.value
        toSelect.value = converterFromValue
    })

    form.addEventListener("submit", (event) => {
         event.preventDefault()

         const inpValue = Number(inpurConverter.value)
         const from = fromSelect.value
         const to = toSelect.value

         if (inpValue <= 0 ) {
            statusConverter.textContent = "Введите число больше нуля"
            output.textContent = 0
            return
         }

         const resConverter = inpValue * valut[from]
         const resultConverter = (resConverter / valut[to]).toFixed(4)
         
         output.textContent = resultConverter
         const statusText = (valut[from] / valut[to]).toFixed(2)
         statusConverter.textContent = `Курс 1 ${from} = ${statusText} ${to}`

         form.reset()
    })
}

function setupStandartCalc() {

    const outputStandartCalc = document.getElementById("display")
    const containerButton = document.querySelector(".calc-buttons")

    if (!outputStandartCalc || !containerButton) return

    let expression = ""

    containerButton.addEventListener("click", (event) => {
        const btnStandart  = event.target.closest("button")
        if (!btnStandart) return

        const num = btnStandart.dataset.number
        const operat = btnStandart.dataset.operator
        const action = btnStandart.dataset.action

        if (num !== undefined) {
            expression += num
            outputStandartCalc.textContent = expression
        }

        if (operat !== undefined) {
            if (expression === "") return
            expression += operat
            outputStandartCalc.textContent = expression
        }

        if (action === "clear") {
            expression = ""
            outputStandartCalc.textContent = "0"
        }

        if (action === "result") {
            if (expression === "") return
             
            try {
               const answer = new Function("return "  + expression)()

               if (!isFinite(answer)){
                outputStandartCalc.textContent = "Ошибка"
                expression = ""
                return
               }
              
               expression = String(answer)
               outputStandartCalc.textContent = expression

            } catch (error) {
                outputStandartCalc.textContent = "Ошибка"
                expression = ""
            }
        }
    })
}


function setupSquareCalc() {

    const form = document.getElementById("squareForm")
    const inputA = document.getElementById("squareInpA")
    const inputB = document.getElementById("squareInpB")
    const output = document.getElementById("squareCalcOutput")
    const squareOutputText = document.getElementById("squareCalcText")

    if (!form) return

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const inpSquareA = Number(inputA.value)
        const inpSquareB = Number(inputB.value)

        const resultSquare = inpSquareA * inpSquareB 
        output.textContent = resultSquare

        squareOutputText.textContent = `Площадь прямоугольника: ${resultSquare}`

        form.reset()
    })
}