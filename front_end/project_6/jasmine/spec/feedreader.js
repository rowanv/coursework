
/* feedreader.js
 *
 * This is the spec file that Jasmine reads and contains
 * all of the tests that are run.
 */


$(function() {
  'use strict';
    /* RSS Feeds Test suite
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been defined
         and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds instanceof Array).toBeTruthy();
        });


        /* Loops through each feed in the allFeeds object and ensures
        it has a URL defined and that the URL is not empty. */

         it('have URLS defined and have URL feeds that are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
                expect(allFeeds[i].url).toMatch(/^http(s?)\:\/\//);
            }

         });


        /* Loops through each feed in the allFeeds object and ensures
        * it has a name defined */

        it('have names defined and have names that are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });


    /* Menu test suite */
    describe('The menu', function() {


        // Ensures the menu element is hidden by default.

         it('is hidden by default', function(){
            expect($('.body').hasClass('hidden')).toBeFalsy();
         });

         /* Ensures the menu changes visibility when the menu icon is clicked.
          * Has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function(){
          var menuIcon = $('.menu-icon-link');

          menuIcon.trigger('click');

          expect($('body').hasClass('menu-hidden')).toBe(false);
          menuIcon.trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });



    /*"Initial Entries" test suite */

    describe('Initial Entries', function() {
      var initialEntries;

      beforeEach(function(done) {
        loadFeed(0, function() {
          initialEntries = $('.feed').html();

          loadFeed(1, function() {
            afterEntries = $('.feed').html();
              done();
            });
            });
          });
        /* Ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('when the loadfeed function is called and completes its work, there is at least a single .entry element within the .feed container', function() {
            expect(initialEntries).not.toBe(null);
        });
      });


    /* Test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
        var initialEntries;

          beforeEach(function(done) {
          loadFeed(0, function() {
            initialEntries = $('.feed').html();

              loadFeed(1, function() {
                afterEntries = $('.feed').html();
                done();
              });
            });
          });

        /* When a new feed is loaded by the loadFeed function the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('when a new feed is loaded the content actually changes', function(done) {

            loadFeed(2, done);
            expect(afterEntries).not.toEqual(initialEntries);
        });



    });
}());





