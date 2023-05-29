

//add to cart function

    function add_to_cart(){
const adder = document.getElementById('cart2');
adder.innerHTML= `  <div class="card brand-card " style="width: 18rem;">

                    <img class="card-img-top" src="images/hercules_pr.jfif" alt="Card image cap" class="brand-img" height="180px">
                    <div class="card-body">
                        <h5 class="card-title">Hercules cycle</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-dark" id="her" style="width:50px; height:40px; margin-left:60px;" onclick="add_to_cart()"><i class="bi bi-bag" id="cart" style="font-size:20px; "></i>
                        </button>
                        <a href="#" class="btn btn-danger" style="width:50px; height:40px;"><span class="material-symbols-outlined" style="font-size:25px; margin-top:3px;" >
                favorite
                 </span>
                        </a>        </div>
                </div>`;
}
console.log("hi");
