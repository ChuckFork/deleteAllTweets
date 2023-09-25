javascript:

'use strict';

/* MIT License
 * 
 * Copyright (c) 2021 gh0$t
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. */

(function () {
    var tweetsToDelete = 20; // Set the number of tweets to delete
    var tweetsDeleted = 0; // Initialize a counter for deleted tweets

    var deleteTweets = function () {
        var tweetsRemaining = document.querySelectorAll('[role="heading"]+div')[1].textContent;
        console.log('Deleted: ' + tweetsDeleted + ', Remaining: ' + tweetsRemaining);

        // Check if we've deleted the desired number of tweets
        if (tweetsDeleted >= tweetsToDelete) {
            console.log('Deleted ' + tweetsToDelete + ' tweets. Stopping execution.');
            return;
        }

        window.scrollBy(0, 10000);
        document.querySelectorAll('[aria-label="More"]').forEach(function (menu, index, array) {
            menu.click();
            document.querySelectorAll('span').forEach(function (action, index2, array2) {
                if (action.textContent === 'Delete') {
                    action.click();
                    document.querySelectorAll('[data-testid="confirmationSheetConfirm"]').forEach(function (confirm, index3, array3) {
                        confirm.click();
                    });
                    tweetsDeleted++; // Increment the counter after a tweet is deleted
                }
                else {
                    document.body.click();
                }
            });
        });

        setTimeout(deleteTweets, 0);
    };

    deleteTweets();
})();


