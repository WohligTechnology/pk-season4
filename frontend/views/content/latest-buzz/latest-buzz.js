myApp.controller('LatestCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $state) {
    $scope.template = TemplateService.getHTML("content/latest-buzz/latest-buzz.html");
    TemplateService.title = "Latest Buzz"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.cssMain = "header-icons";
    $scope.blog="stock-market";
    $scope.changeBlog = function (blogname) {
        $scope.blog=blogname;
        console.log("$scope.blog",$scope.blog)
        $state.go('latest-buzz', {
            'name': blog
        });
    }
})