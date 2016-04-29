/* jshint ignore:start */
angular.module('theme.core.templates', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('templates/demo.html',
    "<ol class=\"breadcrumb\">\n" +
    "    <li><a href=\"#/demo\">Demo</a></li>\n" +
    "    <li class=\"active\">Dashboard</li>\n" +
    "</ol>\n" +
    "<div class=\"container-fluid\" ng-controller=\"DashboardController\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"info-tile tile-orange\">\n" +
    "                <div class=\"tile-icon\"><i class=\"ti ti-server\"></i></div>\n" +
    "                <div class=\"tile-heading\"><span>No. Of Nodes Running</span></div>\n" +
    "                <div class=\"tile-body\"><span>3</span></div>\n" +
    "                <div class=\"tile-footer\"><span class=\"text-success\">100% <i class=\"fa fa-level-up\"></i></span></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"info-tile tile-success\">\n" +
    "                <div class=\"tile-heading\"><span>Battery Voltage: {{batt.currentBatVoltage}}V</span></div>\n" +
    "                <div class=\"tile-body\">\n" +
    "                    <span>\n" +
    "                    <div flot-chart style=\"width: 100%;height: 74px\" class=\"centered\"\n" +
    "                            data-flot-data=\"batt.realtimeData\"\n" +
    "                            data-flot-options=\"batt.realtimeOptions\">\n" +
    "                    </div>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"info-tile tile-dark\">\n" +
    "                <div class=\"tile-icon\"><i class=\"ti ti-bar-chart-alt\"></i></div>\n" +
    "                <div class=\"tile-heading\"><span>Halbach Wheels (Left)</span></div>\n" +
    "                <div class=\"tile-body\"><span>{{wheel.currentRPMleft}} RPM</span></div>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3\">\n" +
    "            <div class=\"info-tile tile-orange\">\n" +
    "                <div class=\"tile-icon\"><i class=\"ti ti-bar-chart-alt\"></i></div>\n" +
    "                <div class=\"tile-heading\"><span>Halbach Wheels (Right)</span></div>\n" +
    "                <div class=\"tile-body\"><span>{{wheel.currentRPMright}} RPM</span></div>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div data-widget-group=\"group1\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div class=\"panel\" data-widget='{\"id\" : \"wiget9\", \"draggable\": \"false\"}'>\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <h2>Pod Velocity | {{telem.currentVelocity}} MPH</h2>\n" +
    "                        <div class=\"panel-ctrls button-icon-bg\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-editbox\" data-widget-controls=\"\"></div>\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div class=\"mt-sm mb-sm\" flot-chart style=\"width: 100%;height: 272px;\" data-flot-data=\"telem.plotVelAccelData\" data-flot-options=\"telem.plotVelAccelOptions\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"panel\" data-widget='{\"draggable\": \"false\"}'>\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <h2>Recent CAN Messages</h2>\n" +
    "                        <div class=\"panel-ctrls button-icon-bg\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-body scroll-pane\" style=\"height: 320px;\">\n" +
    "                        <div class=\"scroll-content\">\n" +
    "                            <ul class=\"mini-timeline\">\n" +
    "                                <li class=\"mini-timeline-danger\" ng-repeat=\"message in sensor.messageList track by $index | limitTo:50 \">\n" +
    "                                    <div class=\"timeline-icon\"></div>\n" +
    "                                    <div class=\"timeline-body\">\n" +
    "                                        <div class=\"timeline-content\">\n" +
    "                                            <a href=\"#/\" class=\"name\">{{message.sensor}}</a> sent a new message <strong>{{message.data}}</strong>\n" +
    "                                            <span class=\"time\">{{sensor.timeSince(message.timeStamp)}} ago</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "                <div class=\"panel\" data-widget='{\"draggable\": \"false\"}' style=\"height: 370px;\">\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <h2>Module Message Distribution</h2>\n" +
    "                        <div class=\"panel-ctrls button-icon-bg\" data-actions-container=\"\" data-action-collapse='{\"target\": \".panel-body\"}'>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"panel-body no-padding\">\n" +
    "                        <table class=\"table browsers m-n\">\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"module in sensor.getModuleDistribution() | orderBy: '-value'\" style=\"height: 63px;\">\n" +
    "                                    <td ng-bind=\"module.name\"></td>\n" +
    "                                    <td class=\"text-right\">{{sensor.getModulePercentage(module)}}%</td>\n" +
    "                                    <td class=\"vam\" style=\"width: 56px;\">\n" +
    "                                        <div class=\"progress m-n\">\n" +
    "                                            <div class=\"progress-bar progress-bar-teal\" style=\"width: {{sensor.getModulePercentage(module)}}%\"></div>\n" +
    "                                        </div>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\" ng-controller=\"SensorSearchController\">\n" +
    "            <div class=\"panel panel-transparent\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <div class=\"input mb-xl\">\n" +
    "                        <input type=\"text\" ng-model=\"filterOptions.filterText\" class=\"form-control\" placeholder=\"Search Sensors...\">\n" +
    "                    </div>\n" +
    "                    <div class=\"panel\">\n" +
    "                        <div class=\"panel-body no-padding\">\n" +
    "                            <div style=\"height: 554px;\" ng-grid=\"gridOptions\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "            <panel panel-class=\"panel-sky\" heading=\"Selected Sensor Message List | {{sensor.selectedSensorMessageList().length}} messages\">\n" +
    "                <div class=\"table-responsive\" style=\"height: 576px !important;\">\n" +
    "                    <table class=\"table\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>ID</th>\n" +
    "                                <th style=\"padding-right: 200px\">Message</th>\n" +
    "                                <th>Time Stamp</th>\n" +
    "                                <th>Module</th>\n" +
    "                                <th>Type</th>\n" +
    "                                <th>Sensor</th>\n" +
    "                                <th>Location</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"message in sensor.selectedSensorMessageList() | orderBy: 'timeStamp' : true\">\n" +
    "                                <td>{{message.id}}</td>\n" +
    "                                <td><strong>{{message.data}}</strong></td>\n" +
    "                                <td>{{sensor.timeSince(message.timeStamp)}} ago</td>\n" +
    "                                <td>{{message.module}}</td>\n" +
    "                                <td>{{message.type}}</td>\n" +
    "                                <td>{{message.sensor}}</td>\n" +
    "                                <td>{{message.location}}</td>\n" +
    "                            </tr>\n" +
    "                            <tr ng-if=\"sensor.selectedSensorMessageList().length === 0\">\n" +
    "                                <td></td>\n" +
    "                                <td><strong>NO MESSAGES FROM SELECTED SENSORS</strong></td>\n" +
    "                                <td></td>\n" +
    "                                <td></td>\n" +
    "                                <td></td>\n" +
    "                                <td></td>\n" +
    "                                <td></td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                        <caption>List of messages from selected sensors</caption>\n" +
    "                        <ul class=\"demo-btns\">\n" +
    "                                <button type=\"button\" class=\"btn btn-xs btn-danger-alt btn-label selectedSensorButtons\" ng-click=\"sensor.removeAll()\"><i class=\"ti ti-trash\"></i>Remove All</button>\n" +
    "                            <li ng-repeat=\"sensor in sensor.selectedSensors\" class=\"selectedSensorButtons\">\n" +
    "                                <button type=\"button\" class=\"btn btn-xs btn-danger btn-label\" ng-click=\"removeSensorFromList(sensor)\"><i class=\"ti ti-close\"></i>{{sensor.Module}} - {{sensor.Name}}</button>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </panel>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<!-- container-fluid -->\n"
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
}])
/* jshint ignore:end */