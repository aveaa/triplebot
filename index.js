// Код писал http://relapse.pw

const Discord = require('discord.js');
const bot = new Discord.Client()
const botconfig = require('./botconfig.json')
const fs = require("fs");
const ms = require("ms");
const prefix = botconfig.prefix;
console.log('Loading..');

bot.login(process.env.BOT_TOKEN);
//bot.login(botconfig.token);

let statuses = [`discord.gg/wdatG3E | ${prefix}help`, `ролики RusTNT | ${prefix}help`];
let types = [0, 1, 2, 3];

bot.on("ready", () => {
    setInterval(function () {

        let status = statuses[Math.floor(Math.random() * statuses.length)];
        let type = types[Math.floor(Math.random() * types.length)];

        if (type == 0) {
            bot.user.setPresence({
                game: {
                    name: `Список команд | ${prefix}help`,
                    status: 'Online',
                    type: type
                }
            })
        }

        if (type == 1) {
            bot.user.setPresence({
                game: {
                    url: 'https://www.twitch.tv/advakat20',
                    name: `Список команд | ${prefix}help`,
                    status: 'Online',
                    type: type
                }
            })
        }

        if (type == 2) {
            bot.user.setPresence({
                game: {
                    name: `Список команд | ${prefix}help`,
                    status: 'Online',
                    type: type
                }
            })
        }

        if (type == 3) {
            bot.user.setPresence({
                game: {
                    name: `Список команд | ${prefix}help`,
                    status: 'Online',
                    type: type
                }
            })
        }
    }, 10000)

    console.log(``);
    console.log("Бот запущен");
    console.log(" ");
    console.log(`Discord Тег: ${bot.user.tag}`);
    console.log(`Discord ID: ${bot.user.id}`);
    console.log(``);
    console.log(`Код писал http://relapse.pw`);
});

bot.on('message', message => {
    let version = `${message.author.tag}`;
    let logChannel = message.guild.channels.find('name', "logs");
    let sender = message.author;
    let msg = message.content.toLowerCase();
    let messageArray = msg.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let bIcon = bot.user.displayAvatarURL;
    let sIcon = sender.displayAvatarURL;
    let embedColor = Math.floor(Math.random() * 16777214) + 1;

    // help

    if (cmd === prefix + "help") {
        let helpEmbed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setColor(embedColor)
            .setDescription(`:small_orange_diamond: Список команд`)
            .addField(`${prefix}info [@ник]`, `Просмотреть информацию о **пользователе**`)
            .addField(`${prefix}clear [количество]`, `Очистить текстовый канал от **[количества]** сообщений`)
            .addField(`${prefix}mute [@ник] [причина]`, `Заткнуть **пользователя**`)
            .addField(`${prefix}unmute [@ник]`, `Размутить **пользователя**`)
            .addField(`${prefix}botinfo`, `Просмотреть информацию о **боте**`)
            .addField(`${prefix}report [@ник] [причина]`, `Кинуть жалобу на **пользователя**`)
            .setFooter(version, sender.displayAvatarURL)

        return message.channel.send(helpEmbed);
    }

    // check

    if (cmd === prefix + "check") {
        let senderGame = sender.presence.game;

        if (senderGame == "Grand Theft Auto V") {
            message.member.addRole(message.guild.roles.find(`name`, "GTA V").id)
        }
        if (senderGame == "relapse.bot") {
            message.member.addRole(message.guild.roles.find(`name`, "test4").id)
        }
    }

    // botinfo

    if (cmd === prefix + "botinfo") {
        var botCreated = bot.user.createdAt.toString().split(' ');
        var botCreatedAt = botCreated[2] + ' ' + botCreated[1] + ", " + botCreated[3];

        let botEmbed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(":small_orange_diamond: Информация о боте ")
            .setColor(embedColor)
            .setThumbnail(bIcon)
            .addField("Название бота", bot.user.username, true)
            .addField("Создан ", "9 сентября, 2018", true)
            .addField("Создал ", "<@301218562146566146>", true)
            .addField('Версия', botconfig.version)
            .setFooter("Создан специально для сервера Трипла", 'https://yt3.ggpht.com/a-/AN66SAzR1jcsB9H4wCDW2ybh14XQbFriGB3-HsPFdg=s288-mo-c-c0xffffffff-rj-k-no')

        message.delete().catch(O_o => { });
        return message.channel.send(botEmbed);
    }

    // serverinfo

    let serverCreated = message.guild.createdAt.toString().split(' ');
    let serverCreatedAt = serverCreated[2] + ' ' + serverCreated[1] + ", " + serverCreated[3];

    let serverJoined = message.guild.joinedAt.toString().split(' ');
    let serverJoinedAt = serverJoined[2] + ' ' + serverJoined[1] + ", " + serverJoined[3];

    if (cmd === prefix + "serverinfo") {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(":small_orange_diamond: Информация о сервере")
            .setColor(embedColor)
            .setThumbnail(sicon)
            .addField("Название сервера ", message.guild.name, true)
            .addField("Дата создания сервера ", serverCreatedAt, true)
            .addField("Бот вошел на сервер ", serverJoinedAt, true)
            .addField("Всего участников на сервере ", message.guild.memberCount, true)
            .setFooter(version, sender.displayAvatarURL)

        message.delete().catch(O_o => { });
        return message.channel.send(serverembed);
    }

    // info

    if (cmd.startsWith(prefix + "info")) {
        if (cmd === prefix + "info") {
            let iUser = message.guild.member(message.mentions.users.first());
            if (!iUser) {
                message.delete().catch(O_o => { });
                let userCreated = sender.createdAt.toString().split(' ');
                let finalString = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setThumbnail(sender.displayAvatarURL)
                    .setDescription(":small_orange_diamond: Информация о <@" + sender.id + ">")
                    .setColor(embedColor)
                    .addField("Ник ", sender.username, true)
                    .addField("Тег ", sender.tag, true)
                    .addField("ID ", sender.id, true)
                    .addField("Аккаунт был создан ", userCreated[2] + ' ' + userCreated[1] + ", " + userCreated[3], true)
                    .setFooter(version, sender.displayAvatarURL)
                return message.channel.send(finalString);
            }
            if (iUser.id == sender.id) {
                message.delete().catch(O_o => { });
                let userCreated = sender.createdAt.toString().split(' ');
                let finalString = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setThumbnail(sender.displayAvatarURL)
                    .setDescription(":small_orange_diamond: Информация о <@" + sender.id + ">")
                    .setColor(embedColor)
                    .addField("Ник ", sender.username, true)
                    .addField("Тег ", sender.tag, true)
                    .addField("ID ", sender.id, true)
                    .addField("Аккаунт был создан ", userCreated[2] + ' ' + userCreated[1] + ", " + userCreated[3], true)
                    .setFooter(version, sender.displayAvatarURL)
                return message.channel.send(finalString);
            }
            message.delete().catch(O_o => { });

            let userCreated = iUser.user.createdAt.toString().split(' ');
            let finalString = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setThumbnail(iUser.user.displayAvatarURL)
                .setDescription(":small_orange_diamond: Информация о <@" + iUser.id + ">")
                .setColor(embedColor)
                .addField("Ник: ", `<@${iUser.id}>`, true)
                .addField("Тег ", iUser.user.tag, true)
                .addField("ID: ", iUser.id, true)
                .addField("Аккаунт был создан ", userCreated[2] + ' ' + userCreated[1] + ", " + userCreated[3], true)
                .setFooter(version, sender.displayAvatarURL)
            return message.channel.send(finalString)
                .catch(error => {
                    let infoError = new Discord.RichEmbed()
                        .setAuthor(name = bot.user.username, icon_url = bIcon)
                        .setColor(embedColor)
                        .setDescription("Ошибка")
                        .addField("Причина", error)
                        .setFooter(version, sender.displayAvatarURL, sender.displayAvatarURL)
                    message.channel.send(infoError);
                })
        }
    }

    // mute

    if (cmd === prefix + "mute") {
        let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let toMuteSpellingEmbed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setColor(embedColor)
            .setDescription(`:small_orange_diamond: Правописание ${prefix}mute`)
            .addField(`Правописание команды`, `${prefix}mute [ник] [время] [причина]`)
            .addField(`Правописание времени`, `Секунда: [время]s \nМинута: [время]m \nЧас: [время]h \nДень: [время]d`)
            .setFooter(version, sender.displayAvatarURL)

        if (!toMute) {
            let toMuteNotFindUser = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(":x: **Пользователь** не найден")
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(toMuteNotFindUser);
        }

        if (toMute.id == sender.id) {
            let toMuteCantMuteUrSelf = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: Нельзя заткнуть самого себя`)
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(toMuteCantMuteUrSelf);
        }

        if (toMute.id == bot.user.id) {
            let toMuteCantMuteUrSelf = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: Нельзя заткнуть бота`)
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(toMuteCantMuteUrSelf);
        }

        if (toMute.hasPermission("ADMINISTRATOR")) {
            let toMuteCantMute = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: Я не могу заткнуть **администрацию**`)
                .setFooter(version, sender.displayAvatarURL)
            message.delete().catch(O_o => { });
            return message.channel.send(toMuteCantMute);
        }
        let muterole = message.guild.roles.find(`name`, "Осуждённый");

        if (!muterole) {
            async function functionMuteOne() {
                try {
                    muterole = await message.guild.createRole({
                        name: "Осуждённый",
                        color: "#000000",
                        permissions: []
                    })
                    message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false,
                            CONNECT: false
                        })
                    })
                } catch (e) {
                    console.lot(e.stack)
                }
            }
            functionMuteOne();
        }

        let muteParameters = args.join(' ').slice(22);
        let muteTime = args[1];
        if (!message.member.roles.find("name", "Агент ЦРУ") && !message.member.roles.find("name", "Спец.Агент ЦРУ") && !message.member.roles.find("name", "Штаб")) {
            let muteNoPerms = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(":x: У **вас** нет прав для использования данной команды")
                .setFooter(version, sender.displayAvatarURL)
            message.delete().catch(O_o => { });
            return message.channel.send(muteNoPerms);
        }

        if (!muteTime) {
            let muteNoTimeEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(":small_orange_diamond: **Вы** не указали время")
                .setFooter(version, sender.displayAvatarURL)
            message.delete().catch(O_o => { });
            message.channel.send(muteNoTimeEmbed);
            return message.channel.send(toMuteSpellingEmbed);
        }

        let muteReason = muteParameters.slice(muteTime.length);
        if (!muteReason) {
            let muteNoReasonEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setDescription(":x: **Вы** не указали причину")
                .setColor(embedColor)
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            message.channel.send(muteNoReasonEmbed);
            return message.channel.send(toMuteSpellingEmbed);
        }

        let muteModLog = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(':small_orange_diamond: Мут')
            .setColor(embedColor)
            .addField('Нарушитель ', toMute, true)
            .addField('Заткнул ', "<@" + message.author.id + ">", true)
            .addField('Длительность ', `${muteTime}`, true)
            .addField('Причина ', `${muteReason}`, true)
            .setFooter(version, sender.displayAvatarURL)

        let muteLog = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(`:white_check_mark: ${toMute} был заткнут на ${muteTime} по причине ` + '`' + muteReason + '`')
            .setColor(embedColor)
            .setFooter(version, sender.displayAvatarURL)
        message.delete().catch(O_o => { });

        async function functionMuteTwo() {
            await (toMute.addRole(muterole.id));
            message.channel.send(muteLog);
            logChannel.send(muteModLog);
        }

        functionMuteTwo();

        setTimeout(function () {
            if (!toMute.roles.find('name', 'Осуждённый')) {
                return;
            }
            toMute.removeRole(muterole.id);
            let muteMuted = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setDescription(`:small_orange_diamond: <@${toMute.id}> был размучен`)
                .setColor(embedColor)
                .setFooter(version, sender.displayAvatarURL)

            logChannel.send(muteMuted);
        }, ms(muteTime));
    }

    // clear

    if (cmd.startsWith(prefix + "clear")) {
        let clearSpellingEmbed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setColor(embedColor)
            .setDescription(`Правописание ${prefix}clear`)
            .addField(`Правописание команды ${prefix}clear`, `${prefix}clear [количество]`)
            .setFooter(version, sender.displayAvatarURL)

        let clearSize = args.join(' ').slice(22);

        async function clear() {
            message.delete();

            if (!message.member.roles.find("name", "Штаб")) {
                let clearNoRoleEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(`:x: У **вас** нет доступа к команде ${prefix}clear`)
                    .setFooter(version, sender.displayAvatarURL)

                message.channel.send(clearNoRoleEmbed);
                return;
            }

            if (isNaN(args[0])) {
                let clearNoNumEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":small_orange_diamond: Не указано количество сообщений")
                    .setFooter(version, sender.displayAvatarURL)
                message.channel.send(clearNoNumEmbed);
                return message.channel.send(clearSpellingEmbed);
            }

            const fetched = await message.channel.fetchMessages({ limit: args[0] });
            console.log('Найдено ' + fetched.size + ' сообщений, удаление...')

            let clearDeletedMsgEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`Успешно удалено ${fetched.size} сообщений`)
                .setFooter(version, sender.displayAvatarURL)

            message.channel.bulkDelete(fetched)
                .catch(error => {
                    let clearError = new Discord.RichEmbed()
                        .setAuthor(name = bot.user.username, icon_url = bIcon)
                        .setColor(embedColor)
                        .setDescription("Ошибка")
                        .addField("Причина", error)
                        .setFooter(version, sender.displayAvatarURL)
                    message.channel.send(clearError);
                })
        }
        clear();
    }

    // unmute

    if (cmd === prefix + "unmute") {
        let toUnMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let UnMuteSpellingEmbed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setColor(embedColor)
            .setDescription(`:small_orange_diamond: Правописание ${prefix}mute`)
            .addField(`Правописание команды`, `${prefix}mute [ник] [время] [причина]`)
            .addField(`Правописание времени`, `Секунда: [время]s \nМинута: [время]m \nЧас: [время]h \nДень: [время]d`)
            .setFooter(version, sender.displayAvatarURL)

        if (!toUnMute) {
            let unMuteNotFindUser = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(":x: **Пользователь** не найден")
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(unMuteNotFindUser);
        }

        if (!message.member.roles.find("name", "Агент ЦРУ") && !message.member.roles.find("name", "Спец.Агент ЦРУ") && !message.member.roles.find("name", "Штаб")) {
            let unMuteCant = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: У **вас** нет прав для использования данной команды`)
                .setFooter(version, sender.displayAvatarURL)
            message.delete().catch(O_o => { });
            return message.channel.send(unMuteCant);
        }

        if (!toUnMute.roles.find("name", "Осуждённый")) {
            let unMuteNoRole = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: **Пользователь** не замучен`)
                .setFooter(version, sender.displayAvatarURL)
            message.delete().catch(O_o => { });
            return message.channel.send(unMuteNoRole);
        }

        let unMuteRole = message.guild.roles.find(`name`, "Осуждённый");

        let unMuteModLog = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(':small_orange_diamond: Пользователь был размучен')
            .setColor(embedColor)
            .addField('Пользователь ', toUnMute, true)
            .addField('Размутил ', "<@" + message.author.id + ">", true)
            .setFooter(version, sender.displayAvatarURL)
        message.delete().catch(O_o => { });

        let unMuted = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(`:white_check_mark: <@${toUnMute.id}> был размучен`)
            .setColor(embedColor)
            .setFooter(version, sender.displayAvatarURL)

        async function functionUnMuteTwo() {
            await (toUnMute.removeRole(unMuteRole.id));
            message.channel.send(unMuted);
            logChannel.send(unMuteModLog);
        }
        functionUnMuteTwo();
    }

    // report

    if (cmd === prefix + "report") {
        if (message.channel.id != '460720014778171412' && message.channel.id != '489049716307525642' && message.channel.id != '489041917745692673') {
            return;
        }
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let rSpellingEmbed = new Discord.RichEmbed()
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(`:small_orange_diamond: Правописание ${prefix}report`)
            .addField("Правописание команды", `${prefix}report [ник] [причина]`)
            .setColor(embedColor)
            .setFooter(version, sender.displayAvatarURL)

        if (!rUser) {
            let userNotFoundEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setDescription(":x: Пользователь не найден")
                .setColor(embedColor)
                .setFooter(version, sender.displayAvatarURL)

            message.channel.send(userNotFoundEmbed);
            return message.channel.send(rSpellingEmbed);
        }

        if (rUser.id == sender.id) {
            let rCantReportUrSelf = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setDescription(":x: Нельзя кинуть жалобу на себя")
                .setColor(embedColor)
                .setFooter(version, sender.displayAvatarURL)

            return message.channel.send(rCantReportUrSelf);
        }

        let rReason = args.join(' ').slice(22);
        if (!rReason) {
            let rNoReasonEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setDescription(`:x: ` + sender.username + ", вы не указали причину")
                .setColor(embedColor)
                .setFooter(version, sender.displayAvatarURL)

            message.channel.send(rNoReasonEmbed);
            return message.channel.send(rSpellingEmbed);
        }

        if (rUser.id == bot.user.id) {
            let canNotReportBot = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: Нельзя пожаловаться на бота`)
                .setFooter(version, sender.displayAvatarURL)

            return message.channel.send(canNotReportBot);
        }

        if (rUser.id == sender.id) {
            let canNotReportUrSelf = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:x: Нельзя пожаловаться на себя`)
                .setFooter(version, sender.displayAvatarURL)

            return message.channel.send(canNotReportUrSelf);
        }

        let serverCreated = message.createdAt.toString().split(' ');
        let serverCreatedAt = serverCreated[2] + ' ' + serverCreated[1] + ", " + serverCreated[3];
        let reportEmbed = new Discord.RichEmbed()
            .setThumbnail(rUser.displayAvatarURL)
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(":small_orange_diamond: Жалоба на пользователя")
            .setColor(embedColor)
            .addField("Ник", rUser, true)
            .addField("ID ", + rUser.id, true)
            .addField("Пожаловался ", sender, true)
            .addField("Время ", serverCreatedAt, true)
            .addField("Причина", rReason, true)
            .setFooter(version, sender.displayAvatarURL)

        let reportEmbedText = new Discord.RichEmbed()
            .setThumbnail(rUser.displayAvatarURL)
            .setAuthor(name = bot.user.username, icon_url = bIcon)
            .setDescription(":white_check_mark: Жалоба на пользователя отправлена")
            .setColor(embedColor)
            .addField("Ник ", rUser, true)
            .addField("ID ", rUser.id, true)
            .addField("Причина", rReason, true)
            .setFooter(version, sender.displayAvatarURL)

        let reportsChannel = message.guild.channels.find('name', "репорты");

        if (!reportsChannel)
            return message.channel.send("Не удалось найти текстовый канал для репортов")

        message.channel.send(reportEmbedText)

        reportsChannel.send(reportEmbed);
        return;
    }
});
