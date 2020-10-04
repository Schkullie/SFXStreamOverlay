
var channel = "Schkullie" ;
//your Twitchname. Leave the "" alone. It will not work without them.

var bot = "StreamElements";
//Put the name of your bot here. Leave the "" alone. It will not work without them.

var startingMinutes = 7;
//the time your timer should start with in minutes

//------------------------------------------------------------------------------------------------------------------------

var endsound = 'yes';
//toggle if a sound should be played when the timer ends. Put 'yes' to activate and 'no' to deactivate

var sound = 'yes';
//toggle if a sound should be played for adding/removing time. Put 'yes' to activate and 'no' to deactivate

//------------------------------------------------------------------------------------------------------------------------

var fastertime = 10;
//time that gets removed from the timer in seconds

var slowertime = 10;
//time that gets added to the timer in seconds

//------------------------------------------------------------------------------------------------------------------------
//Use this if you don't want to use any point system

var fastercommand = 'faster';
//command name after the ! that removes time from the timer

var slowercommand = 'slower';
//command name after the ! that adds time to the timer

var commandtimeout = 2 ;
//set a timeout for the command usage, so I can't be spammed

//------------------------------------------------------------------------------------------------------------------------
//Use this if you want to use a point system provided by a bot

var fastermessage = "10 seconds have been removed from the timer!";
//message your bot says on command with which time should be removed
//Enables the useage of your bots point system

var slowermessage = "10 seconds have been added to the timer!";
//message your bot says on command with which time should be added
//Enables the useage of your bots point system

//------------------------------------------------------------------------------------------------------------------------
//use this if you want to integrat you channel points with the timer

// get your Reward IDs here: https://www.instafluff.tv/TwitchCustomRewardID/?channel=YourChannelName

var rewardidslower = "";
//The RewardID for your slower Redeem to make redeemed Point Rewards possible
//Enables the useage of your channel point system

var rewardidfaster = "";
//The RewardID for your faster Redeem to make redeemed Point Rewards possible
//Enables the useage of your channel point system
