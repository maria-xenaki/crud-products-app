$(document).ready(function(){

    getProducts();

        $('#frmProduct').on('submit', function(e){
            
        e.preventDefault();

        let product = $("#product").val();
        let cost = $("#cost").val();
        let description = $("#description").val();
        let quantity = $("#quantity").val();

        const item = {
        product,    //: product,
        cost,       //: cost,
        description,//: description,
        quantity    //: quantity
        };

        $.ajax({
            url: "http://localhost:3000/api/products",
            type: "post",
            data: JSON.stringify(item),
            contentType: "application/json",
            dataType:"json"
        }).done(function (response){
            console.log(response);
            if (response.status) { 
                alert('Product added successfuly');
                $('#frmProduct')[0].reset();
                getProducts();
            } else {
                alert('Error adding product ('+ response.data.message + ')');
            }
            });
                    
            return false
            }); 
        });

        function getProducts(){
        $.ajax({
            url:'http://localhost:3000/api/products',
            type:'get',
            dataType:'json'
            })
            .done(function(response){
            if (response.status) { 
                createTbody(response.data);
            } else {
                alert('Error finding product');
            }
            });
        }   

    function createTbody(data){
        $("#productTable > tbody").empty();
        for (let i=0; i < data.length; i++){

        let product = data[i].product;
        let cost = data[i].cost;
        let description = data[i].description;
        let quantity = data[i].quantity;
        
        let tr_str =`

        <tr>
            <td>${product}</td>
            <td>${cost}</td>
            <td>${description}</td>
            <td>${quantity}</td>
        </tr>`;

    $("#productTable tbody").append(tr_str);
  }
}


    
   
 