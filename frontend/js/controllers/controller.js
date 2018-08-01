myApp.controller('LinksCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/links.html");
        TemplateService.title = "Links"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    })

    //Footer Controller
    .controller('FooterCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $state,$uibModal) {
        $scope.goToAnchor = function (id) {
            console.log("inside anchor", id)
            $state.go('home');
            if (id) {
                $timeout(function () {
                    $('html,body').animate({
                        scrollTop: $('#' + id).offset().top - 0
                    }, "slow");
                }, 500);
            }
        };
        //modal example
        $scope.modalOpen = function () {
            $scope.loginModal = $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/login.html',
                scope: $scope,
                size: 'lg',
            });
        };
    });
// .controller('FooterCtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
//     console.log("inside anchor")
//     apiService.getDemo($scope.formData, function (data) {
//         console.log(data);
//     });
//     $scope.goToAnchor = function (id) {
//         console.log("inside anchor",id)
//         $state.go('home');
//         if (id) {
//             $timeout(function () {
//                 $('html,body').animate({
//                     scrollTop: $('#' + id).offset().top - 70
//                 }, "slow");
//             }, 500);
//         }
//     };
// });