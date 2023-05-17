function createCaculator() {
    const body = document.getElementsByTagName('body')[0];

    return {
        display: document.querySelector('.display'),
        
        start() {
            this.clickButton();
            this.pressEnter();
        },
        
        clickButton() {
            // console.log(this);   // this é a calculadora
            document.addEventListener('click', function(e) {
                const el = e.target;
                // console.log(this);   // this passa a ser o document

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                } 
                else if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                else if (el.classList.contains('btn-del')) {
                    this.delete1();
                }
                else if (el.classList.contains('btn-eq')) {
                    this.calculate();
                }
            }.bind(this)); // para que o this se referencie a caculadora e não ao document
        },

        pressEnter() {
            body.addEventListener('keydown', e => {
                e.preventDefault();
                if (e.keyCode === 13) {
                    this.calculate();
                }
            });
        },

        btnForDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = ''
        },

        delete1() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let account = this.display.value;
            
            try {
                account = eval(account);

                if(!account) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(account);
            }
            catch(e) {
                alert('Conta inválida');
                return;
            }
        }
    };
}

const calculator = createCaculator();
calculator.start();