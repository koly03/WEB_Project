// const primaryNav = document.querySelector('.primary-navigation');
// const navToggle = document.querySelector('.mobile-nav-toggle');



document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылку на кнопку и список навигации
    var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    var primaryNavigation = document.querySelector('.primary-navigation');

    // При клике на кнопку
    mobileNavToggle.addEventListener('click', function() {
        // Проверяем, открыто ли меню навигации
        var isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        

        // Меняем состояние кнопки на противоположное
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);

        // Переключаем видимость списка навигации
        if (isExpanded) {
            // Если меню открыто, закрываем его
            primaryNavigation.style.display = 'none';
            mobileNavToggle.classList.remove('open');

        } else {
            // Если меню закрыто, открываем его
            primaryNavigation.style.display = 'flex';
            mobileNavToggle.classList.add('open');
        }
    });
});