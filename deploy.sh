#!/bin/bash

rm -rf dist

rm -rf /var/www/html/css
rm -rf /var/www/html/img
rm -rf /var/www/html/js
rm -f /var/www/html/favicon.svg
rm -f /var/www/html/index.html

mv css /var/www/html
mv img /var/www/html
mv js /var/www/html
mv favicon.svg /var/www/html
mv index.html /var/www/html