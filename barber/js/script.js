const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || 
        isMobile.BlackBerry() || 
        isMobile.iOS() || 
        isMobile.Opera() || 
        isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuCircles = document.querySelectorAll('.menu__arrow');
    if (menuCircles.length > 0) {
        for (let index = 0; index < menuCircles.length; index++) {
            const menuCircle = menuCircles[index];
            menuCircle.addEventListener("click", function (e) {
                menuCircle.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}



