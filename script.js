$(function () {
    var plant = $("#plant"), animal = $("#animal"),
        plantNavigation = $('<div class="navigation"></div>'),
        animalNavigation = $('<div class="navigation"></div>'),
        initialize = function (container, navigation) {
            container.children().each(function () {
                navigation.append($('<span class="icon"></span>'));
            });
            container.append(navigation);
            container.click(function (event) {
                var total = container.children(":not(.navigation)").length,
                    current = container.children(".active").index(),
                    next = current + 1,
                    target = $(event.target);
                if (target.is(".icon")){
                    activate(container, target.index());
                } else {
                    if (next === total){
                        next = 0;
                    }
                    activate(container, next);
                }
            });
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

    $("h1").click(function () {
        $(this).html('Kliknij poniżej. Wybierz jedną ze stron');
    });
});