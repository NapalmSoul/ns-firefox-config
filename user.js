// =============================================================================
// user.js — Firefox Performance Tweaks
// Privacy + Performance tweaks
// Here be dragons! Tweak and use for your own needs
// =============================================================================

// -----------------------------------------------------------------------------
// PRIVACY & TELEMETRY
// -----------------------------------------------------------------------------
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.auto", false);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.sessionstore.privacy_level", 0);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.greasemonkey.stats.optedin", false);
user_pref("extensions.greasemonkey.stats.url", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.trr.mode", 5);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);
user_pref("privacy.query_stripping", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSite", false);
user_pref("signon.autofillForms", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("webgl.renderer-string-override", " ");
user_pref("webgl.vendor-string-override", " ");

// -----------------------------------------------------------------------------
// UI
// -----------------------------------------------------------------------------
user_pref("browser.uidensity", 1);                        // Compact UI density
user_pref("media.autoplay.default", 0);
user_pref("media.autoplay.enabled", true);

// -----------------------------------------------------------------------------
// RENDERING & PAINT - start drawing immediately, progressive load
// -----------------------------------------------------------------------------
user_pref("nglayout.initialpaint.delay", 0);              // Paint instantly
user_pref("nglayout.initialpaint.delay_in_oopif", 0);     // Same for iframes
user_pref("content.notify.interval", 849999);             // Layout update interval
user_pref("content.notify.backoffcount", 5);              // Backoff count
user_pref("content.interrupt.parsing", true);             // Allow UI to interrupt parser

// -----------------------------------------------------------------------------
// GPU / WEBRENDER - full hardware acceleration
// -----------------------------------------------------------------------------
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("gfx.webrender.precache-shaders", true);        // Precache GPU shaders
user_pref("gfx.webrender.program-binary-disk", true);     // Store compiled shaders to disk

// -----------------------------------------------------------------------------
// NETWORK - HTTP/3, connection tuning, keepalive
// -----------------------------------------------------------------------------
user_pref("network.http.http3.enable", true);             // HTTP/3 over QUIC
user_pref("network.http.http3.enable_0rtt", true);        // Zero RTT resumption
user_pref("network.http.max-connections", 900);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-persistent-connections-per-proxy", 20);
user_pref("network.http.tcp_keepalive.long_lived_time", 600);
user_pref("network.http.tcp_keepalive.short_lived_time", 60);

// -----------------------------------------------------------------------------
// CACHE - disk + memory, balanced for speed without index bloat
// -----------------------------------------------------------------------------
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.capacity", 1048576);        // 1GiB disk cache
user_pref("browser.cache.disk.max_entry_size", 102400);   // 100MiB max single file
user_pref("browser.cache.disk.content_type_media_limit", 102400); // 100MiB media
user_pref("browser.cache.disk.preload_chunk_count", 16);  // Read-ahead chunks (NVMe)
user_pref("browser.cache.disk.metadata_memory_limit", 32768); // 32MiB cache index in RAM
user_pref("browser.cache.memory.capacity", 524288);       // 512MiB memory cache
user_pref("browser.cache.memory.max_entry_size", 10240);  // 10MiB max single entry

// -----------------------------------------------------------------------------
// PROCESS COUNT - parallelism without IPC overhead explosion
// -----------------------------------------------------------------------------
user_pref("dom.ipc.processCount", 8);
user_pref("dom.ipc.processCount.webIsolated", 4);         // Half of processCount
user_pref("dom.ipc.processCount.file", 1);
user_pref("dom.ipc.processCount.privilegedabout", 3);
user_pref("dom.ipc.processCount.privilegedmozilla", 1);
user_pref("dom.ipc.multiOptOut", -1);                     // Keep multi-process enabled
