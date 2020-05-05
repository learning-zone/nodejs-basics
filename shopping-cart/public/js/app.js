var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider) {
  
  $routeProvider.when('/',{
         templateUrl :"../html/customers.html",
         controller: "customerCtrl"
  }).when('/add_customer',{
         templateUrl: "../html/add_customer.html",
        controller: "customerCtrl"
  }).when('/edit_customer/:operation/:customerId',{
     templateUrl: "../html/edit_customer.html",
    controller: "customerCtrl"
  }).when('/delete_customer/:operation/:customerId',{
     templateUrl: "../html/edit_customer.html",
    controller: "customerCtrl"
  });

});

app.controller('customerCtrl',function($scope, $http, $location, $routeParams){
  $scope.customers = [];  
  $scope.customerToEdit ={};  
  
  $scope.getCustomers = function(){

    $http({
          method:"GET",
          url:" http://localhost:4300/customers"
      }).then(function successCallback(res){
          $scope.customers = res.data;
      }, function failureCallback(res){
          $scope.errorMsg=res.statusText;
      });

  };
   
  $scope.addCustomers = function(student){

    $http({
          method:"POST",
          url:" http://localhost:4300/customers/add",
          data: JSON.stringify(student)
      }).then(function successCallback(res){
          if(res.data === 'success'){
            $location.path("/");
          }
      }, function failureCallback(res){
          $scope.errorMsg=res.statusText;
      });

  };

   $scope.getCustomerById = function(id){

    $http({
          method:"GET",
          url:" http://localhost:4300/customers/edit/"+id,
      }).then(function successCallback(res){
            $scope.customerToEdit =  res.data[0];
           console.log('get Customer Info', $scope.customerToEdit );
      }, function failureCallback(res){
          $scope.errorMsg=res.statusText;
      });

  };

  $scope.updateCustomer = function(customerToEdit){

    $http({
          method:"POST",
          url:" http://localhost:4300/customers/edit/"+customerToEdit.id,
          data: JSON.stringify(customerToEdit)
      }).then(function successCallback(res){
            $location.path("/");
      }, function failureCallback(res){
          $scope.errorMsg=res.statusText;
      });

  };

   $scope.deleteCustomer = function(customerId){

    $http({
          method:"GET",
          url:" http://localhost:4300/customers/delete/"+customerId
      }).then(function successCallback(res){
            $location.path("/");
      }, function failureCallback(res){
          $scope.errorMsg=res.statusText;
      });

  };


  $scope.cancelAdd = function(){
      $location.path("/");
  }

  $scope.init = function(){
     
     var customerId = $routeParams.customerId;
     var operation = $routeParams.operation;

     if(operation === 'edit'){
        $scope.getCustomerById(customerId);
     }else if(operation === 'delete'){
        $scope.deleteCustomer(customerId);
     }else{
        $scope.getCustomers();
     }
    
  };

  $scope.init();

});
