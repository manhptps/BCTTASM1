app.controller("CartCtrl", function ($scope, $routeParams, $rootScope, $location) {
    console.log($rootScope.cart);

    $scope.addToCart = function (id) {

        $rootScope.cart.push($rootScope.products[id]);
        console.log($rootScope.cart); 
        
// sp có trong cart
     
    }

    $scope.remove = function (index) {
        $rootScope.cart.splice(index, 1);
        console.log($rootScope.cart);
    };
    console.log($rootScope.cart);
    $scope.products = $rootScope.cart ;

    
})