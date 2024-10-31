=== Post Rotator ===
Contributors: sirbolkins
Tags: Post, posts, slideshow, shortcode
Requires at least: 3.0.1
Tested up to: 3.5.1
Stable tag: 0.9.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add a rotating gallery showing full posts to any page or widget using a simple shortcode.

== Description ==

Use shortcode [postrotator] and the various parameters to embed a jquery rotating gallery of posts. You can set the rotation speed
(or turn off autorotation), set the number of posts to show, and limit the rotator to a specific cateogry (or categories).

The rotator is fully responsive and will fit into any column in which it is placed. It calculates the height required to show the gallery using the longest post it loaded into the gallery.

This project can also be found on [github](https://github.com/sirbolkins/postrotator).

== Installation ==

1. Install and activate the plugin.
2. Use [postrotator] to show a rotating gallery in any page or text widget.
3. Add variables to modify the gallery's behavior.

Currently supported variables:
[postrotator cat=16 height=350px speed=5000 autorotate=off numberposts=3]

*cat=16*

Add a category id to show all posts from a specific category.

*height=350px*

Add a value in pixels (or percent) to set a defaut height. Post Rotator will calculate the size of the panels automatically and will use this value as a fallback.

*speed=6000*

Intervals in milliseconds for autorotation.

*autorotate=off*

Switch off autorotation (default: on).

*numberposts=3*

Limit the number of posts to show (by default shows all posts).

== Changelog ==

= 0.9.1 =
* First stable version

== Upgrade Notice ==