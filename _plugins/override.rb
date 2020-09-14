require "yaml"

module Jekyll
  ##
  # Loads custom, guide-specific config and data under GUIDE_DIR.
  # Configuration keys are limited to those specified in this class,
  # orginating from uswds-jekyll, jekyll-sitemap, and isidurs-bane.
  # Data filenames/keys are limited to those in DATA_FILES.
  #
  class OverrideGenerator < Generator
    # Guide-specific directory for configuration, data, and content
    GUIDE_DIR = "_guide"
    # Guide-specific configuration file
    GUIDE_CONFIG = File.join("_guide", "_config.yml")

    # Supported keys in GUIDE_CONFIG:

    # Sets the guide title in the header and anchor, from uswds-jekyll
    TITLE_KEY = "title"
    # Sets the guide description in the <meta> element, from uswds-jekyll
    DESC_KEY = "description"
    # Sets the URL used in the sitemap.xml, from jekyll-sitemap
    URL_KEY = "url"
    # Sets the GitHub repository information for the "Edit this page" link, from uswds-jekyll
    GITHUB_KEY = "github_info"
    # Sets the search.gov handle used with the search function in the header, from uswds-jekyll
    SEARCH_KEY = "search_site_handle"
    # Sets the organization managing this guide, from isidurs-bane
    ORG_KEY = "org"

    # Parent directory for org-specific data
    ORGS_DATA_DIR = File.join("_data", "orgs")

    # Guide-specific data
    GUIDE_DATA_DIR = File.join("_guide", "_data")

    # Supported uswds-jekyll and isidurs-bane data files
    DATA_FILES = ["header.yml", "navigation.yml", "footer.yml", "theme.yml", "anchor.yml"]

    safe true

    ##
    # Merges keys in GUIDE_CONFIG with those set in _config.yml.
    # Also loads uswds-jekyll and isidurs-bane YAML data files under
    # ORGS_DATA_DIR and in GUIDE_DATA_DIR, overriding any keys found
    # in _data. Key precedence is GUIDE_DATA_DIR, then the optional
    # org-specific sub-directory in ORGS_DATA_DIR, then finally _data.
    #
    # This method is run after Jekyll has made an inventory of
    # the existing content, and before the site is generated, per:
    # https://jekyllrb.com/docs/plugins/generators/
    #
    def generate(site)
      merge_config_file(site)

      merge_org_data(site)

      merge_guide_data(site)
    end

    private

    def merge_org_data(site)
      yamls = DATA_FILES
      yamls.each do |y|
        org = site.config[ORG_KEY]
        if org
          merge_data(site, File.join(ORGS_DATA_DIR, org), y)
        end
      end
    end

    def merge_guide_data(site)
      yamls = DATA_FILES
      yamls.each do |y|
        merge_data(site, GUIDE_DATA_DIR, y)
      end
    end

    ##
    # Federalist does not allow multiple Jekyll config files to be
    # specified (i.e., with --config), so this approximates that
    # Jekyll feature.
    #
    def merge_config_file(site)
      required = [TITLE_KEY, DESC_KEY, GITHUB_KEY, SEARCH_KEY, URL_KEY]
      optional = [ORG_KEY]

      original_url = site.config[URL_KEY]

      customizations = YAML.load_file(GUIDE_CONFIG)
      if customizations
        required.each do |k|
          site.config[k] = customizations[k]
        end

        optional.each do |k|
          if customizations.key?(k)
            site.config[k] = customizations[k]
          end
        end

        # Per https://jekyllrb.com/docs/variables/, Jekyll will set
        # the url at runtime in dev environments -- preserve, if set
        if original_url
          site.config[URL_KEY] = original_url
        end
      end
      puts "        Merged " + GUIDE_CONFIG
    end

    def merge_data(site, dir, file)
      path = File.join(dir, file)
      unless File.exist?(path)
        # Not every org/guide will need to override a given data file
        return
      end

      begin
        customizations = YAML.load_file(path)
        if customizations
          # Per https://jekyllrb.com/docs/datafiles/
          key = File.basename(path, File.extname(path))
          site.data[key].merge!(customizations)
          puts "        Merged " + path
        end
      rescue
        puts "         ERROR " + path
        raise
      end
    end
  end
end
