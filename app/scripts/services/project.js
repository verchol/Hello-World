'use strict';
var fresh = angular.module('codeFreshDemoApp');
fresh.service('Project', ['$http', '$resource',
    function($http, $resource){
       
        var projects =  [
        {
          projectId: 'a5a79888-e49c-42c0-a4d3-27febffcf5b1',
          title: 'Fresh Web Site',
          color: '#1abc9c',
          icon: 'images/user/raziel.png',
          pendingTasks: 4,
          numNotifications: 5,
          lastBuild: 1399766400,
          buildSuccess: true,
          progress: 0.3
        },
        {
          projectId: '3c0a7d0e-8ee4-4a82-b7d7-37c0d0d24e58',
          title: 'Zara',
          color: '#e57c7c',
          icon: '',
          pendingTasks: 5,
          numNotifications: 0,
          lastBuild: 1402913200,
          buildSuccess: false,
          progress: 1
        },
        {
          projectId: '873f7480-d79b-4caa-8561-0d796671b393',
          title: 'Polar Expedition',
          color: '#f1c40f',
          icon: '',
          pendingTasks: 7,
          numNotifications: 0,
          lastBuild: 1402960000,
          buildSuccess: true,
          progress: 0.7
        },
        {
          projectId: '63ec291f-48c7-46ee-90e3-63d13876cc54',
          title: 'Whitewate Rafting',
          color: '#f18833',
          icon: '',
          pendingTasks: 1,
          numNotifications: 1,
          lastBuild: 1402903200,
          buildSuccess: false,
          progress: 0.55
        },
        {
          projectId: '9eee12e4-4e7e-48b1-bcd0-fbbac23c2ad1',
          title: 'Zara',
          color: '#3ca1e7',
          icon: '',
          pendingTasks: 5,
          numNotifications: 0,
          lastBuild: 1402913200,
          buildSuccess: true,
          progress: 0.2
        }
      ];
        var projectTmpl =  {
          projectId: 'a5a79888-e49c-42c0-a4d3-27febffcf5b1',
          title: 'Roy\'s Sheepshed',
          color: '#1abc9c',
          icon: 'images/user/project-icon1.png',
          pendingTasks: 4,
          numNotifications: 5,
          lastBuild: 1399766400,
          buildSuccess: true,
          progress: 0.3
        };
        var project = $resource('/projects', {},
        	{
           all : {method:"GET", url: "/projects/all"},
        	 create : {method:"PUT"},
           deploy :  {
                method:"POST", 
                url : "/projects/:projectName/deploy" ,
                params : {projectName : "@projectName"}
              },
        	 getProject: {
        	 	method:"GET", 
                url : "/projects/:projectName",
                params : {projectName : "@projectName"} 
        	 },
             stopInstance: {
                 method:"GET",
                 url: "/projects/:projectName/stopInstance",
                 params : {projectName : "@projectName"}
             },
             describeInstance: {
                method:"GET",
                url: "/projects/:projectName/describeInstance",
                params : {projectName : "@projectName"}
             },
             getFiles : {
             	method:"GET", 
           	    url : "/projects/:projectName/files",
           	    params : {projectName : "@projectName" , onlynames : true}
           	},

             addNewFile : {
              method:"PUT", 
                url : "/projects/:projectName/files/:fileName" ,
                params : {projectName : "@projectName",fileName : "@fileName", fileContent: "@fileContent" }

              },

              updateFile : {
              method:"POST", 
                url : "/projects/:projectName/files/:fileName" ,
                params : {projectName : "@projectName",fileName : "@fileName"}

              },

              deleteProject : {
              method:"DELETE", 
                url : "/projects/:projectName" ,
                params : {projectName : "@projectName" }
              }
        });
        this.createNew = function(name , templateId)
        {
           var p = _.clone(projectTmpl);
           p.color = 'red';
           p.lastBuild =  "1399766300"
           projects.push(p);
           return p;
           if (!templateId)
           	templateId = 1;
           var proj = project.create({"username": "itai" , "projectName":name, "templateId":templateId});
           
           return proj;
        }  

        this.getProject = function(name)
        {
		   var proj = project.getProject({"username": "itai" , "projectName":name});
           return proj;
        }
        this.getAllProjects = function(refresh)
        {
          if (!refresh) return projects;
        	return project.all();
        }
        this.deployProject = $resource('/project/deploy');

        this.allProjectNames = $resource('/project/allProjects/:username');

        this.deleteProject = function(params ,callback)
        {
          return project.deleteProject(params, callback);
        }

        this.projectTree = $resource('/project/getProjectTree/:username/:projectName');

        this.projectFile = $resource('/project/getProjectFiles/:username/:projectName/:filePath')
        /*missing API
           POST Deploy - project/id/deploy
           POST Create -  project/id/files/ 
           POST UpdateFile - project/id/files/fileId/


        */


        
    }
]);

