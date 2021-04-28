/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-MagicMover",
			config: {
				updateInterval: 60 * 1000,
				maxMove: 20,
			}
		},
		{
			module: 'MMM-iFrame',
			position: 'fullscreen_above',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["https://threatmap.checkpoint.com/"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000000, // rotate URLs every 30 seconds
					width: "1920", // width of iframe
					height: "750", // height of iframe
					frameWidth: "100%" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
		},
		{
			module: 'MMM-Worldclock',
			position: 'bottom_bar', // This can be any of the regions, best results in top_left or top_right regions
			config: {
				timeFormat: 'HH:mm', //defined in moment.js format()
				dateFormat: 'DD MMM YY',
				style: 'top', //predefined 4 styles; 'top', 'left','right','bottom'
				offsetTimezone: null, // Or you can set `Europe/Berlin` to get timegap difference from this timezone. `null` will be UTC timegap.
				clocks: [
					{
						title: "Zulu",
						timezone: "Etc/GMT+0",
						flag: "un"
					},
					{
						title: "Adelaide",
						timezone: "Australia/Adelaide",
						flag: "au"
					},
					{
						title: "Beijing",
						timezone: "Asia/Shanghai",
						flag: "cn"
					},
					{
						title: "Moscow",
						timezone: "Europe/Moscow",
						flag: "ru"
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				wrapDescription: "true",
				feeds: [
					{
						title: "Fortinet Threat Research",
						url: "https://feeds.feedburner.com/fortinet/blog/threat-research",
						encoding: "UTF-8" //ISO-8859-1
					},
					{
						title: "Krebs on Security",
						url: "https://krebsonsecurity.com/feed/",
						encoding: "UTF-8" //ISO-8859-1
					},
					{
						title: "HaveIBeenPwned Latest Breaches",
						url: "https://feeds.feedburner.com/HaveIBeenPwnedLatestBreaches",
						encoding: "UTF-8" //ISO-8859-1
					},
					{
						title: "Hacker News",
						url: "https://feeds.feedburner.com/TheHackersNews",
						encoding: "UTF-8" //ISO-8859-1
					},
					{
						title: "Threat Post",
						url: "https://threatpost.com/feed",
						encoding: "UTF-8" //ISO-8859-1
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-Carousel',
			position: 'bottom_bar',
			config: {
				mode: 'slides',
				transitionInterval: 0,
				slideTransitionSpeed: 1500,
				ignoredModules: [],
				slides: {
					main: ["alert", "updatenotification", "MMM-iFrame","MMM-Worldclock","newsfeed"],
					"Slide 2": ["alert", "updatenotification", "MMM-Worldclock","newsfeed"],
					"Slide 3": ["alert", "updatenotification", "MMM-Worldclock","newsfeed"]
				},
				showPageIndicators: true,
				showPageControls: true,
				keyBindings: {
					enabled: true,
					mode: "DEFAULT",
					map: {
						NextSlide:"ArrowRight",
						PrevSlide:"ArrowLeft",
						Slide0:"Home"
					}
				}
	
			}
        	},
		{
		    module: 'MMM-KeyBindings',
		    config: {
			evdev: { enabled: false },
			enableKeyboard: true
		    }
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
