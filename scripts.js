
      <header class="header-note mt-header">
        <div class="container">
        <strong>Free Shipping • Free Returns • No Sales Tax</strong>
        <div class="dis-count">
          <form>
          <ul>
            <li><input type="text" name="enterDiscount" id="enterDiscount" placeholder="Discount"/></li>
            <li><input type="hidden" name="discountVal" id="discountVal" value=""/></li>
            <li><input type="submit" value="Apply" class="discount-btn"/></li>
          </ul>
          </form>
        </div>
        </div>
      </header>

    <script type="text/javascript">
      jQuery(".discount-btn").click(function(){ 
        var discountCode = jQuery('#enterDiscount').val(); alert(discountCode); 
        sessionStorage.setItem("discountCode", discountCode);
      });
    </script>
    <script>
     jQuery('#discountVal').val(sessionStorage.getItem("discountCode"));
    </script>  

 {% if template contains 'product' %}
    <script>
     jQuery(window).load(function(){ 
      var disCountValue = jQuery('#discountVal').val();
      if( disCountValue != '' ){  
       jQuery('#product-info .discount-codes div').each(function(){ 
         if( jQuery(this).attr('coupon-title') == disCountValue ){
           jQuery(this).css('display', 'block');
           var pDiscount = jQuery(this).attr('data-discount'); 
           var pDiscountInt = parseFloat(pDiscount);
           var currPrice = jQuery('#product-info .product-price .detail-price .price .money').text().replace('$','');
           var currPriceFlt = parseFloat(currPrice); 
           var pDiscountPrice = currPriceFlt - ((pDiscountInt /100.00) * currPriceFlt); 
           var pDiscountPriceFlt = '$' + parseFloat(pDiscountPrice).toFixed(2);
           jQuery('#product-info .product-price .discount-price').text(pDiscountPriceFlt);
         } 
       });              
      } 
     });   
    </script>
 {% endif %}
 
 %---------------------------------------------------------------------------------------------
       
 <script type="text/javascript">
	Shopify.updateCartInfo = function(cart, cart_summary_id, cart_count_id) {
		if ((typeof cart_summary_id) === 'string') {
			var cart_summary = jQuery(cart_summary_id);
			if (cart_summary.length) {

				cart_summary.empty();
				
				jQuery.each(cart, function(key, value) {
					if (key === 'items') {
						
						if (value.length) {
						  
							jQuery('<div class="cart-block-list items"></div>').appendTo(cart_summary);
							var table = jQuery(cart_summary_id + ' div.items');
				   
							jQuery.each(value, function(i, item) {
								
								jQuery('<ul class="items-inner"> \
									<li> \
										<div class="product"> \
                                            <div class="row"> \
                                                <div class="col-md-4 col-sm-4 col-xs-4"> \
                                                    <a href="' + item.url + '">\
                                                        <img src="' + Shopify.resizeImage(item.image, 'small') + '" alt="" />\
                                                    </a>\
                                                </div>\
                                                <div class="col-md-8 col-sm-8 col-xs-8">\
                                                    <div class="cart-info">\
                                                        <div class="product-name">\
                                                            <a href="' + item.url + '">' + item.quantity + '<span class="x"> x </span>' + item.title + '</a>\
                                                        </div>\
                                                        <div class="product-price">' + Shopify.formatMoney(item.price, "{{shop.money_format}}")  + '</div>\
                                                    </div>\
                                                </div>\
                                            </div>\
											<a class="remove-link" title="{{ 'general.header.cart_info.remove' | t }}" href="javascript:;" data-cart-remove="' +  (i + 1) + '"></a>\
										</div> \
									</li> \
								</ul>').appendTo(table);
							});
							
                            jQuery('<div class="cart-summary text-center inner-top-50"> \
								<h5 class="cart-total"> {{ 'general.header.cart_info.subtotal' | t }}</h5> \
                                <p class="cart-total-price">' + Shopify.formatMoney(cart.total_price, "{{shop.money_format}}")  + '</p>\
								<p class="instruction">Free Priority Shipping On All Orders!</p> \
								<a href="/cart\" class="btn btn-default btn-uppercase">{{ 'general.header.cart_info.view_shopping_bag' | t }}</a> \
                                <button class="btn btn-primary btn-uppercase continue-shopping" onclick="window.location=\'/checkout\'">{{ 'general.header.cart_info.checkout' | t }}</button> \
							</div>').appendTo(table);
									 
						}
						else {
							jQuery('<div class="cart-item-empty text-center"><span></span><p>{{ 'general.header.cart_info.cart_empty_html' | t }}</p></div>').appendTo(cart_summary);
						}
					}
				});
						
				
			}
		}
		
		updateCartDesc(cart);
	};
	  
	function updateCartDesc(data){
		var $cartLinkText = $('.cart-target .cart-icon');
		var $cartPrice = '<span class="total"> - '+ Shopify.formatMoney(data.total_price, "{{shop.money_format}}") +'</span>';
		switch(data.item_count){
			case 0:
				$cartLinkText.html('<span class="number">0</span>');
				break;
			case 1:
				$cartLinkText.html('<span class="number">1</span>');
				break;
			default:
				$cartLinkText.html('<span class="number">'+data.item_count+'</span>');
				break;
		}
		
		{% if settings.show_multiple_currencies %}
			currenciesCallbackSpecial('#cart-info span.money');
		 {% endif %}
	}
	  
	Shopify.onCartUpdate = function(cart) {
		Shopify.updateCartInfo(cart, '#cart-info #cart-content', 'shopping-cart');
	};
	  
	$(window).load(function() {
			
		Shopify.getCart(function(cart) {
		  
			Shopify.updateCartInfo(cart, '#cart-info #cart-content');		
		  
		});
	});
</script>
           

       
       
       
       
    
    
