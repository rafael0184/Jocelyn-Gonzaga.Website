
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
	navbar.classList.toggle('active');
}

let loadMoreBtn = document.querySelector('#load-more');
        let currentItem = 3;

        loadMoreBtn.onclick =() =>{
            let boxes =[...document.querySelectorAll('.tips .tips-container .box')];
            for(var i = currentItem;i < currentItem + 4; i++){
                boxes[i].style.display = 'inline-block';
            }
            currentItem +=4;

            if (currentItem >= boxes.length){
                loadMoreBtn.style.display='none';
            }
        }
        
 
window.onscroll = () =>{
	navbar.classList.remove('active');
	loadMoreBtn.classList.remove('active')
	}



let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
	header.classList.toggle('shadow', window.scrollY > 0);
});

