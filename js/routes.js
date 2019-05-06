angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.iNCIO'
      2) Using $state.go programatically:
        $state.go('tabsController.iNCIO');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab3/page2
  */
  .state('tabsController.iNCIO', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/iNCIO.html',
        controller: 'iNCIOCtrl'
      },
      'tab3': {
        templateUrl: 'templates/iNCIO.html',
        controller: 'iNCIOCtrl'
      }
    }
  })

  .state('tabsController.mINHACONTA', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/mINHACONTA.html',
        controller: 'mINHACONTACtrl'
      }
    }
  })

  .state('tabsController.eNCOMENDAS', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/eNCOMENDAS.html',
        controller: 'eNCOMENDASCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.pedidoEnviado', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/pedidoEnviado.html',
        controller: 'pedidoEnviadoCtrl'
      }
    }
  })

  .state('criarConta', {
    url: '/page7',
    templateUrl: 'templates/criarConta.html',
    controller: 'criarContaCtrl'
  })

  .state('sucesso', {
    url: '/page8',
    templateUrl: 'templates/sucesso.html',
    controller: 'sucessoCtrl'
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')


});