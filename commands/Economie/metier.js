const {MessageEmbed} = require('discord.js');
const metiers = require("../../assets/rpg/metiers/metiers.json");

module.exports.run = async (client, message, args, settings, dbUser) => {

    if(!args[0]) { 
        let string_metier = "";
        metiers.forEach(e => {
            string_metier = string_metier + `**${e.name}**\n`;            
        });
        message.channel.send("Liste des métiers disponible : \n" + string_metier);
    }

    if(args[0] == "infos") {
        try {
            let mt = client.filterByName(metiers, args[1]);
            message.channel.send(`**${mt.name}**\n**${mt.salaire}** :coin: de l'heure\n**${mt.horaires}** heures d'affilées maximum.\n\n${mt.infos}`);
        } catch (error) {
            message.channel.send("Ce métier n'existe pas.");
        }
    }
};

module.exports.help = {
    name: "metier",
    aliases: [],
    category: "economie",
    desription: "Trouvez un métier.",
    usage: "[<infos/postuler/demissionner> <metier>]",
    cooldown: 3,
    permissions: false,
    args: false
};