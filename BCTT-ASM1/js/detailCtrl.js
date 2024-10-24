app.controller('detailCtrl',function($scope,$routeParams,$rootScope){
    $scope.addToCart = function (id) {
        var inCart = false;
        var sp = $rootScope.products[id];
        $rootScope.cart.push($rootScope.products[id]);
        console.log($rootScope.cart); 
        $rootScope.number= $rootScope.cart.length;
    }

    var id = $routeParams.id2;
    console.log(id);

    $scope.ListItem = $rootScope.products;
    var item;
    for(var i = 0; i < $scope.ListItem.length; i++) {
        if($scope.ListItem[i].id == id) {
            item = $scope.ListItem[i];
        }
    }
    console.log(item)
    $scope.img = item.img;
    $scope.price = item.price;
    $scope.name = item.name;
    $scope.mota = item.mota;

})