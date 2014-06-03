
# 2.0.4

- Build settings file, I think generated by Architect.
- A hint to remember what part of ContextItem could be helpful
- Fix controller resolving
- Update specs
- Update tab icons
- Update contributors
- Some code updates from grunt run
- Some error handling and display updates
- Add app name to app details, disable MVC tab if not an MVC app
- Add Mitchell as collaborator
- MVC tab works with touch now
- Ext JS 4 MVC Tab
- Committing icon set per issue #63
- Updating test README and setup
- Adding link to blog
- Add the grunt task to run the tests on Siesta Lite. (senchalabs/AppInspector#61)
- test readme
- Some additional tests, and trying to un-fuck my local Cmd setup.
- better have https://
- updated Chrome Web Store image to new URL
- properties and methods highlight (#40) + Filter
- More unit test setup. Not all of it working
- Component and Store tests for Ext 4
- First ExtJS 4 unit test in place!
- First pass at test suite setup. Nothing useful in place yet.
- adding Siesta Lite to project
- enable mocks.js for development dist/
- applied settings/jetbrains.jar code styles
- Adding mock object to self-inspect while running locally as a web app.
- Touch doesn't have the concept of "layout runs" because it's all managed as CSS. Disabling this tool in Touch.
- Working layout recorder in Ext JS. Need to implement Touch.
- Fixing issue #42 - component highlighting
- Fix for issue #52
- Release checklist per issue #55
- Fix for issue #50.
- load-grunt-tasks module updateed
- minor changes
- CONTRIBUTING added
- CHEANGELOG added
- fix various JShint errors
- Filter for Events list per issue #49.
- Added some messages that were overlooked.
- Add my name to the contributors list. I'm honored :)
- Paging store records, fixing issue #41
- Added i18n mechanism and locale file of Japanese.
- filtering done. Closes #39
- filtering done. #39
- mockup data removed
- added filtering. #39
- locales added
- Move LICENSE file back to project root and updated copy task instead.
- initial load Components, Stores and Layout tabs

# 2.0.3
 
- Moving license so that it gets copied in Grunt build
- Fixed JSHint error
- Updated license
- initial load Components, Stores and Layout tabs
- Fixing page reload on hash change bug. Added helper class for inspectedWindow, refactoring the Event monitor logic Attempting to implement right-click menu, but no success yet
- needed to fix Grunt in order for new release to publish in CWS
- correctly monitoring page refresh
- better bug fix for Ext JS 5 (issue #29)
- Correcting README
- Fix for Ext JS 5 Component Manager bug (issue #29)
- Fixing the Chrome manifest so running unpacked extension locally is easier
- UI updates on About tab
- formatting
- added indicator on disabled devtools when no Sencha framework found
- meh. mergefiles be gone
- ui facelift
- ui facelift
- new grunt tasks (dev, watch) + updated GrundJS.md
- added empty node_modules folder with README instructions
- move PHPstorm code style settings to new seetings/ dir
- unpublish node_modules/
- Fixing Ext JS event captures. I think Touch might be okay...
- Fixed #22 - store inspector bug on TreeStores
- Fixed #21 - component tree resizing bug
- We cannot publish with experimental permissions
- Fixing issue #16
- lodash needs to be local or it throws errors?
- PHP Storm settings.. don't know how to transform this into .editorconfig
- ran npm update
- replaced node.js fs.* calls with grunt.file.*
- added documentation to grunt tasks
- exec task test
- Updating manifest files
- Trying to get the contextMenu to work, but failing hardcore
- Updating docs to better instruct devs on running the code
- Update to README
- Fixing buggered merge
- grunt tasks made easy
- grunt task updated & refactored
- grunt update \n grunt tasks split into subfolders
- upgrade SenchaCMD > 4.0.2.67
- pre pull-request changes
- more cleanup
- further cleanup
- bump Sencha CMD version
- JSDuck
- app/AppInspector/ext/ sources deleted
- include locales in copy task
- contributors
- cleanup
- Some icon and style updates
- Rewritng Event recorder to work for both Touch and Ext.
- adding git pre-commit-hook via grunt-githooks
- better output for jshint task
- jshint enabled for AppInspector
- project refactored
- Minor updates
- Fixing display of XTYPE in component treegrid
- create deploy directory if it does not exist
- Better element highlighting, and used across Ext & Touch
- Build script for minified Chrome app, with necessary resources.
- Renaming so Chrome can load the extension.
- Updating the README
- Adding documentation via JSDuck
- Adding additional info for Layouts panel. Also linking contributor names to websites.
- More Ext/Touch normalization
- Normalizing some logic across Ext and Touch
- Upgrade of Architect. Also beginning to separete Ext/Touch logic.
- Basic "event" monitor implementation.
- Adding base views for events and performance
- Added "about" page starter
- Changing color to black because I dislike the Neptune blue.
- Adding theme (so I can modify later). Also added some icons and placeholder buttons for new functionality.
- Removing SASS/CSS that I don't need
- Added component introspection, some other cleanup
- Fixed LintRoller setup to pass
- Removing old workspace
- Adding Main controller
- App profiles added. Functionality almost completely back.
- Porting store inspector to Architect
- First pass with Architect
- Setting up LintRoller
- Initial start of API documentation
- Removing all of Bruno's original app since I have duplicated the functionality.
- Moving inspectedWindow logic into utility classes to clean up controllers. This should also allow me to extend them for other frameworks/versions.
- Utility class for running code inside inspected window.
- Better component tree
- Refreshing store list
- Fixing check for box layout nesting
- Trying to diagnose nested box layouts
- Highlighting overnested components
- Overnesting utility!
- Inspection of models inside stores.
- Grabbing basic app info to display. This probably only works in Ext 4.x right now.
- App Inspector can read what stores are currently loaded in the app.
- A bit of cleanup before moving forward.
- Ext JS is loading inside Chrome DevTools, replacing original UI. Zero functionality yet.
 
# 1.1.1
 
- Update README link to Chrome Store
- Cleanup for CSS and SidePanel class
- New Component Properties Inspector + Project Cleanup
- Rename namespace, make it work with Ext 3
- Update inspector when switching from Sencha Application to non-application
- Update extension when inspected window reloads or changes
- Remove unused ComponentPropertiesSection.js
- Fix readme message
- Initial commit