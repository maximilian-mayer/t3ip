# Require any additional compass plugins here.
# Set this to the root of your project when deployed:

http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"
fonts_dir = "fonts"
#generated_images_dir = "gen_img"

#require 'rgbapng'
environment = :development

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded
#output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

asset_cache_buster :none
#asset_cache_buster {|*args| nil }

require 'breakpoint'
# Have Growl? http://growl.info
# 1. run `gem install compass-growl`
# 2. uncomment the following:
# require "compass-growl"
# require 'ninesixty'


