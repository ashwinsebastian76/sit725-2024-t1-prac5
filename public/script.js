document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

$(document).ready(function () {
  $.get('/cars', function (cars) {
      var cardSection = $('#cards');
      cars.forEach(car => {
          var cardHtml = `
          <div class="col s12 m4">
          <div class="card">
              <div class="card-image">
                  <img src="${car.imageURL}">
                  <span class="card-title">"${car.bid}"</span>
              </div>
              <div class="card-content">
                  <p>"${car.phone}"</p>
              </div>
          </div>
      </div>`;
          cardSection.append(cardHtml);
      });
  });
});