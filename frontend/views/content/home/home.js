var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $timeout(function () {
        mySwiper = new Swiper('.swiper-container', {
            initialSlide: 3,
            autoplay: {
                delay: 1200,
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }, 10);

    $scope.suppliers = [{
        name: "Casey Slusse",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024587 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Dee Schlatter",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024588 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Byron Mccully",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024589 invoice is Pending",
        img: 'img/mike.png'
    }, {
        name: " Prince Stucky",
        supplier: "Regular Fit Cotton Top",
        invoice: "#1024590 invoice is Pending",
        img: 'img/mike.png'
    }];

    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };

    // $scope.openLogin = function () {
    //     $scope.login = $uibModal.open({
    //         templateUrl: 'views/modal/login.html',            
    //         animation: animationsEnabled,
    //         component: 'modalComponent',
    //         resolve: {
    //             items: function () {
    //                 return items;
    //             }
    //         }
    //     });
    // }

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [{
            stateOn: 'glyphicon-ok-sign',
            stateOff: 'glyphicon-ok-circle'
        },
        {
            stateOn: 'glyphicon-star',
            stateOff: 'glyphicon-star-empty'
        },
        {
            stateOn: 'glyphicon-heart',
            stateOff: 'glyphicon-ban-circle'
        },
        {
            stateOn: 'glyphicon-heart'
        },
        {
            stateOff: 'glyphicon-off'
        }
    ];
})