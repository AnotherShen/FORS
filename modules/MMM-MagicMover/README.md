# MMM-MagicMover

A module for [MagicMirror²](https://github.com/MichMich/MagicMirror) to prevent screen burn-in.

## Install

1. Clone repository into `../modules/` inside your MagicMirror folder.

```
cd ~/MagicMirror/modules
git clone https://github.com/Lavve/MMM-MagicMover
```

2. Add the module to the MagicMirror config.js

```javascript
{
  module: "MMM-MagicMover",
  config: {
    updateInterval: 60 * 1000,
    maxMove: 20,
  }
},
```

Note that `position` isn't used, and is obsolete even if added to config

## Configuration options

| Configuration  | Default   | Description                                                             |
| -------------- | --------- | ----------------------------------------------------------------------- |
| updateInterval | `60*1000` | (int) Time in milliseconds before next movement                         |
| maxMove        | `20`      | (int) Amount of pixels the container is moved based on default position |

## Enable/disable module

To enable/disable MMM-MagicMover from other modules use the following code:

```javascript
this.sendNotification('MAGIC_MOVER_ON', {});
this.sendNotification('MAGIC_MOVER_OFF', {});
```

## Collaborate

Pull requests and suggestions for improvements are more than welcome.

## Donations

[Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=SM9XRXUPPJM84&item_name=%40lavve+MagicMiror+Modules&currency_code=SEK) if you like my modules! <3
