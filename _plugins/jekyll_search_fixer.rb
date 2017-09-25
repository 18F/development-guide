module Jekyll
  class << self
    alias_method :orig_sanitized_path, :sanitized_path

    # This is a horrible workaround for:
    # https://github.com/18F/jekyll_pages_api_search/issues/37
    def sanitized_path(base_directory, questionable_path)
      if questionable_path.nil?
        questionable_path = ''
      end
      orig_sanitized_path base_directory, questionable_path
    end
  end
end
