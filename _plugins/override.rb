require 'yaml'

module Jekyll

  ##
  # Loads 18F/uswds-jekyll YAML config files in OVERRIDE_DIR, overriding any keys found in _data.

  class OverrideGenerator < Generator
    OVERRIDE_DIR = '_data/override/'

    safe true

    def generate(site)
      yamls = ['header', 'navigation', 'footer', 'theme'] 
      yamls.each do |y|
        self.merge(site, y)
      end
      # TODO Address favicons.yml special case
    end

    def merge(site, key)
      begin
        customizations = YAML.load_file(OVERRIDE_DIR + key + '.yml')
        if customizations
          site.data[key].merge!(customizations)
        end
      rescue
      end
    end
  end

end
