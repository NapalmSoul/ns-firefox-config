# NapalmSoul's Firefox Config

Personal Firefox / Zen Browser `user.js` — privacy hardened + performance tuned.

The big brother of [ns-firefox-config-lean](https://github.com/NapalmSoul/ns-firefox-config-lean)

## What's in here

- Full telemetry and crash reporting disabled
- Pocket, sponsored content, experiments nuked
- Tracking protection, fingerprinting protection, query stripping enabled
- WebRTC disabled (network scan prevention)
- DNS-over-HTTPS disabled
- All performance tweaks from [ns-firefox-config-lean](https://github.com/NapalmSoul/ns-firefox-config-lean)

## Installation

Drop `user.js` into your Firefox or Zen profile folder and restart.

**Firefox (Linux):** `~/.mozilla/firefox/<PROFILE_FOLDER>/`
or
`~/.config/mozilla/firefox/<PROFILE_FOLDER_>/`

**Firefox (Windows):** `%APPDATA%\Mozilla\Firefox\Profiles\<PROFILE_FOLDER>\`

**Zen (Linux):** `~/.zen/<PROFILE_FOLDER>/`
or
`~/.config/zen/<PROFILE_FOLDER>/`

## Extensions that complement this config

- AdNauseam (uBlock Origin-based)
- CanvasBlocker
- LocalCDN

### End Notes
This is definitely not for everyone, but you're free to take a peek and use what you see fit.

- `media.peerconnection.enabled = false` — WebRTC disabled, will probably break browser-based video calls
- `media.eme.enabled = false` — DRM disabled, use desktop apps for Netflix/Spotify etc.
- `signon.autofillForms = false` — password autofill disabled, handled by other extensions like KeePassXC-Browser or Bitwarden Password Manager

*Given enough time and will - I will be fleshing this out with an actual install script or something...*
