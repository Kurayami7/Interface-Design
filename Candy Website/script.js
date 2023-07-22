function toggleAside(event, asideToShow) {
    const ingredientsAside = document.getElementById('ingredients');
    const nutritionalInfoAside = document.getElementById('nutritional-values');
  
    if (asideToShow === 'ingredients') {
      ingredientsAside.style.display = 'flex';
      nutritionalInfoAside.style.display = 'none';
    } else if (asideToShow === 'nutritional-values') {
      ingredientsAside.style.display = 'none';
      nutritionalInfoAside.style.display = 'flex';
    }

    event.preventDefault();
  }
  