#!/bin/bash

rm -rf /var/www/html/css
rm -rf /var/www/html/img
rm -rf /var/www/html/js
rm -f /var/www/html/favicon.svg
rm -f /var/www/html/index.html

mv dist/css /var/www/html
mv dist/img /var/www/html
mv dist/js /var/www/html
mv dist/favicon.svg /var/www/html
mv dist/index.html /var/www/html