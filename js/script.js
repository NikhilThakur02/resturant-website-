function initMap() {
    const restaurantLocation = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: restaurantLocation,
    });
    const marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: "Restaurant Name",
    });
}


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});


document.addEventListener("scroll", function() {
    const contactSection = document.querySelector('.contact-us h2');
    const contactContent = document.querySelector('.contact-content');
    
    const boundingTitle = contactSection.getBoundingClientRect();
    const boundingContent = contactContent.getBoundingClientRect();

    if (boundingTitle.top < window.innerHeight && boundingTitle.bottom >= 0) {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
    }

    if (boundingContent.top < window.innerHeight && boundingContent.bottom >= 0) {
        contactContent.classList.add('in-view');
    }
});