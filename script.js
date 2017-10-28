$(function () {
    var plant = $("#plant"), animal = $("#animal"),
        plantNavigation = $('<div class="navigation"></div>'),
        animalNavigation = $('<div class="navigation"></div>'),
        initialize = function (container, navigation) {
            container.children().each(function (i) {
                var navigationIcon = $('<span class="icon"></span>');
                navigationIcon.click(function () {
                    activate(container, i);
                });
                navigation.append(navigationIcon);
            });
            container.append(navigation);
        },
        activate = function (container, i) {
            container.children(".navigation").children().each(function () {
                $(this).removeClass("active");
            });
            container.children(".navigation").children().eq(i).addClass("active");
            container.children(":not(.navigation)").each(function () {
                $(this).removeClass("active");
            });
            container.children().eq(i).addClass("active");
        };

    initialize(plant, plantNavigation);
    initialize(animal, animalNavigation);

    activate(plant, 0);
    activate(animal, 0);
});