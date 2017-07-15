
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
    
    
