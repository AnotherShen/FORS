# FORS - Feeds of Random Stuff
A cyber 'threat feed' for your TV.

Is your CIRT/SOC/COT/Centre of Cyber Security missing a bit of pizazz? 
Do you often have the big wigs and brass walk in and wonder if you actually do anything? 
Are you on the hook for promotional photos and need to show something 'cybery'?

Feeds of Random Sh.. Stuff is for you. 
* PEW PEW Map
* International Clocks
* RSS Cyber Feed

Yes it literally means nothing and we all know it.

![image](https://user-images.githubusercontent.com/9160174/116641905-d3558b80-a9ac-11eb-80aa-990707215183.png)

## Installation
### Install MagicMirror^2
```
sudo apt update && sudo apt install curl git npm
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
git clone https://github.com/MichMich/MagicMirror
```

### Install FORS Modules
```
git clone https://github.com/0xShen/FORS
cp -r MagicMirror/* FORS/ && rm -rf MagicMirror
cd FORS
npm install
chmod +x start.sh
```

### Start FORS
```
./start.sh
```

### Stop FORS
```
Ctrl+Q
```

### Autostart & Restart
Checkpoint Threat Feed often times out after long durations. This should prevent it by restarting every 6 hours.
```
crontab -e
@reboot sleep 10; cd /home/user/Desktop/FORS; ./start.sh
0 */6 * * * cd /home/user/Desktop/FORS; ./restart.sh
```

### Configure GUI
If the GUI scale is out of whack change the iframe dimensions in config/config.js.

## Versions
210219 - Proof of concept

210430 - Fixed RSS Feed clipping by limiting it to half the screen.

210713 - Added auto start and restart guide & scripts.

## Planned Features
* Custom Pew Pew map able to ingest tap data or netflow captures
* Additional page with a better newfeed containing multimedia
* Panic button to bring up FORS if something else *cough* sports *cough* is playing
* OzBargain feed for cracking tech deals

## Credits 
FORS is essentially a preconfigured [MagicMirror](https://magicmirror.builders/) project utilising some [3rd party modules](https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules). Planned features will come in the form of custom modules.
