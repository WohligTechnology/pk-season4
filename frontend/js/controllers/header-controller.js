myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".img-width-change").css("width", '7%');

        } else {
            $(".img-width-change").css("width", '22%');
        }
    });
});