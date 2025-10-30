class Chess{
    board = null;
    square = null;
    selectedSymbol = null;
    constructor(board){
        this.board = board;
        this.squares = board.querySelectorAll('.square-grid > div'); // 64개
        this.symbols = board.querySelectorAll('.symbol-grid > .symbol'); // 64개
        this.outbox1 =  board.querySelector('.outbox-1');
        this.outbox2 =  board.querySelector('.outbox-2');
        this.addEventListener();

    }
    addEventListener(){
        this.squares.forEach((square,idx) => {
            square.addEventListener('click',()=>{
                this.setSelectedSymbolOrder(idx+1);
            })
        });
        this.symbols.forEach((symbol,idx) => {
            symbol.addEventListener('click',()=>{
                this.selectSymbol(symbol)
            })
        });
        this.outbox1.querySelectorAll(':scope > *').forEach((d,idx)=>{
            d.addEventListener('click',()=>{
                this.setSelectedSymbolOrder('out1-'+(idx+1));
            })
        });
        this.outbox2.querySelectorAll(':scope > *').forEach((d,idx)=>{
            d.addEventListener('click',()=>{
                this.setSelectedSymbolOrder('out2-'+(idx+1));
            })
        });
    }
    setSelectedSymbolOrder(order){
        if(this.selectedSymbol){
            this.selectedSymbol.dataset.order = order;
            this.selectSymbol(null)
        }
    }
    

    selectSymbol(symbol){
        this.symbols.forEach((symbol)=>{
            symbol.classList.remove('active');
        })
        this.board.classList.remove('active-symbol')
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
        this.board.classList.add('active-symbol')
    }
}