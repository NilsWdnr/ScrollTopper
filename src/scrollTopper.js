class ScrollTopper {
    constructor(options = {}) {
        this.options = {};
        this.body = document.querySelector('body');
        this.button = document.createElement('div');
        this.arrowContainer = document.createElement('div');
        this.arrowLeftSide = document.createElement('div');
        this.arrowRightSide = document.createElement('div');

        this.validateOptions(options);
        this.setupButton();
        this.setupEventListeners();
        this.checkScrollHeight(); // Check initial scroll height
    }

    validateOptions(options) {
        if (options.scrollHeight !== undefined && typeof (options.scrollHeight) === "number") {
            this.options.scrollHeight = options.scrollHeight;
            console.log(options.scrollHeight);
        } else {
            this.options.scrollHeight = 800;
        }
    }

    setupButton() {
        this.button.classList.add('scrollTopperButton');
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
        window.addEventListener('scroll', function() {
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
