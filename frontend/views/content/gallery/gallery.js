
myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/gallery/gallery.html");
    TemplateService.title = "Gallery"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.cssMain = "header-icons";
})