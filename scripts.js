 
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
    
    
