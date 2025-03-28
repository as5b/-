document.addEventListener('DOMContentLoaded', function(){
    const bookingForm = document.getElementById('booking-form');
    const arrivalDate = document.getElementById('arrival-date');
    const departureDate = document.getElementById('departure-date');
    const roomTypeSelect = document.getElementById('room-type');
    const priceInput = document.getElementById('price');
    const toggleCurrencyBtn = document.getElementById('toggle-currency');
    const currencyLabel = document.getElementById('currency-label');
    
    let currentCurrency = 'SAR'; // العملة الافتراضية: ريال سعودي
    const conversionRate = 3.75; // 1 دولار = 3.75 ريال
    
    // أسعار الغرف لكل ليلة (بالريال)
    const roomRates = {
      luxury: 300,  // شقة عادية
      family: 500   // شقة عائلية
    };
    
    function calculatePrice() {
      const arrival = new Date(arrivalDate.value);
      const departure = new Date(departureDate.value);
      if(arrival && departure && departure > arrival) {
        const diffTime = Math.abs(departure - arrival);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const roomType = roomTypeSelect.value;
        let totalPrice = roomRates[roomType] * diffDays;
        if(currentCurrency === 'USD'){
          totalPrice = (totalPrice / conversionRate).toFixed(2);
        }
        priceInput.value = totalPrice;
      } else {
        priceInput.value = '';
      }
    }
    
    arrivalDate.addEventListener('change', calculatePrice);
    departureDate.addEventListener('change', calculatePrice);
    roomTypeSelect.addEventListener('change', calculatePrice);
    
    toggleCurrencyBtn.addEventListener('click', function(){
      if(currentCurrency === 'SAR'){
        currentCurrency = 'USD';
        currencyLabel.innerText = 'دولار أمريكي';
      } else {
        currentCurrency = 'SAR';
        currencyLabel.innerText = 'ريال سعودي';
      }
      calculatePrice();
    });
    
    bookingForm.addEventListener('submit', function(event){
      event.preventDefault();
      const bookingDetails = {
        roomType: roomTypeSelect.value,
        phone: document.getElementById('country-code').value + document.getElementById('phone').value,
        arrivalDate: arrivalDate.value,
        departureDate: departureDate.value,
        price: priceInput.value,
        currency: currentCurrency
      };
      localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
      window.location.href = "payment.html";
    });
  });