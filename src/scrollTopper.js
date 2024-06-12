class ScrollTopper {
    constructor(){
        this.body = document.querySelector('body');
        this.button = document.createElement('div');
        this.arrowContainer = document.createElement('div');
        this.arrowLeftSide = document.createElement('div');
        this.arrowRightSide = document.createElement('div');
        this.setupButton();
        this.setupEventListeners();
    }

    setupButton() {
        this.button.classList.add('scrollTopperButton');
        this.arrowContainer.classList.add('st-arrow-container');
        this.arrowLeftSide.classList.add('st-arrow-left');
        this.arrowRightSide.classList.add('st-arrow-right');
        this.body.appendChild(this.button);
        this.button.appendChild(this.arrowContainer);
        this.arrowContainer.appendChild(this.arrowLeftSide);
        this.arrowContainer.appendChild(this.arrowRightSide);
    }

    setupEventListeners() {
        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 800) {
                if(!this.button.classList.contains('active')){
                    this.button.classList.add('active');
                }
            } else {
                if(this.button.classList.contains('active')){
                    this.button.classList.remove('active');
                }
            }
        })
    }
}