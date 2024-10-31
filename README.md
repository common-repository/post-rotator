postrotator
===========

WordPress Post Rotator.

Current stable version: 0.9.1

Use a simple shortcode to create a sliding gallery of the recent posts in any page.

Example:

[postrotator]

[postrotator cat=16 height=350px speed=6000 autorotate=off numberposts=3]

Currently supported variables:

cat=16 -> add a category id to show all posts from a specific category.

height=350px -> add a value in pixels (or percent) to set a defaut height. Post Rotator will calculate the size of
the panels automatically and will use this value as a fallback.

speed=6000 -> intervals in milliseconds for autorotation.

autorotate=off -> switch off autorotation (default: on).

numberposts=3 -> limit the number of posts to show (by default shows all posts).
