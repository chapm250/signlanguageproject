/**
 * Created by josh on 1/29/16.
 */

//angular.module('app')
//    .controller("MainController", function(){
//    var vm = this;
//
//    vm.video = 'videos/test1.webm';
//});

angular.module('buttons',[])
    .controller('buttonCtrl',ButtonCtrl)
    .factory('buttonApi',buttonApi)
    .constant('apiUrl','http://localhost:1338');


function ButtonCtrl($scope, buttonApi){
    $scope.video = 'videos/test1.webm';
    $scope.switchVideo = switchVideo;

    //function switchVideo() {
    //    $scope.video = 'videos/test3.webm';
    //
    //}

    function switchVideo() {
        buttonApi.switchVideo()
            .success(function(data){
                $scope.video = data;
            })
            .error(function() {
                console.log("fuck");
            })

    }
}

function buttonApi($http,apiUrl){
    return {
        switchVideo: function() {
            var url = apiUrl + '/switchVideo';
            return $http.get(url);
        }
    };
}