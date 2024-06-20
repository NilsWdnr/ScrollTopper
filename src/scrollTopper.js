class ScrollTopper {
    constructor(options = {}) {
        this.options = {};
        this.defaultOptions = {
            scrollHeight: 800,
            width: 80,
            backgroundColor: '#BA3522'
        }

        this.body = document.querySelector('body');
        this.button = document.createElement('div');
        this.arrowContainer = document.createElement('div');
        this.arrowLeftSide = document.createElement('div');
        this.arrowRightSide = document.createElement('div');

        this.setOptions(options);
        this.setupButton();
        this.setupEventListeners();
        this.checkScrollHeight(); // Check initial scroll height
    }

    setOptions(options) {
        this.validateOption("scrollHeight",options.scrollHeight,"number");
        this.validateOption("width",options.width,"number");
        this.validateOption("backgroundColor",options.backgroundColor,"string")
    }

    validateOption(option,value, type) {
        if(value!==undefined){
            if(typeof(value)===type) {
                this.options[option] = value;
                return;
            } else {
                console.log(`Wrong type for option ${option}. ${type} expected, ${typeof(value)}`);
            }
        }

        this.options[option] = this.defaultOptions[option];
    }

    setupButton() {
        this.button.classList.add('scrollTopperButton');
        this.button.style.width = this.options.width + "px";
        this.button.style.height = this.options.width + "px";
        this.button.style.backgroundColor = this.options.backgroundColor;
        this.arrowContainer.classList.add('st-arrow-container');
        this.arrowLeftSide.classList.add('st-arrow-left');
        this.arrowRightSide.classList.add('st-arrow-right');
        this.arrowContainer.appendChild(this.arrowLeftSide);
        this.arrowContainer.appendChild(this.arrowRightSide);
        this.button.appendChild(this.arrowContainer);
        this.body.appendChild(this.button); // Append the button last
    }

    setupEventListeners() {
        const self = this; // Store reference to 'this'
        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        window.addEventListener('scroll', function () {
            self.checkScrollHeight(); // Use 'self' inside event handler
        });
    }

    checkScrollHeight() {
        if (document.documentElement.scrollTop >= this.options.scrollHeight) {
            if (!this.button.classList.contains('active')) {
                this.button.classList.add('active');
            }
        } else {
            if (this.button.classList.contains('active')) {
                this.button.classList.remove('active');
            }
        }
    }
}
