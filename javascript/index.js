let input = document.querySelector('input');
let col = document.querySelectorAll('.col');
let ItemsPar = document.querySelector('.ItemsPar')
let EmptyText = document.querySelector('.EmptyText')

input.addEventListener('keyup', InputFilterFun);



function InputFilterFun() {

    col.forEach(Item => {
        let Title = Item.firstElementChild.lastElementChild.firstElementChild.innerHTML;

     
        if (!Title.toLowerCase().includes(input.value)) {
            Item.style.transform = 'scale(0)'
            setTimeout(() => {
                Item.remove(Item)
                Item.style.display = 'none'
            }, 150);

        } else {
            Item.style.display = 'block'
            ItemsPar.appendChild(Item)
            setTimeout(() => {
                Item.style.transform = 'scale(1)'
            }, 50);
        }

        if (ItemsPar.childElementCount < 1) {
            EmptyText.style.display = 'block'
        } else {
            EmptyText.style.display = 'none'
        }

    })

}


let fBtn = document.querySelectorAll('.fBtn');



fBtn.forEach(FBtn => {
    FBtn.addEventListener('click', () => {
        input.value = ''
        col.forEach(cItem => {
            let item = cItem.firstElementChild.lastElementChild.firstElementChild.innerHTML;
            if (!FBtn.classList.contains(item)) {
                cItem.style.transform = 'scale(0)'
                setTimeout(() => {
                    cItem.style.display = 'none'
                }, 150);
            } else {
                ItemsPar.appendChild(cItem)
                EmptyText.style.display = 'none'
                cItem.style.display = 'block'
                setTimeout(() => {
                    cItem.style.transform = 'scale(1)'

                }, 50);
            }

        })
    })
})

let all = document.querySelector('.Allbtn');

all.addEventListener('click', function () {
    input.value = ''
    col.forEach(allItem => {
        if (all.classList.contains(allItem.classList[1])) {
            allItem.style.display = 'block'
            ItemsPar.appendChild(allItem)
            EmptyText.style.display = 'none'
            setTimeout(() => {
                allItem.style.transform = 'scale(1)'

            }, 50);
        }
    })

})


let addCart = document.querySelectorAll('.addCart');
let ItemValue = document.querySelector('.Item_value')
let TotalSPann = document.querySelector('.TotalSPann')
let LargeItem = document.querySelector('.LargeItem');
let CloseLargeImg = document.querySelector('.CloseLargeImg');
let largeImg = document.querySelector('.largeImg');
let ValueCount = 0;
let totalCount = 0;


addCart.forEach(adCart => {

    adCart.addEventListener('click', () => {
        let AmoutofItem = 1;
        let Img = adCart.parentElement.parentElement.previousElementSibling.firstElementChild;

        if (adCart.classList == 'addCart') {
            ValueCount += 1;
            ItemValue.innerHTML = ValueCount

            adCart.classList.remove('addCart');
            adCart.innerHTML = 'Added successfully';
            adCart.classList.add('addedInCart')


            let cartItem = document.createElement('div');
            cartItem.classList.add('cartItem');
            slider.appendChild(cartItem);

            let deleteCart = document.createElement('button');
            deleteCart.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
            cartItem.appendChild(deleteCart)
            deleteCart.classList.add('deleteCart')

            deleteCart.addEventListener('click', ()=>{
                cartItem.remove(cartItem)
                
                
                
                totalCount-=itemPriceCount;
                TotalSPann.innerHTML = totalCount


                if(deleteCart.nextElementSibling.firstElementChild.src  = Img.src){
                    adCart.classList.add('addCart');
                    adCart.innerHTML = 'Add to cart';
                    adCart.classList.remove('addedInCart')
                    cartItem.remove(cartItem)

                    ValueCount -= 1;
                    ItemValue.innerHTML = ValueCount
                }


            })

            let cartImgPar = document.createElement('div');
            cartImgPar.classList.add('cartImgPar');
            cartItem.appendChild(cartImgPar);

            let CartItemImg = document.createElement('img');
            cartImgPar.appendChild(CartItemImg);
            CartItemImg.classList.add('cartImgPar');
            CartItemImg.src = Img.src;

            CartItemImg.addEventListener('click', ()=>{
                LargeItem.style.display = 'flex'
                largeImg.src = CartItemImg.src

                slideCloserDiv.style.opacity = '0'
                slider.classList.remove('sliderOn')
            
                setTimeout(() => {
                    slideCloserDiv.style.display = 'none'
                }, 10);
            })

            LargeItem.addEventListener('click', el=>{
                if(el.target == LargeItem ){
                    LargeItem.style.display = 'none'
                }
            }) 

            CloseLargeImg.addEventListener('click', ()=>{
                LargeItem.style.display = 'none'
           })


         
            let ItemPriceSpan =  adCart.parentElement.previousElementSibling.firstElementChild.innerHTML
            let itemPriceCount = parseInt(ItemPriceSpan);
   

           totalCount+=parseInt(ItemPriceSpan);
           TotalSPann.innerHTML = totalCount

         


            let itemPricePar = document.createElement('div');
            itemPricePar.classList.add('itemPricePar');
            cartItem.appendChild(itemPricePar)

            let Minus = document.createElement('button');
            Minus.innerHTML = '-'
            itemPricePar.appendChild(Minus)
            
             let itemImg = Minus.parentElement.previousElementSibling.firstElementChild.src

            Minus.addEventListener('click', ()=>{


                itemPriceCount-=parseInt(ItemPriceSpan)
                cartItemPrice.innerHTML = itemPriceCount + '' + '$'

                totalCount-=parseInt(ItemPriceSpan);
                TotalSPann.innerHTML = totalCount

               


                if(itemPriceCount == 0 && itemImg == Img.src){
                    adCart.classList.add('addCart');
                    adCart.innerHTML = 'Add to cart';
                    adCart.classList.remove('addedInCart')
                    cartItem.remove(cartItem)

                    ValueCount -= 1;
                    ItemValue.innerHTML = ValueCount
                    
                }

                AmoutofItem-=1

                itemAmout.innerHTML = AmoutofItem
                
           
            })

            let cartItemPrice = document.createElement('span');
            cartItemPrice.innerHTML =  adCart.parentElement.previousElementSibling.innerHTML;
            cartItemPrice.classList.add('cartItemPrice')
            itemPricePar.appendChild(cartItemPrice)

            let Plus = document.createElement('button');
            Plus.innerHTML = '+'
            itemPricePar.appendChild(Plus)

            Plus.addEventListener('click', ()=>{
                itemPriceCount+=parseInt(ItemPriceSpan)
                cartItemPrice.innerHTML = itemPriceCount + '' + '$';
                
                totalCount+=parseInt(ItemPriceSpan);
                TotalSPann.innerHTML = totalCount

                AmoutofItem+=1

                itemAmout.innerHTML = AmoutofItem
            })


            let ItemCountpar = document.createElement('div');
            cartItem.appendChild(ItemCountpar)
            ItemCountpar.classList.add('itemCount')

            let itemCountTitle = document.createElement('span');
            itemCountTitle.innerHTML = 'Item: '
            ItemCountpar.appendChild(itemCountTitle)


            let itemAmout = document.createElement('span');
            itemAmout.innerHTML =  AmoutofItem
            ItemCountpar.appendChild(itemAmout)



        }

    })
})

let cartOnBtn = document.querySelector('.cartBtn');
let slider = document.querySelector('.slider')
let slideCloserDiv = document.querySelector('.slideCloserDiv')
let closeSlider = document.querySelector('.closeSlider');

cartOnBtn.addEventListener('click', () => {
    slideCloserDiv.style.display = 'block'
    slider.classList.add('sliderOn');

    setTimeout(() => {
        slideCloserDiv.style.opacity = '1'
    }, 5);


})

slideCloserDiv.addEventListener('click', () => {
    slideCloserDiv.style.opacity = '0'
    slider.classList.remove('sliderOn')

    setTimeout(() => {
        slideCloserDiv.style.display = 'none'
    }, 10);
})

closeSlider.addEventListener('click', () => {
    slideCloserDiv.style.opacity = '0'
    slider.classList.remove('sliderOn')

    setTimeout(() => {
        slideCloserDiv.style.display = 'none'
    }, 10);
})
