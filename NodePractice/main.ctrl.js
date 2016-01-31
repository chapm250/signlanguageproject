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
    $scope.video = 'videos/and.webm';
    $scope.switchVideo = switchVideo;
    $scope.checkAnswer = checkAnswer;
    $scope.answer = 'remember no upper case & all one word';
    $scope.correctAnswer = '';
    $scope.giveUp = giveUp;
    $scope.changeChapters = changeChapters;
    $scope.currentChapter = 'videos';

    //function switchVideo() {
    //    $scope.video = 'videos/test3.webm';
    //
    //}

    function switchVideo() {
        buttonApi.switchVideo()
            .success(function(data){
                $scope.video = data;
                $scope.correctAnswer = '';
                $scope.answer = 'remember no upper case & all one word'
            })
            .error(function() {
                console.log("fuck");
            })
    }
    function checkAnswer(guess) {
        guess = $scope.currentChapter + '/' + guess + '.webm';
        if(guess == $scope.video){
            $scope.answer = 'Correct!!!!';
        } else {
            
            $scope.answer = 'WRONG BITCH'

        }

    }

    function changeChapters(chapter) {
        buttonApi.changeChapters(chapter)
            .success(function(data){
            $scope.video = data;
                $scope.currentChapter = chapter;
            })
    }
    function giveUp() {
        $scope.correctAnswer = 'Dont be a quitter the answer is... ' + $scope.video.substring(7, $scope.video.length - 5);
    }
}

function buttonApi($http,apiUrl){
    return {
        switchVideo: function() {
            var url = apiUrl + '/switchVideo';
            return $http.get(url);
        },
        changeChapters: function(chapter) {
            var url = apiUrl + '/changeChapters?chapter=' + chapter;
            return $http.get(url);
        }
    };
}