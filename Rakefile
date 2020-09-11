desc 'Build the site for testing'
task :test_build do
  # https://github.com/jekyll/jekyll/issues/4122#issuecomment-159439360
  sh 'jekyll build -d _test_site/'
end


require 'html-proofer'

# Keep in sync with the `ignoreUrls` in `./assets/js/application.js`.
BASE_PROOFER_OPTS = {
  url_ignore: [
    %r{https://18f.slack.com}i,
    %r{https://anywhere.gsa.gov}i,
    %r{https://bookit.gsa.gov}i,
    %r{https://calendar.gsa.gov}i,
    %r{https://connect.gsa.gov}i,
    %r{https://docs.google.com}i,
    %r{https://drive.google.com}i,
    %r{https://ea.gsa.gov}i,
    %r{https://email.gsa.gov}i,
    %r{https://eopf.opm.gov}i,
    %r{https://gcims.gsa.gov}i,
    %r{https://github.com/18F/Accessibility_Reviews}i,
    %r{https://github.com/18F/blog-drafts}i,
    %r{https://github.com/18F/codereviews}i,
    %r{https://github.com/18F/DevOps}i,
    %r{https://github.com/18F/Infrastructure}i,
    %r{https://github.com/18F/security-incidents}i,
    %r{https://github.com/18F/staffing}i,
    %r{https://github.com/18F/team-api.18f.gov}i,
    %r{https://github.com/18F/writing-lab}i,
    %r{https://gkey.gsa.gov}i,
    %r{https://gsa-tts.slack.com}i,
    %r{https://gsa.my.salesforce.com}i,
    %r{https://gsaolu.gsa.gov}i,
    %r{https://hrlinks.gsa.gov}i,
    %r{https://hrprod.hr.gsa.gov}i,
    %r{https://insite.gsa.gov}i,
    %r{https://mail.gsa.gov}i,
    %r{https://meet.gsa.gov}i,
    %r{https://sign.gsa.gov}i,
    %r{https://tock.18f.gov}i,
    # https://github.com/gjtorikian/html-proofer/issues/118
    '#'
  ]
}

desc 'Build and test the site, checking local URLs only'
task ci_test: [:test_build] do
  HTMLProofer.check_directory('./_test_site', BASE_PROOFER_OPTS.merge(
    disable_external: true
  )).run
end

desc 'Build and test the site, checking all URLs'
task test: [:test_build] do
  HTMLProofer.check_directory('./_test_site', BASE_PROOFER_OPTS).run
end
