class Chess{
    board = null;
    square = null;
    selectedSymbol = null;
    constructor(board){
        this.board = board;
        this.squares = board.querySelectorAll('.square-grid > div'); // 64개
        this.symbols = board.querySelectorAll('.symbol-grid > .symbol'); // 64개
        this.outboxes = board.querySelectorAll('.symbol-grid > .outbox'); // 64개
        this.addEventListenerForSquares();
        this.addEventListenerForSymbols();
        this.addEventListenerForOutboxes();
    }
    addEventListenerForSquares(){
        this.squares.forEach((square,idx) => {
            square.addEventListener('click',()=>{
                this.setSelectedSymbolOrder(idx+1);
            })
        });
    }
    setSelectedSymbolOrder(order){
        if(this.selectedSymbol){
            this.selectedSymbol.dataset.order = order;
            this.selectSymbol(null)
        }
    }
    addEventListenerForOutboxes(){
        this.outboxes.forEach((outbox,idx) => {
            outbox.addEventListener('click',()=>{
                this.setSelectedSymbolOrder(outbox.dataset.order);
            })
        });
    }

    addEventListenerForSymbols(){
        this.symbols.forEach((symbol,idx) => {
            symbol.addEventListener('click',()=>{
                this.selectSymbol(symbol)
            })
        });
    }
    selectSymbol(symbol){
        this.symbols.forEach((symbol)=>{
            symbol.classList.remove('active');
        })
        if(!symbol){
            this.selectedSymbol = null;
            return 
        }
        if(this.selectedSymbol===symbol){
            this.selectedSymbol = null;
            return;
        }
        this.selectedSymbol = symbol;
        symbol.classList.add('active');
    }
}