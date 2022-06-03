import { Client, CommandInteraction, GuildMember, ApplicationCommandOptionData } from "discord.js";
import { ApplicationCommandTypes } from "discord.js/typings/enums";
import { LocalizationMap } from 'discord-api-types/v10';

export interface RunOptions {
    client: Client
    interaction: CommandInteraction & { member: GuildMember }
}

export type TCommand = {
    name: string;
    nameLocalizations?: LocalizationMap;
    description: string;
    descriptionLocalizations?: LocalizationMap;
    defaultPermission?: boolean;
    options?: ApplicationCommandOptionData[];
    run: RunOptions;
}

export class Command {
    name!: string;
    nameLocalizations?: LocalizationMap;
    description!: string;
    descriptionLocalizations?: LocalizationMap;
    defaultPermission?: boolean | undefined;
    options?: ApplicationCommandOptionData[] | undefined;
    type?: 'CHAT_INPUT' | ApplicationCommandTypes.CHAT_INPUT | undefined;
    run!: RunOptions;

    constructor(command: TCommand) {
        this.name = command.name;
        this.nameLocalizations = command.nameLocalizations;
        this.description = command.description;
        this.descriptionLocalizations = command.descriptionLocalizations;
        this.defaultPermission = command.defaultPermission;
        this.options = command.options;
        this.run = command.run;
    }
}