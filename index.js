// Код писал http://relapse.pw

const Discord = require('discord.js');
const bot = new Discord.Client()
const botconfig = require('./botconfig.json')
const fs = require("fs");
const ms = require("ms");
const ytdl = require('ytdl-core');
const prefix = botconfig.prefix;
console.log('Loading..');

bot.login(process.env.BOT_TOKEN);
//bot.login(botconfig.token);

let rp = require('./rp.json');

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

    console.log(`Bot is ready to go!`)

    console.log(``);

    setTimeout(function () {
        console.log(` ________  _______   ___       ________  ________  ________  _______`)
    }, 500)
    setTimeout(function () {
        console.log(`|\\   __  \\|\\  ___ \\ |\\  \\     |\\   __  \\|\\   __  \\|\\   ____\\|\\  ___ \\`)
    }, 1000)
    setTimeout(function () {
        console.log(`\\ \\  \\|\\  \\ \\   __/|\\ \\  \\    \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\___|\\ \\   __/|`)
    }, 1500)
    setTimeout(function () {
        console.log(` \\ \\   _  _\\ \\  \\_|/_\\ \\  \\    \\ \\   __  \\ \\   ____\\ \\_____  \\ \\  \\_|/__`)
    }, 2000)
    setTimeout(function () {
        console.log(`  \\ \\  \\\\  \\\\ \\  \\_|\\ \\ \\  \\____\\ \\  \\ \\  \\ \\  \\___|\\|____|\\  \\ \\  \\_|\\ \\`)
    }, 2500)
    setTimeout(function () {
        console.log(`   \\ \\__\\\\ _\\\\ \\_______\\ \\_______\\ \\__\\ \\__\\ \\__\\     ____\\_\\  \\ \\_______\\`)
    }, 3000)
    setTimeout(function () {
        console.log(`    \\|__|\\|__|\\|_______|\\|_______|\\|__|\\|__|\\|__|    |\\_________\\|_______|`)
    }, 3500)
    setTimeout(function () {
        console.log(`                                                     \\|_________|`)
    }, 4000)
    setTimeout(function () {
        console.log(` `);

        console.log(`Код писал http://relapse.pw`);
    }, 4500)

    /*
    
 ________  _______   ___       ________  ________  ________  _______
|\   __  \|\  ___ \ |\  \     |\   __  \|\   __  \|\   ____\|\  ___ \
\ \  \|\  \ \   __/|\ \  \    \ \  \|\  \ \  \|\  \ \  \___|\ \   __/|
 \ \   _  _\ \  \_|/_\ \  \    \ \   __  \ \   ____\ \_____  \ \  \_|/__
  \ \  \\  \\ \  \_|\ \ \  \____\ \  \ \  \ \  \___|\|____|\  \ \  \_|\ \
   \ \__\\ _\\ \_______\ \_______\ \__\ \__\ \__\     ____\_\  \ \_______\
    \|__|\|__|\|_______|\|_______|\|__|\|__|\|__|    |\_________\|_______|
                                                     \|_________|


    
    */
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

    // Without .toLowerCase();
    let normalMsg = message.content;
    let normalMessageArray = normalMsg.split(' ');
    let normalCmd = normalMessageArray[0];
    let normalArgs = normalMessageArray.slice(1);

    // data

    if (cmd === prefix + "data") {
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log(`rp: ${fs.readFileSync('rp.json', 'utf8')}`)
        console.log(' ');
        console.log(' ');
        console.log(' ');
    }

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

    if (message.author.id == "356485223250264064" || message.author.id == "351441278174494720" || message.author.id == "301218562146566146") {

        // create

        if (!rp[message.author.id + message.guild.id]) {
            rp[message.author.id + message.guild.id] = {
                name: 0,
                class: "Не выбран",
                level: 1
            };
        }

        if (cmd === prefix + "create") {
            if (rp[message.author.id + message.guild.id].name) {
                let createPersonAlreadyCreatedEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":x: У **вас** уже есть персонаж, для просмотра введите `" + `**${prefix}profile**` + "`")
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(createPersonAlreadyCreatedEmbed);
            }

            let createName = normalArgs[0];
            let createSurName = normalArgs[1];

            if (!createSurName) {
                rp[message.author.id + message.guild.id].name = createName;

                fs.writeFile('./rp.json', JSON.stringify(rp), (err) => {
                    if (err) console.log(err);
                });

                let createPersonEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setThumbnail(sender.displayAvatarURL)
                    .setColor(embedColor)
                    .setDescription(`:white_check_mark: Персонаж успешно создан`)
                    .addField(`Имя :large_blue_circle:`, `${createName}`, true)
                    .addField(`Уровень :gem:`, `1`, true)
                    .addField(`Класс :crossed_swords:`, `Не выбран`, true)
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(createPersonEmbed);
            }

            rp[message.author.id + message.guild.id].name = createName + ' ' + createSurName;

            fs.writeFile('./rp.json', JSON.stringify(rp), (err) => {
                if (err) console.log(err);
            });

            let createPersonEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setThumbnail(sender.displayAvatarURL)
                .setColor(embedColor)
                .setDescription(`:white_check_mark: Персонаж успешно создан`)
                .addField(`Имя :large_blue_circle:`, `${createName} ${createSurName}`, true)
                .addField(`Уровень :gem:`, `1`, true)
                .addField(`Класс :crossed_swords:`, `Не выбран`, true)
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(createPersonEmbed);
        }

        // profile

        if (cmd === prefix + "profile") {
            if (!rp[message.author.id + message.guild.id].name) {
                let profileNoPersonEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":x: У **вас** ещё нету профиля, для создания используйте команду `" + `${prefix}create` + "`")
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(profileNoPersonEmbed);
            }
            let profilePersonEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setColor(embedColor)
                .setDescription(`:small_orange_diamond: Профиль`)
                .setThumbnail(sender.displayAvatarURL)
                .addField(`Имя :large_blue_circle:`, `${rp[message.author.id + message.guild.id].name}`, true)
                .addField(`Уровень :gem:`, `${rp[message.author.id + message.guild.id].level}`, true)
                .addField(`Класс :crossed_swords:`, `${rp[message.author.id + message.guild.id].class}`, true)
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(profilePersonEmbed);
        }

        // classes

        function classes(classFunction) {
            let classLocalized;

            if (classFunction == "warrior" || classFunction == "воин") {
                if (rp[message.author.id + message.guild.id].class == "warrior") {
                    let switchHaveAlreadyEmbed = new Discord.RichEmbed()
                        .setAuthor(name = bot.user.username, icon_url = bIcon)
                        .setColor(embedColor)
                        .setDescription(`:x: У **вас** уже стоит класс ` + "`" + `${switchClassName}` + "`")
                        .setFooter(version, sender.displayAvatarURL)

                    message.delete().catch(O_o => { });
                    return message.channel.send(switchHaveAlreadyEmbed);
                }

                classLocalized = "Воин";

                rp[message.author.id + message.guild.id].class = classLocalized;

                fs.writeFile('./rp.json', JSON.stringify(rp), (err) => {
                    if (err) console.log(err);
                });
            }

            else if (classFunction == "medic" || classFunction == "медик") {
                classLocalized = "Медик";

                rp[message.author.id + message.guild.id].class = classLocalized;

                fs.writeFile('./rp.json', JSON.stringify(rp), (err) => {
                    if (err) console.log(err);
                });
            }

            else {
                let classInvalidEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(`:x: Класс ` + "`" + `${classFunction}` + "`" + ` не найден в базе данных`)
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(classInvalidEmbed);
            }

            let classChooseEmbed = new Discord.RichEmbed()
                .setAuthor(name = bot.user.username, icon_url = bIcon)
                .setThumbnail(sender.displayAvatarURL)
                .setColor(embedColor)
                .setDescription(":white_check_mark: Класс `" + `${classLocalized}` + "` был успешно присвоен вашему персонажу")
                .addField(`Имя :large_blue_circle:`, `${rp[message.author.id + message.guild.id].name}`, true)
                .addField(`Уровень :gem:`, `${rp[message.author.id + message.guild.id].level}`, true)
                .addField(`Класс :crossed_swords:`, `${classLocalized}`, true)
                .setFooter(version, sender.displayAvatarURL)

            message.delete().catch(O_o => { });
            return message.channel.send(classChooseEmbed);
        }

        // class

        if (cmd === prefix + "class") {
            let className = args[0];
            if (!className) {
                let classNoNameEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(`:x: **Вы** не ввели название класса`)
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(classNoNameEmbed);
            }

            if (!rp[message.author.id + message.guild.id].name) {
                let classNoPersonEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":x: **Ваш** персонаж не найден! Сперва создайте персонажа с помощью команды `" + `${prefix}create` + "`")
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(classNoPersonEmbed);
            }

            if (rp[message.author.id + message.guild.id].class != "Не выбран") {
                let createPersonAlreadyCreatedEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":x: У **вас** уже есть класс, для смены введите `" + `${prefix}switch` + "`")
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(createPersonAlreadyCreatedEmbed);
            }

            classes(className);
        }

        // switch

        if (cmd === prefix + "switch") {
            let switchClassName = args[0];
            if (!switchClassName) {
                let classNoNameEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(`:x: **Вы** не ввели название класса`)
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(classNoNameEmbed);
            }

            if (!rp[message.author.id + message.guild.id].name) {
                let switchNoPersonEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":x: **Ваш** персонаж не найден! Сперва создайте персонажа с помощью команды `" + `${prefix}create` + "`")
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(switchNoPersonEmbed);
            }

            if (rp[message.author.id + message.guild.id].class == "Не выбран") {
                let switchNoPersClassEmbed = new Discord.RichEmbed()
                    .setAuthor(name = bot.user.username, icon_url = bIcon)
                    .setColor(embedColor)
                    .setDescription(":x: У **вашего** персонажа нету никаких классов для замены. Сперва выберите класс с помощью команды `" + `${prefix}class` + "`")
                    .setFooter(version, sender.displayAvatarURL)

                message.delete().catch(O_o => { });
                return message.channel.send(switchNoPersClassEmbed);
            }

            classes(switchClassName);
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
        let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(normalArgs[0]));
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

        let muteParameters = normalArgs.join(' ').slice(22);
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
        let toUnMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(normalArgs[0]));
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
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(normalArgs[0]));
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

        let rReason = normalArgs.join(' ').slice(22);
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
