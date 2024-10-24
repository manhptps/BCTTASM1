app.controller("mainController", function ($scope, $routeParams, $rootScope, $location, $http) {
    $rootScope.cart = [];
    $rootScope.number = 0;
    $rootScope.products = [];
    $http.get('js/data.json').then(
        function(res){
            $rootScope.products = res.data;
            console.log($rootScope.products)
        },
        function(err){
            alert('Lỗi');
        }
    )
    $scope.addToCart = function (id) {
        $rootScope.cart.push($rootScope.products[id]);
        console.log($rootScope.cart); 
}

})