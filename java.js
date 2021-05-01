const itens=[
    {
    id:0,
    nome:'brinco',
    img:'image0.jpeg',
    quantidade:0,
    },
    {
      id:1,
      nome:'colar',
      img:'image1.jpeg',
      quantidade:0,
    },
    {
      id:2,
      nome:'anel',
      img:'image2.jpeg',
      quantidade:0,
    },
  
  {
    id:0,
    nome:'brinco',
    img:'image0.jpeg',
    quantidade:0,
    },
    {
      id:1,
      nome:'colar',
      img:'image1.jpeg',
      quantidade:0,
    },
    {
      id:2,
      nome:'anel',
      img:'image2.jpeg',
      quantidade:0,
    },
    
      {
      id:0,
      nome:'brinco',
      img:'image0.jpeg',
      quantidade:0,
      },
      {
        id:1,
        nome:'colar',
        img:'image1.jpeg',
        quantidade:0,
      }
     
        
    
  ]


    inicializarLoja=()=> {
    var containerprodutos = document.getElementById('produtos');
    itens.map((val)=>{
        containerprodutos.innerHTML+=`
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao Carrinho!<a/>
         </div>       


        
        `;
       
    })  
    
    } 
     inicializarLoja();  
    
     atualizarCarrinho=()=>{
        var containercarrinho = document.getElementById('carrinho');
        containercarrinho.innerHTML="";
        itens.map((val)=>{
        if(val.quantidade > 0){
        containercarrinho.innerHTML+=`
        <div class="info-single-chekout">
        <p style="float:left;">produto:`+val.nome+`</p>
        <p style="float:right;">Quantidade:`+val.quantidade+`</p>
        <div style="clear:both"></div>
        
        </div>


        
        `;
        }
       
    })  
        




     }
       var links=document.getElementsByTagName('a');
       for(var i=0;i<links.length;i++){
           links[i].addEventListener("click",function(){
               let key=this.getAttribute('key');
               itens[key].quantidade++;
               atualizarCarrinho();
               return false;

           })
       }
