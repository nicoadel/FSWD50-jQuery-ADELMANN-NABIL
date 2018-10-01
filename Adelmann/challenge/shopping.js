$(document).ready(function() {
            items = document.getElementsByClassName("item");
            console.log(items);
            for(var i = 0; i < items.length; i++)
            {
            	items[i].addEventListener("click", create_JSON, false)
            }
            function create_JSON() {
                var json_item = {
                    img: $(this, ".item_img").text,
                    name: $(this, ".item_name").val,
                    price: $(this, ".item_price").val
                };
                console.log(json_item);
            }



        })