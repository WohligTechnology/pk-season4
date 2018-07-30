var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $state, apiService) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

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
            loop: true,
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

//about more modal
$scope.aboutMore = function () {
    $scope.aboutModal= $uibModal.open({
        animation: true,
        templateUrl: 'views/modal/about.html',
        scope: $scope,
        size: 'lg',
    });
};

    //modal example
    $scope.modalOpen = function () {
        $scope.loginModal= $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/login.html',
            scope: $scope,
            size: 'lg',
        });
    };

    //login function
    $scope.login = function (data) {
        console.log("data", data);
        NavigationService.apiCallWithData("User/saveValidUser", data, function (data) {
            if (data.value == true) {
                $state.go("digital-course");
                $scope.loginModal.close();
            } else {
                console.log("invalid Email");
            }
        });
    }

    $scope.homeSlide = [
        'img/small-season3/234.jpg',
        'img/small-season3/235.jpg',
        'img/small-season3/236.jpg',
        'img/small-season3/237.jpg',
        'img/small-season3/238.jpg',
        'img/small-season3/239.jpg',
        'img/small-season3/240.jpg',
        'img/small-season3/241.jpg',
        'img/small-season3/242.jpg',
        'img/small-season3/243.jpg',
        'img/small-season3/244.jpg',
        'img/small-season3/245.jpg',
        'img/small-season3/246.jpg',
        'img/small-season3/247.jpg',
        'img/small-season3/248.jpg',
        'img/small-season3/249.jpg',
        'img/small-season3/250.jpg',
        'img/small-season3/251.jpg',
        'img/small-season3/252.jpg',
        'img/small-season3/253.jpg',
        'img/small-season3/254.jpg',
        'img/small-season3/255.jpg',
        'img/small-season3/256.jpg',
        'img/small-season3/257.jpg',
        'img/small-season3/258.jpg',
        'img/small-season3/259.jpg',
        'img/small-season3/261.jpg',
        'img/small-season3/262.jpg',
        'img/small-season3/263.jpg',
        'img/small-season3/264.jpg',
        'img/small-season3/265.jpg',
        'img/small-season3/266.jpg',
        'img/small-season3/269.jpg',
        'img/small-season3/270.jpg',
        'img/small-season3/271.jpg',
        'img/small-season3/272.jpg',
        'img/small-season3/276.jpg',
        'img/small-season3/277.jpg',
        'img/small-season3/281.jpg',
        'img/small-season3/282.jpg',
        'img/small-season3/283.jpg',
        'img/small-season3/284.jpg',
        'img/small-season3/287.jpg',
        'img/small-season3/288.jpg',
        'img/small-season3/289.jpg',
        'img/small-season3/290.jpg',
        'img/small-season3/291.jpg',
        'img/small-season3/297.jpg',
        'img/small-season3/298.jpg',
        'img/small-season3/299.jpg',
        'img/small-season3/301.jpg',
        'img/small-season3/302.jpg',
        'img/small-season3/303.jpg',
        'img/small-season3/304.jpg',
        'img/small-season3/234.jpg',
        'img/small-season3/233.jpg',
        'img/small-season3/221.jpg',
        'img/small-season3/220.jpg',
        'img/small-season3/216.jpg',
        'img/small-season3/211.jpg',
        'img/small-season3/181.jpg',
        'img/small-season3/182.jpg',
        'img/small-season3/183.jpg',
        'img/small-season3/184.jpg',
        'img/small-season3/185.jpg',
        'img/small-season3/186.jpg',
        'img/small-season3/187.jpg',
        'img/small-season3/188.jpg',
        'img/small-season3/189.jpg',
        'img/small-season3/190.jpg',
        'img/small-season3/191.jpg',
        'img/small-season3/192.jpg',
        'img/small-season3/193.jpg',
        'img/small-season3/194.jpg',
        'img/small-season3/195.jpg',
        'img/small-season3/196.jpg',
        'img/small-season3/197.jpg',
        'img/small-season3/198.jpg',
        'img/small-season3/199.jpg',
        'img/small-season3/200.jpg',
        'img/small-season3/201.jpg',
        'img/small-season3/202.jpg',
        'img/small-season3/203.jpg',
        'img/small-season3/204.jpg',
        'img/small-season3/205.jpg',
        'img/small-season3/206.jpg',
        'img/small-season3/207.jpg',
        'img/small-season3/208.jpg',
        'img/small-season3/209.jpg',
        'img/small-season3/210.jpg',
        'img/small-season3/161.jpg',
        'img/small-season3/162.jpg',
        'img/small-season3/163.jpg',
        'img/small-season3/164.jpg',
        'img/small-season3/165.jpg',
        'img/small-season3/166.jpg',
        'img/small-season3/168.jpg',
        'img/small-season3/169.jpg',
        'img/small-season3/170.jpg',
        'img/small-season3/173.jpg',
        'img/small-season3/174.jpg',
        'img/small-season3/175.jpg',
        'img/small-season3/176.jpg',
        'img/small-season3/177.jpg',
        'img/small-season3/178.jpg',
        'img/small-season3/148.jpg',
        'img/small-season3/143.jpg',
        'img/small-season3/144.jpg',
        'img/small-season3/145.jpg',
        'img/small-season3/146.jpg',
        'img/small-season3/147.jpg',
        'img/small-season3/149.jpg',
        'img/small-season3/152.jpg',
        'img/small-season3/155.jpg',
        'img/small-season3/156.jpg',
        'img/small-season3/157.jpg',
        'img/small-season3/158.jpg',
        'img/small-season3/159.jpg',
        'img/small-season3/160.jpg',
        'img/small-season3/141.jpg',
        'img/small-season3/140.jpg',
        'img/small-season3/139.jpg',
        'img/small-season3/138.jpg',
        'img/small-season3/137.jpg',
        'img/small-season3/136.jpg',
        'img/small-season3/135.jpg',
        'img/small-season3/134.jpg',
        'img/small-season3/133.jpg',
        'img/small-season3/132.jpg',
        'img/small-season3/131.jpg',
        'img/small-season3/130.jpg',
        'img/small-season3/128.jpg',
        'img/small-season3/125.jpg',
        'img/small-season3/91.jpg',
        'img/small-season3/92.jpg',
        'img/small-season3/95.jpg',
        'img/small-season3/96.jpg',
        'img/small-season3/100.jpg',
        'img/small-season3/106.jpg',
        'img/small-season3/109.jpg',
        'img/small-season3/110.jpg',
        'img/small-season3/111.jpg',
        'img/small-season3/113.jpg',
        'img/small-season3/114.jpg',
        'img/small-season3/117.jpg',
        'img/small-season3/119.jpg',
        'img/small-season3/122.jpg',
        'img/small-season3/123.jpg',
        'img/small-season3/72.jpg',
        'img/small-season3/73.jpg',
        'img/small-season3/74.jpg',
        'img/small-season3/75.jpg',
        'img/small-season3/76.jpg',
        'img/small-season3/77.jpg',
        'img/small-season3/78.jpg',
        'img/small-season3/80.jpg',
        'img/small-season3/81.jpg',
        'img/small-season3/82.jpg',
        'img/small-season3/83.jpg',
        'img/small-season3/84.jpg',
        'img/small-season3/85.jpg',
        'img/small-season3/86.jpg',
        'img/small-season3/87.jpg',
        'img/small-season3/88.jpg',
        'img/small-season3/89.jpg',
        'img/small-season3/90.jpg',
        'img/small-season3/1.jpg',
        'img/small-season3/7.jpg',
        'img/small-season3/8.jpg',
        'img/small-season3/21.jpg',
        'img/small-season3/27.jpg',
        'img/small-season3/28.jpg',
        'img/small-season3/30.jpg',
        'img/small-season3/34.jpg',
        'img/small-season3/35.jpg',
        'img/small-season3/36.jpg',
        'img/small-season3/38.jpg',
        'img/small-season3/41.jpg',
        'img/small-season3/42.jpg',
        'img/small-season3/47.jpg',
        'img/small-season3/53.jpg',
        'img/small-season3/54.jpg',
        'img/small-season3/57.jpg',
        'img/small-season3/58.jpg',
        'img/small-season3/61.jpg',
        'img/small-season3/62.jpg',
        'img/small-season3/63.jpg',
        'img/small-season3/64.jpg',
        'img/small-season3/65.jpg',
        'img/small-season3/66.jpg',
        'img/small-season3/67.jpg',
        'img/small-season3/68.jpg',
        'img/small-season3/69.jpg',
        'img/small-season3/70.jpg',
    ];
})