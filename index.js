import { Session } from "friend-connect";
import { host,ad,HostName,WorldName,Version,protocol,connectedPlayers,maxConnectedPlayers,ip,port,connectionType,maxConnectedPlayersc,ConnectedPlayersc,versionc,emailsADName,ADlink,ADemail } from './settings.js';
// Normal Hosting
function hostser(HostName,WorldName,Version,protocol,connectedPlayers,maxConnectedPlayers,ip,port,connectionType,maxConnectedPlayersc,ConnectedPlayersc,versionc,emails,) {
    if (host == 'true') {
        new Session({
            hostName: HostName, // The hostname of the server
            worldName: WorldName, // Use as a MOTD
            version: Version, // The version of the session, this can be any string.
        
            protocol: protocol, //The protocol of the server you are connecting to.
        
            connectedPlayers: connectedPlayers, // Used as a fallback if pinging the server fails.
            maxConnectedPlayers: maxConnectedPlayers, // Used as a fallback if pinging the server fails.
        
            ip: ip, // The ip of the server you are using.
            port: port, // The port of the server you are using.
            connectionType: connectionType, // I don't recommend changing this.
        
            log: true, // If you want to see the console output set to true.
            joinability: "joinable_by_friends", // The joinability of the session, if this is changed only one account can be used to connect to the session.
            autoFriending: true, // Set this to true if you want to automatically add people who follow the accounts.
            pingServerForInfo: true, // If FriendConnect keeps erroring out due to a rakNet ping error you can set this to false.
        
            tokenPath: "./auth", // The path to the directory that contains the authentication tokens.
            accounts: [emails], // A list of emails that correspond to accounts you want to use with FriendConnect.
        
            //These are values retrieved from the server on when the server advertisement is fetched, if true it will use a value from above.
            constants: {
                //worldName: true,
                //hostName: true,
                maxConnectedPlayers: maxConnectedPlayersc,
                connectedPlayers: ConnectedPlayersc,
                //protocol: true,
                version: versionc,
            },
        });
    }
}
hostser(HostName,WorldName,Version,protocol,connectedPlayers,maxConnectedPlayers,ip,port,connectionType,maxConnectedPlayersc,ConnectedPlayersc,versionc,emails)
// Ad hosting
function hostad(ADName,ADlink,ADemail) {
    if (ad == 'true') {
        new Session({
            hostName: ADName, // The hostname of the server
            worldName: ADlink, // Use as a MOTD
            version: §e§lAD§r, // The version of the session, this can be any string.
        
            protocol: 565, //The protocol of the server you are connecting to.
        
            connectedPlayers: 0, // Used as a fallback if pinging the server fails.
            maxConnectedPlayers: 0, // Used as a fallback if pinging the server fails.
        
            ip: Play.endergames.net, // The ip of the server you are using.
            port: 19132, // The port of the server you are using.
            connectionType: 6, // I don't recommend changing this.
        
            log: true, // If you want to see the console output set to true.
            joinability: "joinable_by_friends", // The joinability of the session, if this is changed only one account can be used to connect to the session.
            autoFriending: true, // Set this to true if you want to automatically add people who follow the accounts.
            pingServerForInfo: false, // If FriendConnect keeps erroring out due to a rakNet ping error you can set this to false.
        
            tokenPath: "./auth", // The path to the directory that contains the authentication tokens.
            accounts: [ADemail], // A list of emails that correspond to accounts you want to use with FriendConnect.
        
            //These are values retrieved from the server on when the server advertisement is fetched, if true it will use a value from above.
            constants: {
                //worldName: true,
                //hostName: true,
                maxConnectedPlayers: true,
                connectedPlayers: true,
                //protocol: true,
                version: true,
            },
        });
    }
}

hostad(ADName,ADlink,ADemail)