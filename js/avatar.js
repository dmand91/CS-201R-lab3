var app = angular.module('app', [])
.directive('avatar',avatarDirective);

app.controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
  $scope.users = [{
    name: 'Mikey Murphy',
    avatarUrl: 'https://pbs.twimg.com/profile_images/621816592519688192/U8sbRNik.jpg',
    number:'7'
  }];
  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url,
      number:user.number
    });
    user.name = '';
    user.url = '';
    user.number='';
  };
 


}
//Math.floor((Math.random() * 10) + 1);
function avatarDirective () {
  return {
    scope: {
      user: '=' /* [1] */
    },
    restrict: 'E', /* [2] */
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
        '<h4>Age: {{user.number}}'+
      '</div>'
    ), /* [3] */
    link: link
  };
  
  function link (scope) { /* [4] */
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
    }
  }

}
