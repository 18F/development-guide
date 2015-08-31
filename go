#! /usr/bin/env ruby

require 'English'

Dir.chdir File.dirname(__FILE__)

def try_command_and_restart(command)
  exit $CHILD_STATUS.exitstatus unless system command
  exec RbConfig.ruby, *[$PROGRAM_NAME].concat(ARGV)
end

begin
  require 'bundler/setup' if File.exist? 'Gemfile'
rescue LoadError
  try_command_and_restart 'gem install bundler'
rescue SystemExit
  try_command_and_restart 'bundle install'
end

begin
  require 'go_script'
rescue LoadError
  try_command_and_restart 'gem install go_script' unless File.exist? 'Gemfile'
  abort "Please add \"gem 'go_script'\" to your Gemfile"
end

require 'guides_style_18f'

extend GoScript
check_ruby_version '2.1.5'

command_group :dev, 'Development commands'

def_command :update_nav, 'Update the \'navigation:\' data in _config.yml' do
  GuidesStyle18F.update_navigation_configuration Dir.pwd
end

def_command :update_theme, 'Update the guides_style_18f gem' do
  exec_cmd 'bundle update --source guides_style_18f'
end

def_command :update_gems, 'Update Ruby gems' do |gems|
  update_gems gems
end

def_command :serve, 'Serve the site at localhost:4000' do
  serve_jekyll
end

def_command :build, 'Build the site' do
  build_jekyll
end

execute_command ARGV
