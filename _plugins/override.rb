require 'yaml'

module Jekyll

  ##
  # Loads 18F/uswds-jekyll YAML config files in OVERRIDE_DIR, overriding any keys found in _data.

  class OverrideGenerator < Generator
    OVERRIDE_DIR = File.join("_data", "override")
    SUBORGS_DIR = File.join("_data", "suborgs")

    safe true

    def generate(site)
      yamls = ['header', 'navigation', 'footer', 'theme', 'usa_anchor'] 
      yamls.each do |y|
        if site.config['suborg']
          self.merge(site, File.join(SUBORGS_DIR, site.config['suborg']), y)
        end
        self.merge(site, OVERRIDE_DIR, y)
      end
      # TODO Address favicons.yml special case
    end

    def merge(site, dir, key)
      begin
        path = File.join(dir, key + '.yml')
        customizations = YAML.load_file(path)
        if customizations
          site.data[key].merge!(customizations)
          puts "        Merged " + path
        end
      rescue
      end
    end
  end

end
