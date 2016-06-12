/* jshint ignore:start */
angular.module('theme.core.templates', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('templates/calendar.html',
    "    <ol class=\"breadcrumb\">\n" +
    "        <li><a href=\"#/\">Dashboard</a></li>\n" +
    "        <li class=\"active\">Calendar</li>\n" +
    "    </ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"CalendarController\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <div class=\"panel panel-transparent calendar\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h2>Basic Calendar</h2>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div class=\"alert alert-info\">Click on a date to create an event, drag &amp; drop to move events or extend time ranges</div>\n" +
    "                <div data-make-full-calendar=\"{ events: demoEvents }\" ng-model=\"demoEvents\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"panel panel-transparent\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h2>Calendar with External Drag &amp; Drop</h2>\n" +
    "                <div class=\"options\">\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div class=\"row\">\n" +
    "                <div id=\"el\"></div>\n" +
    "                    <div id='external-events' class=\"col-sm-3\">\n" +
    "                        <h4>Draggable Events</h4>\n" +
    "                        <form ng-submit=\"addEvent()\" style=\"margin-bottom: 10px;\" class=\"clearfix\">\n" +
    "                            <label for=\"\" class=\"control-label\">Enter a name for an event:</label>\n" +
    "                            <input type=\"text\" ng-model=\"newEvent\" class=\"form-control\" style=\"margin-bottom: 10px;\" placeholder=\"Event Name...\">\n" +
    "                            <button class=\"btn btn-primary pull-left\" ng-click=\"addEvent()\">Create Event</button>\n" +
    "                        </form>\n" +
    "                        <div ng-repeat=\"event in events\">\n" +
    "                            <div class='external-event label label-info' data-draggable-event=\"{ title: event.title }\" >{{event.title}}</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div data-make-full-calendar=\"{ defaultView: 'agendaWeek', droppable: true, removeDroppedEvent: true }\" class=\"col-sm-9\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/charts-flot.html',
    "    <ol class=\"breadcrumb\">\n" +
    "        <li><a href=\"#/\">Dashboard</a></li>\n" +
    "        <li>Charts</li>\n" +
    "        <li class=\"active\">Flot</li>\n" +
    "    </ol>\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"FlotChartsController\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <panel heading=\"Interacting with data point\">\n" +
    "                <div flot-chart style=\"width: 100%; height:350px\" \n" +
    "                    data-flot-data=\"sinusoidalData\"\n" +
    "                    data-flot-options=\"sinusoidalOptions\"\n" +
    "                    data-plot-hover=\"onHover(event, position, item)\"\n" +
    "                    data-plot-click=\"onClick(event, position, item)\"></div>\n" +
    "            </panel>\n" +
    "            <panel heading=\"Multiple Graph Types In One\">\n" +
    "                <div flot-chart style=\"width: 100%; height:350px\" \n" +
    "                    data-flot-data=\"multigraphData\"\n" +
    "                    data-flot-options=\"multigraphOptions\"\n" +
    "                ></div>\n" +
    "            </panel>\n" +
    "            <panel heading=\"Live Dynamic\">\n" +
    "                <div flot-chart style=\"width: 100%; height:350px\" \n" +
    "                    data-flot-data=\"realtimeData\"\n" +
    "                    data-flot-options=\"realtimeOptions\"\n" +
    "                ></div>\n" +
    "            </panel>\n" +
    "            <panel heading=\"Stacked\">\n" +
    "                <div flot-chart style=\"width: 100%; height:350px\" \n" +
    "                    data-flot-data=\"stackedData\"\n" +
    "                    data-flot-options=\"stackedOptions\"\n" +
    "                ></div>\n" +
    "\n" +
    "                <p class=\"stackControls pull-left\">\n" +
    "                    <button class=\"btn btn-primary\" ng-click=\"setOption('Stack')\" ng-show=\"!stackedIsTrue\">With stacking</button>\n" +
    "                    <button class=\"btn btn-primary\" ng-click=\"setOption('Unstack')\" ng-show=\"stackedIsTrue\">Without stacking</button>\n" +
    "                </p>\n" +
    "                \n" +
    "                <p class=\"graphControls pull-right\">\n" +
    "                    <button class=\"btn btn-midnightblue-alt\" ng-click=\"setOption('Bars')\">Bars</button>\n" +
    "                    <button class=\"btn btn-midnightblue-alt\" ng-click=\"setOption('Lines')\">Lines</button>\n" +
    "                    <button class=\"btn btn-midnightblue-alt\" ng-click=\"setOption('Steps')\">Lines with steps</button>\n" +
    "                </p>\n" +
    "            </panel>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <panel heading=\"Pie\">\n" +
    "                <div flot-chart style=\"width: 100%; height:350px\" \n" +
    "                    data-flot-data=\"pieData\"\n" +
    "                    data-flot-options=\"pieOptions\"\n" +
    "                ></div>\n" +
    "            </panel>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <panel heading=\"Donut\">\n" +
    "                <div flot-chart style=\"width: 100%; height:350px\" \n" +
    "                    data-flot-data=\"pieData\"\n" +
    "                    data-flot-options=\"donutOptions\"\n" +
    "                ></div>\n" +
    "            </panel>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/nav_renderer.html',
    "<span ng-if=\"item.separator==true\">{{item.label}}</span>\n" +
    "<a ng-if=\"!item.separator\" ng-click=\"select(item)\" ng-href=\"{{item.url}}\">\n" +
    "  <i ng-if=\"item.iconClasses\" class=\"{{item.iconClasses}}\"></i><span>{{item.label}}</span>\n" +
    "  <span ng-bind-html=\"item.html\"></span>\n" +
    "</a>\n" +
    "<ul ng-if=\"item.children.length\" data-slide-out-nav=\"item.open || (searchQuery.length>0 && item.selected)\">\n" +
    "    <li ng-repeat=\"item in item.children\"\n" +
    "      ng-class=\"{ hasChild: (item.children!==undefined),\n" +
    "                      active: item.selected,\n" +
    "                        open: (item.children!==undefined) && item.open,\n" +
    "              'search-focus': (searchQuery.length>0 && item.selected) }\"\n" +
    "    ng-show=\"!(searchQuery.length>0 && !item.selected)\"\n" +
    "      ng-include=\"'templates/nav_renderer.html'\"\n" +
    "    ></li>\n" +
    "</ul>"
  );


  $templateCache.put('templates/nav_renderer_horizontal.html',
    "<a ng-click=\"select(item)\" ng-href=\"{{item.url}}\">\n" +
    "\t<i ng-if=\"item.iconClasses\" class=\"{{item.iconClasses}}\"></i><span>{{item.label}}</span>\n" +
    "</a>\n" +
    "<ul ng-if=\"item.children.length\" class=\"dropdown-menu\">\n" +
    "\t<li ng-repeat=\"item in item.children\"\n" +
    "    \tng-class=\"{ hasChild: (item.children!==undefined),\n" +
    "        \t\t\t  active: item.selected,\n" +
    "\t\t\t\t\t\topen: (item.children!==undefined) && item.open }\"\n" +
    "      ng-include=\"'templates/nav_renderer_horizontal.html'\"\n" +
    "    ></li>\n" +
    "</ul>\n"
  );


  $templateCache.put('templates/panel-tabs-without-heading.html',
    "<div class=\"panel {{panelClass}}\">\n" +
    "  <div class=\"panel-heading\" ng-attr-ng-drag-handle=\"{{draggable}}\">\n" +
    "        <h2>\n" +
    "            <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "        </h2>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"tab-content\">\n" +
    "        <div class=\"tab-pane\"\n" +
    "            ng-repeat=\"tab in tabs\"\n" +
    "            ng-class=\"{active: tab.active}\"\n" +
    "            tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/panel-tabs.html',
    "<div class=\"panel {{panelClass}}\">\n" +
    "  <div class=\"panel-heading\" ng-attr-ng-drag-handle=\"{{draggable}}\">\n" +
    "        <h2><i ng-if=\"panelIcon\" class=\"{{panelIcon}}\"></i>{{(panelIcon? \" \":\"\")+heading}}</h2>\n" +
    "        <div class=\"panel-ctrls\">\n" +
    "            <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "        </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\">\n" +
    "    <div class=\"tab-content\">\n" +
    "        <div class=\"tab-pane\"\n" +
    "            ng-repeat=\"tab in tabs\"\n" +
    "            ng-class=\"{active: tab.active}\"\n" +
    "            tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/panel.html',
    "<div class=\"panel {{panelClass}}\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "        <h2><i ng-if=\"panelIcon\" class=\"{{panelIcon}}\"></i>{{(panelIcon? \" \":\"\")+heading}}</h2>\n" +
    "        <div class=\"panel-ctrls\">\n" +
    "        </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel-body\" ng-transclude>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/tables-data.html',
    "    <ol class=\"breadcrumb\">\n" +
    "        <li><a href=\"#/\">Dashboard</a></li>\n" +
    "        <li>Advanced Tables</li>\n" +
    "        <li class=\"active\">Data Tables</li>\n" +
    "    </ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"TablesAdvancedController\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "      \n" +
    "            <!-- <panel panel-class=\"panel-primary\" data-heading=\"Table With Pagination and Async Data\">\n" +
    "                <alert>This is an advanced demonstration of ngGrid's remote data and pagination capabilities. Please check <a target=\"_blank\" href=\"http://angular-ui.github.io/ng-grid/\">the official docs</a> for more information.</alert>\n" +
    "\n" +
    "                <div class=\"input mb-md\">\n" +
    "                    <input type=\"text\" ng-model=\"filterOptions.filterText\" class=\"form-control\" placeholder=\"Search filter...\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"height: 400px;\" ng-grid=\"gridOptions\"></div>\n" +
    "\n" +
    "            </panel> -->\n" +
    "\n" +
    "            <div class=\"panel panel-transparent\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h2>Table With Pagination and Async Data</h2>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"alert alert-inverse mb-xl\">This is an advanced demonstration of ngGrid's remote data and pagination capabilities. Please check <a target=\"_blank\" href=\"http://angular-ui.github.io/ng-grid/\">the official docs</a> for more information.</div>\n" +
    "\n" +
    "                    <div class=\"input mb-xl\">\n" +
    "                        <input type=\"text\" ng-model=\"filterOptions.filterText\" class=\"form-control\" placeholder=\"Search filter...\">\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"panel\">\n" +
    "                        <div class=\"panel-body no-padding\">\n" +
    "                            <div style=\"height: 512px;\" ng-grid=\"gridOptions\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/themed-tabs-bottom.html',
    "<div class=\"tab-container tab-{{theme || 'primary'}} tab-{{position || 'normal'}}\">\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\"\n" +
    "        ng-repeat=\"tab in tabs\"\n" +
    "        ng-class=\"{active: tab.active}\"\n" +
    "        tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/themed-tabs.html',
    "<div class=\"tab-container tab-{{theme || 'primary'}} tab-{{position || 'normal'}}\">\n" +
    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\"\n" +
    "        ng-repeat=\"tab in tabs\"\n" +
    "        ng-class=\"{active: tab.active}\"\n" +
    "        tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/tile-large.html',
    "<a class=\"info-tile tile-{{item.color}}\" ng-href=\"{{item.href}}\">\n" +
    "    <div class=\"tile-heading\">\n" +
    "        <span>{{item.title}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"tile-icon\">\n" +
    "    \t<i class=\"{{item.classes}}\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"tile-body\">\n" +
    "        <span ng-show=\"item.text\">{{item.text}}</span>\n" +
    "        <span ng-show=\"!item.text\" ng-transclude></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tile-footer\">\n" +
    "\t    <span class=\"text-{{item.infoClass}}\">{{item.titleBarInfo}}</span>\n" +
    "    </div>\n" +
    "</a>\n"
  );


  $templateCache.put('templates/ui-alerts.html',
    "<style>\n" +
    "\t/* page-specific styling */\n" +
    "\t.btn-block {margin-bottom: 10px;}\n" +
    "</style>\n" +
    "\n" +
    "    <ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Components</li>\n" +
    "\t\t<li class=\"active\">Alerts</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"AlertsController\">\n" +
    "  <tabset panel-tabs=\"true\" panel-class=\"panel-transparent\" heading=\"Alerts\">\n" +
    "    <tab>\n" +
    "      <tab-heading><i class=\"ti ti-desktop\"></i></tab-heading>\n" +
    "      \t<p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages</p>\n" +
    "\t\t<alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\"><span ng-bind-html=\"alert.msg | safe_html\"></span></alert>\n" +
    "\t\t<button class='btn btn-default' ng-click=\"addAlert()\">Add Alert</button>\n" +
    "    </tab>\n" +
    "    <tab>\n" +
    "    \t<tab-heading><i class=\"ti ti-settings\"></i></tab-heading>\n" +
    "        <tabset>\n" +
    "        \t<tab heading=\"HTML\">\n" +
    "<pre class=\"prettyprint\">\n" +
    "&lt;alert type=\"{{alert.type}}\"&gt;&lt;span ng-bind-html=\"alert.msg | safe_html\"></span>&lt;/alert&gt;\n" +
    "</pre>\n" +
    "\t\t\t</tab>\n" +
    "        \t<tab heading=\"JavaScript\">\n" +
    "<pre class=\"prettyprint\">\n" +
    "// in the controller\n" +
    "$scope.alert = { type: 'success', msg: '<strong>Well done!</strong> You successfully read this important alert message.' };\n" +
    "</pre>\n" +
    "        \t</tab>\n" +
    "        </tabset>\n" +
    "\t\t<alert type=\"success\"><span ng-bind-html=\"'<strong>Well done!</strong> You successfully read this important alert message.' | safe_html\"></span></alert>\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
    "\n" +
    "  <panel panel-class=\"panel-transparent\" heading=\"Alert Blocks\">\n" +
    "\t\t<p>Alerts can contain more than a line of messege. They can be extended with to focus on a particular messege.</p>\n" +
    "\t\t<alert type=\"success\" ng-show=\"!hideAlert1\">\n" +
    "\t\t\t<h4>Well done!</h4>\n" +
    "\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t<p><button class=\"btn btn-success\" ng-click=\"$parent.$parent.hideAlert1=true\">Okay</button></p>\n" +
    "\t\t</alert>\n" +
    "\t\t<alert type=\"info\" ng-show=\"!hideAlert2\">\n" +
    "\t\t\t<h4>Heads up!</h4>\n" +
    "\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t<p><button class=\"btn btn-primary\" ng-click=\"$parent.$parent.hideAlert2=true\">Alright</button></p>\n" +
    "\t\t</alert>\n" +
    "\t\t<alert type=\"warning\" ng-show=\"!hideAlert3\">\n" +
    "\t\t\t<h4>Warning!</h4>\n" +
    "\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t<p><button class=\"btn btn-warning\" ng-click=\"$parent.$parent.hideAlert3=true\">Do Something</button></p>\n" +
    "\t\t</alert>\n" +
    "\t\t<alert type=\"danger\" ng-show=\"!hideAlert4\">\n" +
    "\t\t\t<h4>Oh Snap!</h4>\n" +
    "\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t<p><button class=\"btn btn-danger\" ng-click=\"$parent.$parent.hideAlert4=true\">What To Do?</button></p>\n" +
    "\t\t</alert>\n" +
    "  </panel>\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/ui-breadcrumbs.html',
    "    <ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Components</li>\n" +
    "\t\t<li class=\"active\">Tiles</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "<div class=\"container-fluid\">\n" +
    "\t\t\t<div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"panel panel-transparent\">\n" +
    "                      <div class=\"panel-heading\">\n" +
    "                            <h2>Breadcrumbs</h2>\n" +
    "                            <div class=\"options\">\n" +
    "                            <ul class=\"nav nav-tabs\">\n" +
    "                              <li class=\"active\"><a href=\"#domwell\" data-toggle=\"tab\"><i class=\"ti ti-desktop\"></i></a></li>\n" +
    "                              <li><a href=\"#codewell\" data-toggle=\"tab\"><i class=\"ti ti-settings\"></i></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"panel-body\">\n" +
    "                        <p>Indicate the current page's location within a navigational hierarchy. Just add <code>.breadcrumb</code> to any ordered or un-ordered list</p>\n" +
    "                        <div class=\"tab-content\">\n" +
    "                            <div class=\"tab-pane active\" id=\"domwell\">\n" +
    "                                <div class=\"demo-example\">\n" +
    "                                    <ol class=\"breadcrumb\">\n" +
    "                                      <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "                                    </ol>\n" +
    "                                    <ol class=\"breadcrumb\">\n" +
    "                                      <li><a href=\"#\">Home</a></li>\n" +
    "                                      <li class=\"active\">Library</li>\n" +
    "                                    </ol>\n" +
    "                                    <ol class=\"breadcrumb\">\n" +
    "                                      <li><a href=\"#\">Home</a></li>\n" +
    "                                      <li><a href=\"#\">Library</a></li>\n" +
    "                                      <li class=\"active\">Data</li>\n" +
    "                                    </ol>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"tab-pane\" id=\"codewell\">\n" +
    "<pre class=\"prettyprint linenums\">\n" +
    "&lt;ol class=&quot;breadcrumb&quot;&gt;\n" +
    "  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;\n" +
    "  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Library&lt;/a&gt;&lt;/li&gt;\n" +
    "  &lt;li class=&quot;active&quot;&gt;Data&lt;/li&gt;\n" +
    "&lt;/ol&gt;\n" +
    "</pre>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/ui-components.html',
    "\t<ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Elements</li>\n" +
    "\t\t<li class=\"active\">Components</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\">\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t<div class=\"panel panel-warning\">\n" +
    "\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t<h4>Progress Bars</h4>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>\n" +
    "\t\t\t\t\t\t\t<h3>Default Progress Bars</h3>\n" +
    "\t\t\t\t\t\t\t<p>Default progress bars are simple and css driven.</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 20%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 40%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 80%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<hr>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t  <h3>Striped Progress Bars</h3>\n" +
    "\t\t\t\t\t\t\t<p>Sriped Progress bars made with CSS3 gradients, just add the <code>progress-striped</code> class</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 20%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 40%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress progress-striped\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 80%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<hr>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t  <h3>Animated Progressbars</h3>\n" +
    "\t\t\t\t\t\t\t<p>Animated progressbars with CSS3, just add a class <code>active</code> with <code>progress-striped</code></p>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress progress-striped active\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-info\" style=\"width: 42%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<hr>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t <div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<h3>Stacking progressbars</h3>\n" +
    "\t\t\t\t\t\t\t<p>You can stack one progressbar on top of another simply by including them all in the same <code>div.progress</code></p>\n" +
    "\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\"></div>\n" +
    "\t\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\"></div>\n" +
    "\t\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\"></div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<hr>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t\t\t\t<h3>Contextual Progressbars</h3>\n" +
    "\t\t\t\t\t\t\t<p>Have thinner progress bars with details</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"contextual-progress\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"clearfix\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-title\">Painting New Room</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-percentage\">25%</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-info\" style=\"width: 25%\"></div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"contextual-progress\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"clearfix\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-title\">Setting up Devices</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-percentage\">70%</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-danger\" style=\"width: 50%\"></div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"contextual-progress\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"clearfix\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-title\">Fixing Old Furnitures</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"progress-percentage\">3%</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"progress\">\n" +
    "\t\t\t\t\t\t\t\t  <div class=\"progress-bar progress-bar-warning\" style=\"width: 3%\"></div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t<div class=\"panel panel-primary\">\n" +
    "\t\t\t  <div class=\"panel-heading\">\n" +
    "\t\t\t\t\t<h4>Breadcrumbs</h4>\n" +
    "\t\t\t  </div>\n" +
    "\t\t\t  <div class=\"panel-body\">\n" +
    "\t\t\t\t<p>Indicate the current page's location within a navigational hierarchy.</p>\n" +
    "\t\t\t\t<p>Just add <code>.breadcrumb</code> to any ordered or un-ordered list</p>\n" +
    "\t\t\t\t\t<div class=\"demo-example\">\n" +
    "\t\t\t\t\t\t<ol class=\"breadcrumb\">\n" +
    "\t\t\t\t\t\t  <li class=\"active\"><a href=\"#\">Home</a></li>\n" +
    "\t\t\t\t\t\t</ol>\n" +
    "\t\t\t\t\t\t<ol class=\"breadcrumb\">\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">Home</a></li>\n" +
    "\t\t\t\t\t\t  <li class=\"active\">Library</li>\n" +
    "\t\t\t\t\t\t</ol>\n" +
    "\t\t\t\t\t\t<ol class=\"breadcrumb\">\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">Home</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">Library</a></li>\n" +
    "\t\t\t\t\t\t  <li>Data</li>\n" +
    "\t\t\t\t\t\t</ol>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"panel panel-info\">\n" +
    "\t\t\t  <div class=\"panel-heading\"><h4>Pagination and Pager</h4></div>\n" +
    "\t\t\t  <div class=\"panel-body\">\n" +
    "\t\t\t\t\t<p>Provide pagination links for your site or app with the multi-page pagination component</p>\n" +
    "\t\t\t\t\t<h3>Default Pagination</h3>\n" +
    "\t\t\t\t\t<p>Simple, scable pagination by adding the <code>.pagination</code> class. You can also add <code>.disable</code> for unselectable links or <code>.active</code> to indicate current page</p>\n" +
    "\t\t\t\t\t<ul class=\"pagination\">\n" +
    "\t\t\t\t\t  <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "\t\t\t\t\t  <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "\t\t\t\t\t  <li><a href=\"#\">2</a></li>\n" +
    "\t\t\t\t\t  <li><a href=\"#\">3</a></li>\n" +
    "\t\t\t\t\t  <li><a href=\"#\">4</a></li>\n" +
    "\t\t\t\t\t  <li><a href=\"#\">5</a></li>\n" +
    "\t\t\t\t\t  <li><a href=\"#\">&raquo;</a></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t<h4>Sizing</h4>\n" +
    "\t\t\t\t\t<p>Add smaller or larger pagination with the <code>.pagination-lg</code> or <code>.pagination-sm</code> class</p>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<ul class=\"pagination pagination-lg\">\n" +
    "\t\t\t\t\t\t  <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "\t\t\t\t\t\t  <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">2</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">3</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">4</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">5</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&raquo;</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<ul class=\"pagination\">\n" +
    "\t\t\t\t\t\t  <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "\t\t\t\t\t\t  <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">2</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">3</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">4</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">5</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&raquo;</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t<ul class=\"pagination pagination-sm\">\n" +
    "\t\t\t\t\t\t  <li class=\"disabled\"><a href=\"#\">&laquo;</a></li>\n" +
    "\t\t\t\t\t\t  <li class=\"active\"><a href=\"#\">1</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">2</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">3</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">4</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">5</a></li>\n" +
    "\t\t\t\t\t\t  <li><a href=\"#\">&raquo;</a></li>\n" +
    "\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<h3>Pager</h3>\n" +
    "\t\t\t\t\t<p>Quick previous and next links for simple pagination implementations with light markup and styles</p>\n" +
    "\t\t\t\t\t<p>Just add the class <code>.pager</code></p>\n" +
    "\t\t\t\t\t<ul class=\"pager\">\n" +
    "\t\t\t\t\t  <li><a href=\"#\">Previous</a></li>\n" +
    "\t\t\t\t\t  <li><a href=\"#\">Next</a></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t<h4>Aligned Links</h4>\n" +
    "\t\t\t\t\t<p>Alternatively, you can align each link to the sides by adding the <code>.previous</code> and <code>.next</code> classes to the li</p>\n" +
    "\t\t\t\t\t<ul class=\"pager\">\n" +
    "\t\t\t\t\t  <li class=\"previous\"><a href=\"#\">&larr; Older</a></li>\n" +
    "\t\t\t\t\t  <li class=\"next\"><a href=\"#\">Newer &rarr;</a></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t  </div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"panel panel-success\">\n" +
    "\t\t\t  <div class=\"panel-heading\">\n" +
    "\t\t\t\t\t<h4>Labels, Badges and Alerts</h4>\n" +
    "\t\t\t  </div>\n" +
    "\t\t\t  <div class=\"panel-body\">\n" +
    "\t\t\t\t<h3>Labels</h3>\n" +
    "\t\t\t\t<p>Put the <code>.label</code> class and make your <code>span</code> stand out</p>\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t<h3>Example heading <span class=\"label label-default\">New</span></h3>\n" +
    "\t\t\t\t\t\t<h4>Example heading <span class=\"label label-default\">New</span></h4>\n" +
    "\t\t\t\t\t\t<h5>Example heading <span class=\"label label-default\">New</span></h5>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t<p>Add any of the below mentioned modifier classes to change the appearance of a label.</p>\n" +
    "\t\t\t\t\t\t<span class=\"label label-default\">Default</span>\n" +
    "\t\t\t\t\t\t<span class=\"label label-primary\">Primary</span>\n" +
    "\t\t\t\t\t\t<span class=\"label label-success\">Success</span>\n" +
    "\t\t\t\t\t\t<span class=\"label label-info\">Info</span>\n" +
    "\t\t\t\t\t\t<span class=\"label label-warning\">Warning</span>\n" +
    "\t\t\t\t\t\t<span class=\"label label-danger\">Danger</span>                                \n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<h3>Badges</h3>\n" +
    "\t\t\t\t<p>Easily highlight new or unread items with the <code>badge</code> class</p>\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t<p>Add the <code>span class=\"badge\"</code> to links, navs and more!</p>\n" +
    "\t\t\t\t\t\t<a href=\"#\">Inbox <span class=\"badge\">42</span></a>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t<p>When there are no new or unread items, badges will simply collapse (via CSS's :empty selector) provided no content exists within.</p>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<h3>Alerts</h3>\n" +
    "\t\t\t\t<p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages</p>\n" +
    "\t\t\t\t  <div class=\"alert alert-success\">\n" +
    "\t\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\n" +
    "\t\t\t\t  </div>\n" +
    "\t\t\t\t  <div class=\"alert alert-dismissable alert-info\">\n" +
    "\t\t\t\t\t<strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n" +
    "\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t  </div>\n" +
    "\t\t\t\t  <div class=\"alert alert-dismissable alert-warning\">\n" +
    "\t\t\t\t\t<strong>Warning!</strong> Best check yo self, you're not looking too good.\n" +
    "\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t  </div>\n" +
    "\t\t\t\t  <div class=\"alert alert-dismissable alert-danger\">\n" +
    "\t\t\t\t\t<strong>Oh snap!</strong> Change a few things up and try submitting again.\n" +
    "\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "\t\t\t\t  </div>\n" +
    "\t\t\t  </div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"panel panel-warning\">\n" +
    "\t\t\t  <div class=\"panel-heading\">\n" +
    "\t\t\t\t\t<h4>List Groups</h4>\n" +
    "\t\t\t  </div>\n" +
    "\t\t\t  <div class=\"panel-body\">\n" +
    "\t\t\t\t\t<p>List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.</p>\n" +
    "\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t\t<h3>Basic</h3>\n" +
    "\t\t\t\t\t\t\t<p>The most basic list group is simply an unordered list with list items, and the proper classes.</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"panel panel-danger\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item active\">Morbi leo risus</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t\t<h3>Badges</h3>\n" +
    "\t\t\t\t\t\t\t<p>Add the badges component to any list group item and it will automatically be positioned on the right</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"panel panel-danger\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\">Cras justo odio</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\"><span class=\"badge\">13</span>Dapibus ac facilisis in</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\">Morbi leo risus</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\"><span class=\"badge\">7</span>Porta ac consectetur ac</li>\n" +
    "\t\t\t\t\t\t\t\t  <li class=\"list-group-item\"><span class=\"badge\">29</span>Vestibulum at eros</li>\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t  <h3>Customize with nearly any HTML within!</h3>\n" +
    "\t\t\t\t\t  <div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t  <div class=\"panel panel-primary\">\n" +
    "\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"list-group\"> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">201</span> <i class=\"fa fa-envelope\"></i> Inbox </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge bg-info\">5021</span> <i class=\"fa fa-eye\"></i> Profile visits </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">14</span> <i class=\"fa fa-phone\"></i> Call </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge bg-inverse\">20</span> <i class=\"fa fa-comments\"></i> Messages </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">14</span> <i class=\"fa fa-bookmark\"></i> Bookmarks </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge bg-info\">30</span> <i class=\"fa fa-bell\"></i> Notifications </a> \n" +
    "\t\t\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t  <div class=\"panel panel-primary\">\n" +
    "\t\t\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t\t  <h4>Mailbox</h4>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t  <div class=\"list-group\"> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge bg-success\">230</span> <i class=\"fa fa-inbox\"></i> Inbox (5) </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">50</span> <i class=\"glyphicon glyphicon-ok\"></i> Sent mail </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">5</span> <i class=\"fa fa-edit-sign\"></i> Draft </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">20</span> <i class=\"fa fa-star\"></i> Starred </a> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\"><span class=\"badge\">15</span> <i class=\"fa fa-trash\"></i> Trash </a>\n" +
    "\t\t\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t  </div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/ui-modals.html',
    "<style>\n" +
    "/* page-specific styling */\n" +
    ".visiblemodal {\n" +
    "\tposition: relative;\n" +
    "\ttop: auto;\n" +
    "\tright: auto;\n" +
    "\tleft: auto;\n" +
    "\tbottom: auto;\n" +
    "\tz-index: 0;\n" +
    "\tdisplay: block;\n" +
    "\toverflow: hidden;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "    <ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Components</li>\n" +
    "\t\t<li class=\"active\">Modal Boxes</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"ModalsDemoController\">\n" +
    "\n" +
    "\t<script type=\"text/ng-template\" id=\"myModalContent.html\">\n" +
    "\t    <div class=\"modal-header\">\n" +
    "\t        <h4 class=\"modal-title\">This is a modal!</h4>\n" +
    "\t    </div>\n" +
    "\t    <div class=\"modal-body\">\n" +
    "\t        <ul>\n" +
    "\t            <li ng-repeat=\"item in items\">\n" +
    "\t                <a ng-click=\"selected.item = item\">{{ item }}</a>\n" +
    "\t            </li>\n" +
    "\t        </ul>\n" +
    "\t        Selected: <b>{{ selected.item }}</b>\n" +
    "\t    </div>\n" +
    "\t    <div class=\"modal-footer\">\n" +
    "\t        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\n" +
    "\t        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\n" +
    "\t    </div>\n" +
    "\t</script>\n" +
    "\n" +
    "\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t<tabset panel-tabs=\"true\" panel-class=\"panel-transparent\" heading=\"Modals\">\n" +
    "\t\t\t\t\t\t<tab>\n" +
    "\t\t\t\t\t\t\t<tab-heading>\n" +
    "\t\t\t\t\t\t\t\t<i class=\"ti ti-desktop\"></i>\n" +
    "\t\t\t\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t\t\t\t<p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.</p>\n" +
    "\t\t\t\t\t\t\t<h4>Static example</h4>\n" +
    "\t\t\t\t\t\t\t<p>A rendered modal with header, body, and set of actions in the footer.</p>\n" +
    "\t\t\t\t\t\t\t<div class=\"modal visiblemodal\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"modal-dialog\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<p>One fine body…</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div><!-- /.modal-content -->\n" +
    "\t\t\t\t\t\t\t\t</div><!-- /.modal-dialog -->\n" +
    "\t\t\t\t\t\t\t</div><!-- /.modal -->\n" +
    "\n" +
    "\t\t\t\t\t\t\t<h4>Live demo</h4>\n" +
    "\t\t\t\t\t\t\t<p>Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page. You can select an item from the list of choices and it will be selected upon 'OK'.</p>\n" +
    "\n" +
    "\t\t\t\t\t\t    <p ng-show=\"selected\"><span class=\"label label-default\">{{ selected }}</span> selected from modal.</p>\n" +
    "\t\t\t\t\t\t    <button class=\"btn btn-primary\" ng-click=\"open()\">Open me!</button>\n" +
    "\t\t\t\t\t\t    <button class=\"btn btn-primary\" ng-click=\"open('lg')\">Large modal</button>\n" +
    "\t\t\t\t\t\t    <button class=\"btn btn-primary\" ng-click=\"open('sm')\">Small modal</button>\n" +
    "\t\t\t\t\t\t</tab>\n" +
    "\n" +
    "\t\t\t\t\t\t<tab>\n" +
    "\t\t\t\t\t\t\t<tab-heading>\n" +
    "\t\t\t\t\t\t\t\t<i class=\"ti ti-settings\"></i>\n" +
    "\t\t\t\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t\t\t\t<p>Modals can be invoked through a combination of a template definition and some Javascript Code. Check it out!</p>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"demoModalContent.html\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h4 class=\"modal-title\">This is a modal!</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "    \tModal content goes here\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-warning\" ng-click=\"close()\">Cancel</button>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<tabset>\n" +
    "<tab heading=\"HTML\">\n" +
    "<pre class=\"prettyprint linenums\">\n" +
    "&lt;script type=&quot;text/ng-template&quot; id=&quot;demoModalContent.html&quot;&gt;\n" +
    "    &lt;div class=&quot;modal-header&quot;&gt;\n" +
    "        &lt;h3 class=&quot;modal-title&quot;&gt;This is a modal!&lt;/h3&gt;\n" +
    "    &lt;/div&gt;\n" +
    "    &lt;div class=&quot;modal-body&quot;&gt;\n" +
    "    \tModal content goes here\n" +
    "    &lt;/div&gt;\n" +
    "    &lt;div class=&quot;modal-footer&quot;&gt;\n" +
    "        &lt;button class=&quot;btn btn-warning&quot; ng-click=&quot;close()&quot;&gt;Cancel&lt;/button&gt;\n" +
    "    &lt;/div&gt;\n" +
    "&lt;/script&gt;\n" +
    "\n" +
    "&lt;button class=&quot;btn btn-primary&quot; ng-click=&quot;openDemoModal('lg')&quot;&gt;Open Modal&lt;/button&gt;\n" +
    "</pre>\n" +
    "</tab>\n" +
    "<tab heading=\"JavaScript\">\n" +
    "<pre class=\"prettyprint linenums\">\n" +
    "// inside the controller\n" +
    "$scope.openDemoModal = function (size) {\n" +
    "  var modalInstance = $modal.open({\n" +
    "    templateUrl: 'demoModalContent.html',\n" +
    "    controller: function ($scope, $modalInstance) {\n" +
    "      $scope.cancel = function () {\n" +
    "        $modalInstance.dismiss('cancel');\n" +
    "      };\n" +
    "    },\n" +
    "    size: size,\n" +
    "  });\n" +
    "}\n" +
    "</pre>\n" +
    "</tab>\n" +
    "</tabset>\n" +
    "\n" +
    "<p>Click the button below to open the demo modal.</p>\n" +
    "<button class=\"btn btn-primary\" ng-click=\"openDemoModal('lg')\">Open Modal</button>\n" +
    "\n" +
    "\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t</tabset>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/ui-panels.html',
    "    <ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Elements</li>\n" +
    "\t\t<li class=\"active\">Panel</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\">\n" +
    "\t<div data-widget-group=\"group1\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t<div class=\"alert alert-info mb-xl\">\n" +
    "\t\t\t\t\t<h3>Panel Options</h3>\n" +
    "\t\t\t\t\t<p>All the basic panel options and colors are shown below. More Advanced Panels options will be coming soon!</p>\n" +
    "\t\t\t\t\t<ul class=\"panel-color-list list-inline mt\">\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-info\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-primary\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-blue\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-indigo\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-deeppurple\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-purple\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-pink\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-danger\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-teal\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-green\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-success\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-lime\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-yellow\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-warning\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-orange\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-deeporange\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-midnightblue\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-bluegray\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-bluegraylight\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-black\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-gray\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-default\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-white\"></span></li>\n" +
    "\t\t\t\t\t\t<li><span data-style=\"panel-brown\"></span></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body, .panel-footer\"}'></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\" style=\"height: 148px\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-footer\">\n" +
    "\t\t\t\t\t\t<span class=\"text-gray\"><em>Footer</em></span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Panel with Scroll</h2>\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body scroll-pane\" style=\"height: 200px;\">\n" +
    "\t\t\t\t\t\t<div class=\"scroll-content\">\n" +
    "\t\t\t\t\t\t\t<p>Itaque, iste, aliquid dolore rem praesentium adipisci molestiae cum quae alias temporibus quod dolor porro saepe doloribus illo. Ab mollitia magnam animi expedita quam beatae quae consequatur. Tenetur sint esse perferendis minima. Non, sapiente, placeat, dicta sunt nulla ipsum dolor ullam deserunt nihil itaque ab modi a ratione! Nihil ipsam nobis quo quos corporis porro inventore quibusdam aperiam optio. Necessitatibus ducimus unde quibusdam sequi. Veniam, perspiciatis, eaque fugiat soluta ratione sequi qui voluptatibus? Aspernatur, ex, provident, illo deleniti architecto repudiandae est exercitationem repellat quod illum maiores harum optio dicta. Deleniti, officiis, veniam, perferendis saepe non dolorem delectus cum libero excepturi eos pariatur animi ea ullam nesciunt magnam illo aliquam? Nam, nostrum, nihil suscipit ut sint voluptatibus quisquam aliquam qui illo debitis quidem consequatur similique sunt facilis aut dolores excepturi deserunt maxime sequi veritatis delectus quis quo expedita omnis quod ad soluta labore sit laudantium modi? Dignissimos, suscipit, autem, maiores esse laborum magnam quam inventore dicta ab atque vel similique eaque quae. Culpa, ab, magni, magnam velit libero quasi vel ea quo similique nostrum rerum natus et excepturi molestiae assumenda quod itaque distinctio quia dolorum sit minus impedit dolorem cumque iure necessitatibus pariatur.</p>\n" +
    "\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aperiam delectus nulla in ex deleniti ducimus quam molestias, sint laudantium deserunt maxime tenetur nihil, numquam molestiae eligendi recusandae voluptatem reprehenderit asperiores culpa aut. Ab illum rem rerum ducimus nobis quod est a aliquam eum odio tempore at, iure atque? Quo, ad sunt. Aliquam nihil voluptatum, officiis ipsa, cum, natus, laudantium perspiciatis voluptatem debitis dolorem nam id molestias nostrum veritatis maxime eligendi! Vel numquam illum, voluptas ad quidem. Vitae soluta culpa quia veritatis accusantium rerum praesentium illum maiores. Fugit eaque excepturi rem natus, dolorem numquam, veniam corrupti doloribus officia incidunt reprehenderit mollitia omnis provident minus quisquam nobis eos. Nobis reprehenderit tempora facere asperiores ad illum sunt possimus quos deleniti nesciunt. Earum laborum incidunt accusamus corrupti, dolores, quis sit facilis quia quibusdam iusto officia. At atque cupiditate cumque officia, quasi distinctio nam eveniet! Reprehenderit suscipit itaque dolores magnam quaerat, aspernatur quae! Aspernatur fugit dolores distinctio odit at, eaque minima reprehenderit ipsa quae labore temporibus delectus perspiciatis fuga id beatae molestiae quaerat, qui libero et consequatur minus. Fugit saepe magni quod, deserunt similique obcaecati ipsum, voluptas ipsa nisi aliquam perferendis, nam est voluptatum temporibus esse eum provident eaque sint. Ducimus perspiciatis, expedita fuga.</p>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\"> \n" +
    "\t\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Nestable Panles</h2>\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t<p class=\"mb-xl\">Have nested panels inside a panel</p>\n" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Tabs</h2>\n" +
    "\t\t\t\t\t\t<div>\n" +
    "\t\t\t\t\t\t\t<ul class=\"nav nav-tabs pull-right\">\n" +
    "\t\t\t\t\t\t\t\t<li class=\"active\"><a data-target=\"#home1\" href=\"\" data-toggle=\"tab\">Home</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb2\" href=\"\" data-toggle=\"tab\">Two</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb3\" href=\"\" data-toggle=\"tab\">Three</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb4\" href=\"\" data-toggle=\"tab\">Four</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb5\" href=\"\" data-toggle=\"tab\">Five</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb6\" href=\"\" data-toggle=\"tab\">Six</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb7\" href=\"\" data-toggle=\"tab\">Seven</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb8\" href=\"\" data-toggle=\"tab\">Eight</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tabb9\" href=\"\" data-toggle=\"tab\">Nine</a></li>\n" +
    "\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t<div class=\"tab-content\">\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"home1\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb2\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb3\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb4\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb5\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb6\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb7\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb8\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tabb9\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>\n" +
    "\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n" +
    "\t\t\t\t\t\t\t\t<li class=\"active\"><a data-target=\"#home\" href=\"\" data-toggle=\"tab\">Home</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab2\" href=\"\" data-toggle=\"tab\">Two</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab3\" href=\"\" data-toggle=\"tab\">Three</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab4\" href=\"\" data-toggle=\"tab\">Four</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab5\" href=\"\" data-toggle=\"tab\">Five</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab6\" href=\"\" data-toggle=\"tab\">Six</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab7\" href=\"\" data-toggle=\"tab\">Seven</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab8\" href=\"\" data-toggle=\"tab\">Eight</a></li>\n" +
    "\t\t\t\t\t\t\t\t<li><a data-target=\"#tab9\" href=\"\" data-toggle=\"tab\">Nine</a></li>\n" +
    "\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t</h2>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\t<div class=\"tab-content\">\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"home\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab2\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab3\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab4\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab5\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab6\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab7\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab8\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"tab9\">Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.</div>\n" +
    "\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2><i class=\"ti ti-mouse\"></i>Panel</h2>\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2><i class=\"ti ti-globe\"></i>Panel</h2>\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2><i class=\"ti ti-panel\"></i>Panel</h2>\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'></div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\">\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\">\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-file\"></i></a>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-mouse\"></i></a>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-settings\"></i></a>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\">\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\">\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-file\"></i></a>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-mouse\"></i></a>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-settings\"></i></a>\n" +
    "\t\t\t\t\t\t</div>\t\t\t\t\t\t\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-4\">\n" +
    "\t\t\t\t<div class=\"panel panel-default\">\n" +
    "\t\t\t\t\t<div class=\"panel-heading\">\n" +
    "\t\t\t\t\t\t<h2>Panel</h2>\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<div class=\"panel-ctrls\">\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-file\"></i></a>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-mouse\"></i></a>\n" +
    "\t\t\t\t\t\t\t<a href=\"#\" class=\"button-icon\"><i class=\"ti ti-settings\"></i></a>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"panel-body\">\n" +
    "\t\t\t\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic amet consectetur adipisicing tenetur ex ea dignissimos volupta elit esse quisquam fugiat.\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "\t// small demo so it's not been angularized :p\n" +
    "\t$(\".panel-color-list>li>span\").click(function(e) {\n" +
    "\t\t$(\".panel\").attr('class','panel').addClass($(this).attr('data-style'));\n" +
    "\t});\n" +
    "</script>"
  );


  $templateCache.put('templates/ui-progressbars.html',
    "    <ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Components</li>\n" +
    "\t\t<li class=\"active\">Progress Bars</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"ProgressbarController\">\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-xs-12\">\n" +
    "\t\t\t<tabset panel-tabs=\"true\" panel-class=\"panel-transparent\" heading=\"Progress Bars\">\n" +
    "\t\t\t\t<tab>\n" +
    "\t\t\t\t\t<tab-heading><i class=\"ti ti-desktop\"></i></tab-heading>\n" +
    "\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>\n" +
    "\t\t\t\t\t\t\t<h4>Default Progress Bars</h4>\n" +
    "\t\t\t\t\t\t\t<p>Progressbars are created with the directive <code>progressbar</code> and setting the <code>type</code> attribute.</p>\n" +
    "\n" +
    "\t\t\t\t\t\t\t<p>Primary with <code>type=\"primary\"</code>.</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"\" value=\"68\" type=\"primary\"></progressbar>\n" +
    "\t\t\t\t\t\t\t<p>Info with <code>type=\"info\"</code>.</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"\" value=\"23\" type=\"info\"></progressbar>\n" +
    "\t\t\t\t\t\t\t<p>Success with <code>type=\"success\"</code>.</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"\" value=\"23\" type=\"success\"></progressbar>\n" +
    "\t\t\t\t\t\t\t<p>Warning with <code>type=\"warning\"</code>.</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"\" value=\"23\" type=\"warning\"></progressbar>\n" +
    "\t\t\t\t\t\t\t<p>Danger with <code>type=\"danger\"</code>.</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"\" value=\"23\" type=\"danger\"></progressbar>\n" +
    "\t\t\t\t\t\t\t<p>Inverse with <code>type=\"inverse\"</code>.</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"\" value=\"23\" type=\"inverse\"></progressbar>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<h4>Striped Progress Bars</h4>\n" +
    "\t\t\t\t\t\t\t<p>Sriped Progress bars made with CSS3 gradients, just add the <code>progress-striped</code> class</p>\n" +
    "\t\t\t\t\t\t\t<p><span class=\"label label-info\">Note</span> Does not work with browsers that do not support CSS3 gradients or animations, like IE9</p>\n" +
    "\t\t\t\t\t\t\t<p>Info</p>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"progress-striped\" value=\"23\" type=\"info\"></progressbar>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<h4>Inverse</h4>\n" +
    "\t\t\t\t\t\t\t<progressbar class=\"progress-sm\" class=\"progress-striped active\" value=\"23\" type=\"inverse\"></progressbar>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t\t\t\t\t<h4>Stacking progressbars</h4>\n" +
    "\t\t\t\t\t\t\t<p>You can stack one progressbar on top of another simply by wrapping <code>&lt;bar&gt;</code> elements inside a <code>&lt;progress&gt;</code> element</p>\n" +
    "\t\t\t\t\t\t\t<progress class=\"progress-striped active\">\n" +
    "\t\t\t\t\t\t\t\t<bar value=\"40\" type=\"success\"></bar>\n" +
    "\t\t\t\t\t\t\t\t<bar value=\"20\" type=\"warning\"></bar>\n" +
    "\t\t\t\t\t\t\t\t<bar value=\"20\" type=\"danger\"></bar>\n" +
    "\t\t\t\t\t\t\t</progress> \n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</tab>\n" +
    "\t\t\t\t<tab>\n" +
    "\t\t\t\t\t<tab-heading><i class=\"ti ti-settings\"></i></tab-heading>\n" +
    "\t\t\t\t\t<p>Progressbars can be created with the <code>progressbar</code> HTML element. These examples show how to create regular and stacked progressbars.</p>\n" +
    "<pre class=\"prettyprint linenums\">\n" +
    "&lt;progressbar class=&quot;progress-sm&quot; value=&quot;23&quot; type=&quot;danger&quot;&gt;&lt;/progressbar&gt;\n" +
    "\n" +
    "&lt;progress class=&quot;progress-striped active progress-sm&quot;&gt;\n" +
    "\t&lt;bar value=&quot;40&quot; type=&quot;success&quot;&gt;&lt;/bar&gt;\n" +
    "\t&lt;bar value=&quot;20&quot; type=&quot;warning&quot;&gt;&lt;/bar&gt;\n" +
    "\t&lt;bar value=&quot;20&quot; type=&quot;danger&quot;&gt;&lt;/bar&gt;\n" +
    "&lt;/progress&gt; \n" +
    "</pre>\n" +
    "\n" +
    "\t\t\t\t\t<progressbar class=\"progress-sm\" value=\"23\" type=\"danger\"></progressbar>\n" +
    "\n" +
    "\t\t\t\t\t<progress class=\"progress-striped active progress-sm\">\n" +
    "\t\t\t\t\t\t<bar value=\"40\" type=\"success\"></bar>\n" +
    "\t\t\t\t\t\t<bar value=\"20\" type=\"warning\"></bar>\n" +
    "\t\t\t\t\t\t<bar value=\"20\" type=\"danger\"></bar>\n" +
    "\t\t\t\t\t</progress> \n" +
    "\n" +
    "\t\t\t\t</tab>\n" +
    "\t\t\t</tabset>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t<div class=\"col-xs-12\">\n" +
    "\t\t<tabset panel-tabs=\"true\" panel-class=\"panel-transparent\" heading=\"Dynamic Progressbars\">\n" +
    "\t\t\t<tab>\n" +
    "\t\t\t\t<tab-heading><i class=\"ti ti-desktop\"></i></tab-heading>\n" +
    "\t\t\t\t<p></p>\n" +
    "\n" +
    "\t\t\t\t<h4>Dynamic <button class=\"btn btn-sm btn-primary-alt pull-right\" type=\"button\" ng-click=\"random()\">Randomize</button></h4>\n" +
    "\t\t\t\t<progressbar max=\"max\" value=\"dynamic\"></progressbar>\n" +
    "\n" +
    "\t\t\t\t<small><em>No animation</em></small>\n" +
    "\t\t\t\t<progressbar animate=\"false\" value=\"dynamic\" type=\"success\"></progressbar>\n" +
    "\n" +
    "\t\t\t\t<small><em>Object (changes type based on value)</em></small>\n" +
    "\t\t\t\t<progressbar class=\"progress-striped active\" value=\"dynamic\" type=\"{{type}}\"></progressbar>\n" +
    "\n" +
    "\t\t\t\t<h4>Stacked <button class=\"btn btn-sm btn-primary-alt pull-right\" type=\"button\" ng-click=\"randomStacked()\">Randomize</button></h4>\n" +
    "\t\t\t\t<progress><bar ng-repeat=\"bar in stacked track by $index\" value=\"bar.value\" type=\"{{bar.type}}\"></bar></progress>\n" +
    "\t\t\t</tab>\n" +
    "\t\t\t<tab>\n" +
    "\t\t\t\t<tab-heading><i class=\"ti ti-settings\"></i></tab-heading>\n" +
    "\t\t\t\t<tabset>\n" +
    "\t\t\t\t\t<tab heading=\"HTML\">\n" +
    "<pre class=\"prettyprint\">\n" +
    "&lt;h4&gt;Dynamic &lt;button class=&quot;btn btn-sm btn-primary&quot; type=&quot;button&quot; ng-click=&quot;random()&quot;&gt;Randomize&lt;/button&gt;&lt;/h4&gt;\n" +
    "&lt;progressbar max=&quot;max&quot; value=&quot;dynamic&quot;&gt;&lt;span&gt;{{dynamic}} / {{max}}&lt;/span&gt;&lt;/progressbar&gt;\n" +
    "\n" +
    "&lt;small&gt;&lt;em&gt;No animation&lt;/em&gt;&lt;/small&gt;\n" +
    "&lt;progressbar animate=&quot;false&quot; value=&quot;dynamic&quot; type=&quot;success&quot;&gt;&lt;b&gt;{{dynamic}}%&lt;/b&gt;&lt;/progressbar&gt;\n" +
    "\n" +
    "&lt;small&gt;&lt;em&gt;Object (changes type based on value)&lt;/em&gt;&lt;/small&gt;\n" +
    "&lt;progressbar class=&quot;progress-striped active&quot; value=&quot;dynamic&quot; type=&quot;{{type}}&quot;&gt;{{type}} &lt;i ng-show=&quot;showWarning&quot;&gt;!!! Watch out !!!&lt;/i&gt;&lt;/progressbar&gt;\n" +
    "\n" +
    "&lt;hr /&gt;\n" +
    "&lt;h4&gt;Stacked &lt;button class=&quot;btn btn-sm btn-primary&quot; type=&quot;button&quot; ng-click=&quot;randomStacked()&quot;&gt;Randomize&lt;/button&gt;&lt;/h4&gt;\n" +
    "&lt;progress&gt;&lt;bar ng-repeat=&quot;bar in stacked track by $index&quot; value=&quot;bar.value&quot; type=&quot;{{bar.type}}&quot;&gt;&lt;span ng-hide=&quot;bar.value &lt; 5&quot;&gt;{{bar.value}}%&lt;/span&gt;&lt;/bar&gt;&lt;/progress&gt;\n" +
    "</pre>\n" +
    "\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t<tab heading=\"JavaScript\">\n" +
    "\t\t\t</tab>\n" +
    "\t\t\t\t\t</tabset>\n" +
    "\t\t\t\t</tab>\n" +
    "\t\t\t</tabset>\n" +
    "\t\t</div>\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );


  $templateCache.put('templates/ui-tabs.html',
    "    <ol class=\"breadcrumb\">\n" +
    "\t\t<li><a href=\"#/\">Dashboard</a></li>\n" +
    "\t\t<li>UI Components</li>\n" +
    "\t\t<li class=\"active\">Tabs &amp; Accordions</li>\n" +
    "\t</ol>\n" +
    "\n" +
    "<div class=\"container-fluid\" ng-controller=\"TabsAndAccordionsDemoController\">\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\n" +
    "\t\t<tabset panel-tabs=\"true\" heading=\"Inline Tabs\" panel-class=\"panel-transparent\">\n" +
    "\t\t\t<tab>\n" +
    "\t\t\t\t<tab-heading>\n" +
    "\t\t\t\t\t<i class=\"ti ti-desktop\"></i>\n" +
    "\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t<tabset tab-theme=\"default\" tab-position=\"top\">\n" +
    "\t\t\t\t\t\t\t<tab heading=\"Home\">\n" +
    "\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t\t<tab>\n" +
    "\t\t\t\t\t\t\t\t<tab-heading class=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t\t\tAnother tab\n" +
    "\t\t\t\t\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t\t\t<li class=\"tab-controls dropdown\" dropdown>\n" +
    "\t\t\t\t\t\t\t\t<a class=\"dropdown-toggle\" dropdown-toggle>Dropdown <span class=\"caret\"></span></a>\n" +
    "\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu pull-left\">\n" +
    "\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Something</a></li>\n" +
    "\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Something Else</a></li>\n" +
    "\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n" +
    "\t\t\t\t\t\t\t\t\t<li><a href=\"#\">And one more thing</a></li>\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t</tabset>\n" +
    "\t\t\t\t\t\t<tabset tab-theme=\"default\" tab-position=\"left\">\n" +
    "\t\t\t\t\t\t\t<tab heading=\"Home\">\n" +
    "\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t\t<tab>\n" +
    "\t\t\t\t\t\t\t\t<tab-heading class=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t\t\tAnother tab\n" +
    "\t\t\t\t\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t</tabset>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-md-6\">\n" +
    "\t\t\t\t\t\t<tabset tab-theme=\"default\" tab-position=\"right\">\n" +
    "\t\t\t\t\t\t\t<tab heading=\"Home\">\n" +
    "\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t\t<tab>\n" +
    "\t\t\t\t\t\t\t\t<tab-heading class=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t\t\tAnother tab\n" +
    "\t\t\t\t\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t</tabset>\n" +
    "\t\t\t\t\t\t<tabset tab-theme=\"default\" tab-position=\"bottom\">\n" +
    "\t\t\t\t\t\t\t<tab heading=\"Home\">\n" +
    "\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t\t<tab>\n" +
    "\t\t\t\t\t\t\t\t<tab-heading class=\"dropdown\">\n" +
    "\t\t\t\t\t\t\t\t\tAnother tab\n" +
    "\t\t\t\t\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.</p>\n" +
    "\t\t\t\t\t\t\t</tab>\n" +
    "\t\t\t\t\t\t</tabset>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</tab>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\t\t\t<tab>\n" +
    "\t\t\t\t<tab-heading>\n" +
    "\t\t\t\t\t<i class=\"ti ti-settings\"></i>\n" +
    "\t\t\t\t</tab-heading>\n" +
    "\t\t\t\t<p>Inline tabs are just like Angular UI tabs but with some important enhancements.</p>\n" +
    "<pre class=\"prettyprint linenums\">\n" +
    "&lt;tabset tab-theme=&quot;orange&quot; tab-position=&quot;left&quot;&gt;\n" +
    "\t&lt;tab heading=&quot;Home&quot;&gt;\n" +
    "Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.&lt;br&gt;&lt;br&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
    "\t&lt;/tab&gt;\n" +
    "\t&lt;tab heading=&quot;Other&quot;&gt;\n" +
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.&lt;br&gt;&lt;br&gt;Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.\n" +
    "\t&lt;/tab&gt;\n" +
    "&lt;/tabset&gt;\n" +
    "</pre>\n" +
    "\t<p>This will produce:</p>\n" +
    "\t\t\t<tabset tab-theme=\"orange\" tab-position=\"left\">\n" +
    "\t\t\t\t<tab heading=\"Home\">\n" +
    "\t\t\tAsperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
    "\t\t\t\t</tab>\n" +
    "\t\t\t\t<tab heading=\"Other\">\n" +
    "\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>Asperiores porro eveniet debitis quas sed harum nobis libero voluptatibus dolorum odio at veniam aut id corrupti hic esse quisquam fugiat. Asperiores in eveniet sapiente error fuga tenetur ex ea dignissimos voluptas ab molestiae eos totam quo dolorem maxime illo neque quia itaque.\n" +
    "\t\t\t\t</tab>\n" +
    "\t\t\t</tabset>\n" +
    "\n" +
    "\t\t\t\t\t<p>Tab positions can be changed by altering the value of the <code>tab-position</code> attribute. They can be one of <code>top</code>, <code>right</code>, <code>bottom</code> or <code>left</code>.</p>\n" +
    "\t\t\t\t\t<p>Tab themes can be one of <code>success</code>, <code>alart</code>, <code>magenta</code> and many more!</p>\n" +
    "\t\t\t\t</tab>\n" +
    "\t\t\t</tabset>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<accordion close-others=\"oneAtATime\" class=\"panel-default\">\n" +
    "\t\t\t    <accordion-group heading=\"Static Header, initially expanded\" is-open=\"status.isFirstOpen\" is-disabled=\"status.isFirstDisabled\">\n" +
    "\t\t\t      This content is straight in the template.\n" +
    "\t\t\t    </accordion-group>\n" +
    "\t\t\t    <accordion-group heading=\"{{group.title}}\" ng-repeat=\"group in groups\">\n" +
    "\t\t\t      {{group.content}}\n" +
    "\t\t\t    </accordion-group>\n" +
    "\t\t\t    <accordion-group heading=\"Dynamic Body Content\">\n" +
    "\t\t\t    \t<p>The body of the accordion group grows to fit the contents</p>\n" +
    "\t\t\t    \t<button class=\"btn btn-danger btn-sm\" ng-click=\"addItem()\">Add Item</button>\n" +
    "\t\t\t    \t<br>\n" +
    "\t\t\t        <div ng-repeat=\"item in items\">{{item}}</div>\n" +
    "\t\t\t    </accordion-group>\n" +
    "\t\t\t    <accordion-group heading=\"Last Panel\" is-open=\"status.open\" is-disabled=\"status.open\">\n" +
    "\t\t\t      This content is straight in the template.\n" +
    "\t\t\t    </accordion-group>\n" +
    "\t\t\t</accordion>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"row\">\n" +
    "\t\t<div class=\"col-sm-6\">\n" +
    "\t\t\t<div class=\"checkbox\">\n" +
    "\t\t\t\t<!-- <label>\n" +
    "\t\t\t\t\t<input icheck type=\"checkbox\" ng-model=\"oneAtATime\">Open only one at a time\n" +
    "\t\t\t\t</label> -->\n" +
    "\t\t\t\t<label><input type=\"checkbox\" ng-model=\"oneAtATime\"> Open only one at a time</label>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-sm-3\">\n" +
    "\t\t\t<button class=\"btn btn-primary btn-sm btn-block\" ng-click=\"status.open = !status.open\">Toggle last panel</button>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"col-sm-3\">\n" +
    "\t\t\t<button class=\"btn btn-primary btn-sm btn-block\" ng-click=\"status.isFirstDisabled = ! status.isFirstDisabled\">Enable / Disable first panel</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "</div> <!-- container-fluid -->\n"
  );
}])
/* jshint ignore:end */