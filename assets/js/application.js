document.addEventListener(
  "DOMContentLoaded",
  function () {
    PrivateEye({
      defaultMessage: "This link is private to TTS.",
      ignoreUrls: [
        "18f.slack.com",
        "docs.google.com",
        "ea.gsa.gov",
        "github.com/18F/security-incidents",
        "gsa-tts.slack.com",
        "insite.gsa.gov",
      ],
    });
  },
  false
);
