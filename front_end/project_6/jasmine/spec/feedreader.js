'use strict';
/* feedreader.js
 *
 * This is the spec file that Jasmine reads and contains
 * all of the tests that are run.
 */


$(function() {
    /* RSS Feeds Test suite
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been defined
         and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object and ensures
        it has a URL defined and that the URL is not empty. */

         it('have URLS defined and have URL feeds that are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            }

         })


        /* Loops through each feed in the allFeeds object and ensures
        * it has a name defined */

        it('have names defined and have names that are not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            }
        })
    });


    /* Menu test suite */
    describe('The menu', function() {


        // Ensures the menu element is hidden by default.

         it('is hidden by default', function(){
            expect($('.body').hasClass('hidden')).toBeFalsy();
         })

         /* Ensures the menu changes visibility when the menu icon is clicked.
          * Has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility when the menu icon is clicked', function(){
            var menuIcon = $('.menu-icon-link');
            menuIcon.trigger('click');

            expect($('.menu-hidden')).toBeFalsy;
            menuIcon.trigger('click');
            expect($('.menu-hidden')).toBeTruthy();

          })
    });



    /*"Initial Entries" test suite */

    describe('Initial Entries', function() {

        var load = new loadFeed;

        beforeEach(function(done) {
            load.feed.load(function() {
                done();
            });
        });
        /* Ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('when the loadfeed function is called and completes its work, there is at least a single .entry element within the .feed container', function() {
                expect(load.feed.load.entry).toBeTruthy;
                done();
            });

    /* Test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
        var newFeed = new loadFeed();

        beforeEach(function(done) {
            newFeed.feed.load(function(){
                done();
            });
        });

        /* When a new feed is loaded by the loadFeed function the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('when a new feed is loaded the content actually changes', function() {
            expect(loadFeed.feed).toBeTruthy;
        })
    })


    });

}());


