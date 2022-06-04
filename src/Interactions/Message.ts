import { LocalizationMap } from "discord-api-types/v10";
import { Client, CommandInteraction, MessageApplicationCommandData } from 'discord.js';
import { ApplicationCommandTypes } from "discord.js/typings/enums";

export type TMessageContextMenu = {} & MessageApplicationCommandData

export class MessageContextMenu {
    name!: string;
    nameLocalizations?: LocalizationMap;
    defaultPermission?: boolean | undefined;
    type!: 'MESSAGE' | ApplicationCommandTypes.MESSAGE
    constructor(command: TMessageContextMenu, runOptions: (client: Client, interaction: CommandInteraction) => Promise<void>) {
        this.name = command.name;
        this.nameLocalizations = command.nameLocalizations;
        this.defaultPermission = command.defaultPermission;
        this.type = command.type;
    }
}