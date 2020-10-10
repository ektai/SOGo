!function(){"use strict";function e(e,a,n){e.state("calendars",{url:"/calendar",views:{calendars:{templateUrl:"UIxCalMainView",controller:"CalendarsController",controllerAs:"app"}},resolve:{stateCalendars:r}}).state("calendars.view",{url:"/{view:(?:day|week|month|multicolumnday)}/{day:[0-9]{8}}",views:{calendarView:{templateUrl:function(e){return e.view+"view?day="+e.day},controller:"CalendarController",controllerAs:"calendar"}},resolve:{stateEventsBlocks:t}}),a.rules.when("/calendar/day",function(){return"/calendar/day/"+(new Date).getDayString()}),a.rules.when("/calendar/multicolumnday",function(){return"/calendar/multicolumnday/"+(new Date).getDayString()}),a.rules.when("/calendar/week",function(){return"/calendar/week/"+(new Date).getDayString()}),a.rules.when("/calendar/month",function(){return"/calendar/month/"+(new Date).getDayString()}),a.rules.otherwise("/calendar/week")}function r(e){return e.$calendars||e.$findAll(window.calendarsData)}function t(e,a,n){return a.$eventsBlocksForView(e.view,e.day.asDate()).then(function(e){return _.forEach(e,function(e){e.id&&(e.calendar=new n({id:e.id,name:e.calendarName}))}),e})}function a(e,a,n,r,t,l){if(e.DebugEnabled||t.defaultErrorHandler(function(){}),n.onError({to:"calendars.**"},function(e){"calendars"==e.to().name||e.ignored()||(a.error("transition error to "+e.to().name+": "+e.error().detail),t.go({state:"calendars"}))}),0===r.url().length){var o="/calendar/",i=/(.+)view/.exec(l.settings.Calendar.View);o+=i?i[1]:"week";var d=new Date;if(l.defaults.SOGoCalendarWeekdays)for(var c=["SU","MO","TU","WE","TH","FR","SA"],s=c[d.getDay()];l.defaults.SOGoCalendarWeekdays.indexOf(s)<0;)d.addDays(1),s=c[d.getDay()];o+="/"+d.getDayString(),r.replace().url(o)}}angular.module("SOGo.SchedulerUI",["ngCookies","ui.router","angularFileUpload","sgCkeditor","SOGo.Common","SOGo.PreferencesUI","SOGo.ContactsUI","SOGo.MailerUI","as.sortable"]).config(e).run(a),e.$inject=["$stateProvider","$urlServiceProvider","$mdThemingProvider"],r.$inject=["Calendar"],t.$inject=["$stateParams","Component","Calendar"],a.$inject=["$window","$log","$transitions","$location","$state","Preferences"]}();
//# sourceMappingURL=Scheduler.js.map